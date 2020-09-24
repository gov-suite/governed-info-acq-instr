import docopt, {
  DocOptions,
} from "https://denopkg.com/Eyal-Shalev/docopt.js@v1.0.1/src/docopt.ts";
import {
  fs,
  inflect,
  path,
  serializeJS as sjs,
  typedDataGen as tdg,
} from "./deps.ts";

const $VERSION = "v1.0.0";
const docoptSpec = `
Medigy Quantitative Evaluation Facets Controller ${$VERSION}.

Usage:
  facetsctl json-to-mod <start-path> <lhc-json-src> [--verbose] [--overwrite]
  facetsctl json-to-gai <lhc-json-src> [--verbose] [--overwrite]
  facetsctl json-to-tdg <lhc-json-src> [--verbose]
  facetsctl -h | --help
  facetsctl --version

Options:
  -h --help                   Show this screen
  --version                   Show version
  <lhc-json-src>              LHC Form JSON source(s) glob (like "**/*.lhc-form.json")
  <start-path>                Starting path to search for LHC Form JSON sources
  --lform-schema-ts=<url>     Where the lform.ts TypeScript schema can be found
  --persist-on-error          Saves the generated *.auto.ts file on error
  --verbose                   Be explicit about what's going on
`;

export interface CommandHandler {
  (options: DocOptions): Promise<true | void>;
}

export function isDryRun(options: DocOptions): boolean {
  const { "--dry-run": dryRun } = options;
  return dryRun ? true : false;
}

export function isVerbose(options: DocOptions): boolean {
  const { "--verbose": verbose } = options;
  return verbose ? true : false;
}

function fileNameComponents(
  fileName: string,
): { name: string; extensions: string[] } {
  const dotPosition = fileName.indexOf(".");
  if (dotPosition === -1) {
    return {
      name: fileName,
      extensions: [],
    };
  }
  return {
    name: fileName.substr(0, dotPosition),
    extensions: fileName.substr(dotPosition + 1).split("."),
  };
}

function facetClassName(fileName: inflect.InflectableValue): string {
  let result = inflect.toPascalCase(fileName);
  if (result.endsWith("EvaluationFacet")) {
    result = result.substr(0, result.length - "EvaluationFacet".length);
  }
  if (!result.endsWith("Facet")) result += "Facet";
  return result;
}

function forceExtension(
  extn: string,
  we: fs.WalkEntry,
  fnc: { name: string },
): string {
  return `${path.join(path.dirname(we.path), fnc.name)}${extn}`;
}

export async function lhcFormToModuleCatalog(
  options: DocOptions,
): Promise<true | void> {
  const {
    "json-to-mod": jsonToMod,
    "<start-path>": startPathSpec,
    "<lhc-json-src>": lhcFormJsonSrcSpec,
    "--overwrite": overwrite,
  } = options;
  if (jsonToMod && startPathSpec) {
    const verbose = isVerbose(options);
    const pathSpec = startPathSpec.toString();
    if (!fs.existsSync(pathSpec)) {
      console.error(`${pathSpec} does not exist.`);
      return true;
    }
    const stat = Deno.statSync(pathSpec);
    if (!stat.isDirectory) {
      console.error(`${pathSpec} is not a directory.`);
      return true;
    }

    for (const dirWE of fs.walkSync(pathSpec)) {
      if (dirWE.isDirectory) {
        const dirIV = inflect.guessCaseValue(dirWE.name);
        const facetsMgrFileName = path.join(
          dirWE.path,
          `${inflect.toKebabCase(dirIV)}-facets.gai.ts`,
        );
        const facetsMgrClassName = inflect.toPascalCase(dirIV) + "Facets";
        const modFileName = path.join(dirWE.path, "mod.ts");
        if (fs.existsSync(modFileName) && !overwrite) {
          console.warn(
            `${modFileName} exists, use --overwrite to replace it.`,
          );
          continue;
        }

        const imports: string[] = [];
        const exports: string[] = [];
        const instanceDecls: string[] = [];
        const instanceAssgns: string[] = [];
        const instanceRegisters: string[] = [];
        const facets: string[] = [];
        const jsonSpec = path.join(
          dirWE.path,
          lhcFormJsonSrcSpec
            ? lhcFormJsonSrcSpec.toString()
            : "*.lhc-form.json",
        );
        for (const we of fs.expandGlobSync(jsonSpec)) {
          if (
            dirWE.path != path.dirname(path.relative(pathSpec, we.path))
          ) {
            continue;
          }
          const fnc = fileNameComponents(we.name);
          const formIV = inflect.guessCaseValue(fnc.name);
          const className = facetClassName(formIV);
          imports.push(`import { ${className} } from "./${fnc.name}.gai.ts";`);
          instanceDecls.push(
            `  readonly ${inflect.toCamelCase(formIV)}: ${className};`,
          );
          instanceAssgns.push(
            `  this.${inflect.toCamelCase(formIV)} = new ${className}();`,
          );
          instanceRegisters.push(
            `  this.instruments.push(this.${inflect.toCamelCase(formIV)});`,
          );
          exports.push(
            `export * as ${
              inflect.toCamelCase(formIV)
            } from "./${fnc.name}.gai.ts";`,
          );
          facets.push(className);
        }
        if (imports.length > 0) {
          const managerCode = `
          import { EvalFacetConstructor, EvalFacetsConstructionContext, EvaluationFacets } from "../mod.ts";
          
          ${imports.join("\n")}
          
          // deno-lint-ignore no-empty-interface
          export interface ${facetsMgrClassName}ConstructionContext extends EvalFacetsConstructionContext {}

          export class ${facetsMgrClassName} extends EvaluationFacets {
            static readonly facets: readonly EvalFacetConstructor[] = [
              ${facets.join(", ")}
            ];
            ${instanceDecls.join("\n")}

            constructor(ctx: ${facetsMgrClassName}ConstructionContext) {
              super({ ...ctx,
                identity: "${inflect.toHumanCase(dirIV)}",
                path: ctx.path.childPath("${dirWE.name}"),
              });
              ${instanceAssgns.join("\n")}
              ${instanceRegisters.join("\n")}
            }
          }

          export default ${facetsMgrClassName};
          `;
          exports.push(
            `export * from "./${path.basename(facetsMgrFileName)}";`,
          );
          Deno.writeTextFileSync(facetsMgrFileName, managerCode);
          Deno.writeTextFileSync(modFileName, exports.join("\n"));
          if (verbose) console.log(modFileName);
        } else {
          if (verbose) {
            console.log(
              `No LHC Form JSON files in ${dirWE.path}, ${facetsMgrFileName} and ${modFileName} not created.`,
            );
          }
        }
      }
    }
    return true;
  }
}

