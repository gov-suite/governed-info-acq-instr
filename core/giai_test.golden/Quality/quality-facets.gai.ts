import {
  EvalFacetConstructor,
  EvalFacetsConstructionContext,
  EvaluationFacets,
} from "../mod.ts";

import { MedigyQualityFacet } from "./medigy-quality-evaluation-facet.gai.ts";

// deno-lint-ignore no-empty-interface
export interface QualityFacetsConstructionContext
  extends EvalFacetsConstructionContext {}

export class QualityFacets extends EvaluationFacets {
  static readonly facets: readonly EvalFacetConstructor[] = [
    MedigyQualityFacet,
  ];
  readonly medigyQualityEvaluationFacet: MedigyQualityFacet;

  constructor(ctx: QualityFacetsConstructionContext) {
    super({ ...ctx, identity: "Quality", path: ctx.path.childPath("Quality") });
    this.medigyQualityEvaluationFacet = new MedigyQualityFacet();
    this.instruments.push(this.medigyQualityEvaluationFacet);
  }
}

export default QualityFacets;
