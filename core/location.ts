import { fs, path, safety } from "./deps.ts";

export type URL = string;
export type FsPathOnly = string;
export type AbsoluteFsPath = FsPathOnly;
export type RelativeFsPath = FsPathOnly;
export type FsPathAndFileName = FsPathOnly & string;
export type FileExtension = string;
export type FileGlobPattern = string;
export type AbsoluteFsPathAndFileName = AbsoluteFsPath & string;

export interface Path {
  readonly isPath: true;
  readonly childPath: (path: FsPathOnly) => Path;
  readonly childFilePath: (file: string) => RelativeFsPath;
}

export interface FileSystemPath extends Path {
  readonly isFileSystemPath: true;
  readonly fsPath: FsPathOnly;
  readonly exists: boolean;
}

export const isFileSystemPath = safety.typeGuard<FileSystemPath>(
  "isFileSystemPath",
);

export function fileSystemPath(fsPath: FsPathOnly): FileSystemPath {
  return {
    isPath: true,
    isFileSystemPath: true,
    fsPath: fsPath,
    exists: fs.existsSync(fsPath),
    childPath: (childPath: FsPathOnly): Path => {
      return guessPath(path.join(fsPath, childPath));
    },
    childFilePath: (file: string): RelativeFsPath => {
      return path.join(fsPath, file);
    },
  };
}

export function firstFileSystemPathFound(
  ...fsPaths: FsPathOnly[]
): FileSystemPath | undefined {
  for (const fspo of fsPaths) {
    const fsp = fileSystemPath(fspo);
    if (fsp.exists) return fsp;
  }
  return undefined;
}

export function guessPath(fsPath: FsPathOnly): Path {
  return fileSystemPath(fsPath);
}
