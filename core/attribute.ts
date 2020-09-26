export type Identity = string;

export interface Identifiable {
  readonly identity: Identity;
}

export type TextTemplate = string;

export interface Invitable {
  readonly invitation: TextTemplate;
}

export interface Sortable {
  readonly sortOrder: number;
}
