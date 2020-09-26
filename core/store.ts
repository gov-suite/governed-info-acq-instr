import type * as loc from "./location.ts";

export interface Storable {
  readonly store: Store;
}

export interface Store {
  readonly isStore: true;
}

/**
 * A CanonicalResponseStore only keeps a single response from multiple
 * responders as the "latest" with revisions as history. The latest version
 * is the "canonical" representation of an instrument.
 */
export interface CanonicalResponseStore {
  readonly isCanonicalResponseStore: true;
}

/**
 * A MultiResponseStore treats responses from multiple responders equally.
 * There is no canonical response, all responses are tied to their users
 * and treated as "branches" of the same instrument. 
 */
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
