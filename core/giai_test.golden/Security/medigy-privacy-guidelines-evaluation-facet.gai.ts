import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./medigy-privacy-guidelines-evaluation-facet.lhc-form.auto.tdg.ts";

export class MedigyPrivacyGuidelinesFacet extends EvaluationFacet {
  constructor(efcc?: EvalFacetConstructionContext) {
    super(lhcFormJsonModule, efcc);
  }
}

export default MedigyPrivacyGuidelinesFacet;
