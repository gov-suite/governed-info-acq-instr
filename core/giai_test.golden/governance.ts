import type { nihLhcForms } from "./deps.ts";
import * as gai from "../mod.ts";

// deno-lint-ignore no-empty-interface
export interface EvalFacetConstructionContext
  extends gai.TypicalInstrumentOptions {
}

export interface EvalFacetConstructor {
  new (ctx: EvalFacetConstructionContext): EvaluationFacet;
}

export interface EvalFacetsConstructionContext
  extends Partial<gai.Identifiable> {
  readonly path: gai.Path;
}

export interface EvalFacetsConstructor {
  new (ctx: EvalFacetsConstructionContext): EvaluationFacets;
}

export class EvaluationFacet extends gai.TypicalInstrument {
}

export class EvaluationFacets extends gai.TypicalCampaign {
  constructor({ identity }: gai.Identifiable & EvalFacetsConstructionContext) {
    super(identity);
  }
}
