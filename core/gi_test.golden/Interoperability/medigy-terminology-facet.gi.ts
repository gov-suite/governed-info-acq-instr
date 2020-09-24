import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./medigy-terminology-facet.lhc-form.auto.tdg.ts";

// deno-lint-ignore no-empty-interface
export interface MedigyTerminologyFacetConstructionContext
  extends EvalFacetConstructionContext {}

export class MedigyTerminologyFacet extends EvaluationFacet {
  constructor(ctx?: MedigyTerminologyFacetConstructionContext) {
    super({ ...ctx, nihlhcForm: lhcFormJsonModule });
  }
}

export default MedigyTerminologyFacet;
