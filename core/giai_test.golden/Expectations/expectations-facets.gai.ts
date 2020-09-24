import {
  EvalFacetConstructor,
  EvalFacetsConstructionContext,
  EvaluationFacets,
} from "../mod.ts";

import { MedigyObjectivesAndKeyResultsFacet } from "./medigy-objectives-and-key-results-facet.gai.ts";

// deno-lint-ignore no-empty-interface
export interface ExpectationsFacetsConstructionContext
  extends EvalFacetsConstructionContext {}

export class ExpectationsFacets extends EvaluationFacets {
  static readonly facets: readonly EvalFacetConstructor[] = [
    MedigyObjectivesAndKeyResultsFacet,
  ];
  readonly medigyObjectivesAndKeyResultsFacet:
    MedigyObjectivesAndKeyResultsFacet;

  constructor(ctx: ExpectationsFacetsConstructionContext) {
    super(
      {
        ...ctx,
        identity: "Expectations",
        path: ctx.path.childPath("Expectations"),
      },
    );
    this.medigyObjectivesAndKeyResultsFacet =
      new MedigyObjectivesAndKeyResultsFacet();
    this.instruments.push(this.medigyObjectivesAndKeyResultsFacet);
  }
}

export default ExpectationsFacets;
