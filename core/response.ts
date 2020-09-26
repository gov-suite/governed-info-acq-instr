import type * as attr from "./attribute.ts";
import type * as instr from "./instrument.ts";
import type * as store from "./store.ts";

export interface Response {
  readonly isResponse: true;
}

/**
 * A CanonicalResponse only keeps a single response from multiple responders 
 * as the "latest" with revisions as history. The latest version is the 
 * "canonical" representation of an instrument.
 */
export interface CanonicalResponse extends Response {
  readonly isCanonicalResponse: true;
}

/**
 * A MultiResponse treats responses from multiple responders equally.
 * There is no canonical response, all responses are tied to their users
 * and treated as "branches" of the same instrument.
 */
export interface MultiResponse extends Response {
  readonly isMultiResponse: true;
}

export interface NihLhcFormResponse
  extends attr.Identifiable, store.GitStorable, store.AttachmentsSupplier {
  readonly instrument: instr.NihLhcFormInstrument;
}

export interface NihLhcFormCanonicalResponse
  extends NihLhcFormResponse, CanonicalResponse {
}

export interface NihLhcFormMultiResponse
  extends NihLhcFormResponse, MultiResponse {
}
