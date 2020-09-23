import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./onc-isa-allergy-and-intolerances-facet.lhc-form.auto.tdg.ts";

export class OncIsaAllergyAndIntolerancesFacet extends EvaluationFacet {
  constructor(efcc?: EvalFacetConstructionContext) {
    super(lhcFormJsonModule, efcc);
  }
}

export default OncIsaAllergyAndIntolerancesFacet;
