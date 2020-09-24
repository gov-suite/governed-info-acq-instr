import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./medigy-quality-evaluation-facet.lhc-form.auto.tdg.ts";

// deno-lint-ignore no-empty-interface
export interface MedigyQualityFacetConstructionContext
  extends EvalFacetConstructionContext {}

export class MedigyQualityFacet extends EvaluationFacet {
  constructor(ctx?: MedigyQualityFacetConstructionContext) {
    super({ ...ctx, nihlhcForm: lhcFormJsonModule });
  }
}

export default MedigyQualityFacet;
