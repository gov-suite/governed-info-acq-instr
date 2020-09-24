import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./american-medical-association-xcertia.lhc-form.auto.tdg.ts";

// deno-lint-ignore no-empty-interface
export interface AmericanMedicalAssociationXcertiaFacetConstructionContext
  extends EvalFacetConstructionContext {}

export class AmericanMedicalAssociationXcertiaFacet extends EvaluationFacet {
  constructor(ctx?: AmericanMedicalAssociationXcertiaFacetConstructionContext) {
    super({ ...ctx, nihlhcForm: lhcFormJsonModule });
  }
}

export default AmericanMedicalAssociationXcertiaFacet;
