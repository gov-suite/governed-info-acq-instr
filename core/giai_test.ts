import { testingAsserts as ta } from "./deps-test.ts";
import { path } from "./deps.ts";
import * as mef from "./giai_test.golden/medigy-evaluation-facets.conf.ts";
import * as mod from "./mod.ts";

// find relative path to the test data directory (so that tests can be run from anywhere)
const homePath = mod.fileSystemPath(
  path.relative(
    Deno.cwd(),
    `${path.dirname(import.meta.url)}/giai_test.golden`
      .substr("file://".length),
  ),
);

Deno.test(`${homePath.fsPath}/medigy-evaluation-facets.conf.ts`, async () => {
  ta.assert(
    homePath.exists,
    `Test data directory '${homePath.fsPath}' not found.`,
  );

  const config = new mef.MedigyEvaluationFacets(homePath);
  if (config.campaigns) {
    for (const c of config.campaigns) {
      ta.assert(
        mod.isFileSystemPath(c.homePath),
        `'${c.homePath}' is not a file system path, not sure how to handle.`,
      );
      for (const q of c.questionnaires) {
        ta.assert(
          q.nihLhcFormFile.fileExists,
          `LHC Form JSON '${q.nihLhcFormFile.fileName}' should exist`,
        );
      }
    }
  }
});
