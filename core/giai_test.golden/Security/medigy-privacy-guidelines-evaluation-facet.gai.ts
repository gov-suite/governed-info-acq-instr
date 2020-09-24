import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./medigy-privacy-guidelines-evaluation-facet.lhc-form.auto.tdg.ts";

// deno-lint-ignore no-empty-interface
export interface MedigyPrivacyGuidelinesFacetConstructionContext
  extends EvalFacetConstructionContext {}

export class MedigyPrivacyGuidelinesFacet extends EvaluationFacet {
  constructor(ctx?: MedigyPrivacyGuidelinesFacetConstructionContext) {
    super({ ...ctx, nihlhcForm: lhcFormJsonModule });
  }
}

export default MedigyPrivacyGuidelinesFacet;
