import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./onc-isa-allergy-and-intolerances-facet.lhc-form.auto.tdg.ts";

// deno-lint-ignore no-empty-interface
export interface OncIsaAllergyAndIntolerancesFacetConstructionContext
  extends EvalFacetConstructionContext {}

export class OncIsaAllergyAndIntolerancesFacet extends EvaluationFacet {
  constructor(ctx?: OncIsaAllergyAndIntolerancesFacetConstructionContext) {
    super({ ...ctx, nihlhcForm: lhcFormJsonModule });
  }
}

export default OncIsaAllergyAndIntolerancesFacet;
