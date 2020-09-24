import { fs, path } from "./deps.ts";
import type * as loc from "./location.ts";

export interface PolyglotFile {
  readonly fileName: loc.AbsoluteFsPathAndFileName;
  readonly fileExtn: loc.FileExtension;
  readonly fileExists: boolean;
  readonly relativeTo: (to: loc.FsPathOnly) => loc.RelativeFsPath;
}

export interface JsonFile extends PolyglotFile {
  readonly isJsonFile: true;
  readonly content: () => unknown;
}

export class TypicalJsonFile implements JsonFile {
  readonly isJsonFile = true;

  constructor(readonly fileName: string) {
  }

  content(): unknown {
    if (this.fileExists) {
      return JSON.parse(Deno.readTextFileSync(this.fileName));
    }
    return undefined;
  }

  contentDict(): Record<string, unknown> | undefined {
    const content = this.content();
    if (content) {
      return content as Record<string, unknown>;
    }
    return undefined;
  }

  get fileExists(): boolean {
    return fs.existsSync(this.fileName);
  }

  get fileExtn(): loc.FileExtension {
    return path.extname(this.fileName);
  }

  relativeTo(to: loc.FsPathOnly): loc.RelativeFsPath {
    return path.relative(to, this.fileName);
  }
}

export function guessPolyglotFile(
  fn: loc.AbsoluteFsPathAndFileName,
): PolyglotFile {
  const extn = path.extname(fn);
  switch (extn) {
    case ".json":
      return new TypicalJsonFile(fn);

    default:
      return {
        fileName: fn,
        fileExists: fs.existsSync(fn),
        fileExtn: extn,
        relativeTo: (to: loc.FsPathOnly): loc.RelativeFsPath => {
          return path.relative(to, fn);
        },
      };
  }
}

export function guessPolyglotFiles(glob: loc.FileGlobPattern): PolyglotFile[] {
  const results: PolyglotFile[] = [];
  for (const we of fs.expandGlobSync(glob)) {
    if (we.isFile) {
      results.push(guessPolyglotFile(we.path));
    }
  }
  return results;
}
