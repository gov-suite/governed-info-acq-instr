import type * as loc from "./location.ts";

export interface Storable {
  readonly store: Store;
}

export interface Store {
  readonly isStore: true;
}

export interface CanonicalResponseStore {
  readonly isCanonicalResponseStore: true;
}

export interface MultiResponseStore {
  readonly isMultiResponseStore: true;
}

export interface FileSystemStorable extends Storable {
  readonly store: FileSystemStore;
}

export interface FileSystemStore extends Store {
  readonly isFileSystemStore: true;
  readonly homePath: loc.Path;
}

export interface GitStorable extends FileSystemStorable {
  readonly store: GitStore;
}

export interface GitStore extends FileSystemStore {
  readonly isGitStore: true;
}

export interface AttachmentsSupplier {
  readonly attachments: Store;
}
