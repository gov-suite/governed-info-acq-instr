import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./american-medical-association-xcertia.lhc-form.auto.tdg.ts";

export class AmericanMedicalAssociationXcertiaFacet extends EvaluationFacet {
  constructor(efcc?: EvalFacetConstructionContext) {
    super(lhcFormJsonModule, efcc);
  }
}

export default AmericanMedicalAssociationXcertiaFacet;