export async function lhcFormJsonToGovernedAcqInstrument(
  options: DocOptions,
): Promise<true | void> {
  const {
    "json-to-gai": jsonToGAI,
    "<lhc-json-src>": lhcFormJsonSrcSpec,
    "--overwrite": overwrite,
  } = options;
  if (jsonToGAI && lhcFormJsonSrcSpec) {
    const verbose = isVerbose(options);
    const sourceSpec = lhcFormJsonSrcSpec.toString();
    for (const we of fs.expandGlobSync(sourceSpec)) {
      const fnc = fileNameComponents(we.name);
      const gaiModuleFileName = forceExtension(".gai.ts", we, fnc);
      if (fs.existsSync(gaiModuleFileName) && !overwrite) {
        console.warn(
          `${gaiModuleFileName} exists, use --overwrite to replace it.`,
        );
        continue;
      }
      const iv = inflect.guessCaseValue(fnc.name);
      const className = facetClassName(iv);
      const tsModuleCode = `
      import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
      import lhcFormJsonModule from "./${
        tdg.forceExtension(".lhc-form.auto.tdg.ts", fnc.name)
      }";
      
      // deno-lint-ignore no-empty-interface
      export interface ${className}ConstructionContext extends EvalFacetConstructionContext {}

      export class ${className} extends EvaluationFacet {
        constructor(ctx?: ${className}ConstructionContext) {
          super({ ...ctx, nihlhcForm: lhcFormJsonModule });
        }
      }
      
      export default ${className};
      `;
      if (verbose) console.log(gaiModuleFileName);
      Deno.writeTextFileSync(gaiModuleFileName, tsModuleCode);
    }
    return true;
  }
}

export async function lhcFormJsonToTypedDataGenTs(
  options: DocOptions,
): Promise<true | void> {
  const {
    "json-to-tdg": jsonToTDG,
    "<lhc-json-src>": lhcFormJsonSrcSpec,
  } = options;
  if (jsonToTDG && lhcFormJsonSrcSpec) {
    const verbose = isVerbose(options);
    const sourceSpec = lhcFormJsonSrcSpec.toString();
    for (const we of fs.expandGlobSync(sourceSpec)) {
      const fnc = fileNameComponents(we.name);
      const jsonValue = JSON.parse(Deno.readTextFileSync(we.path));
      const jsonModuleFileName = forceExtension(
        ".lhc-form.auto.tdg.ts",
        we,
        fnc,
      );
      let tsModuleCode = `
      // Generated from ${we.name}. DO NOT EDIT.

      import { nihLhcForms as lforms, typedDataGen } from "../../deps.ts";

      export const form: lforms.NihLhcForm = ${
        sjs.stringify(jsonValue, tdg.cleanJS, 2)
      };
      
      export default form;
      
      if (import.meta.main) {
        new typedDataGen.CliArgsEmitter(import.meta.url).emitJSON(form);
      }`;
      if (verbose) console.log(path.relative(Deno.cwd(), jsonModuleFileName));
      Deno.writeTextFileSync(jsonModuleFileName, tsModuleCode);
    }
    return true;
  }
}

if (import.meta.main) {
  const handlers: CommandHandler[] = [
    lhcFormToModuleCatalog,
    lhcFormJsonToGovernedAcqInstrument,
    lhcFormJsonToTypedDataGenTs,
  ];
  try {
    const options = docopt(docoptSpec);
    let handled: true | void;
    for (const handler of handlers) {
      handled = await handler(options);
      if (handled) break;
    }
    if (!handled) {
      console.error("Unable to handle validly parsed docoptSpec:");
      console.dir(options);
    }
  } catch (e) {
    console.error(e.message);
  }
}
