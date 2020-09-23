import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./onc-isa-emergency-medical-services-facet.lhc-form.auto.tdg.ts";

export class OncIsaEmergencyMedicalServicesFacet extends EvaluationFacet {
  constructor(efcc?: EvalFacetConstructionContext) {
    super(lhcFormJsonModule, efcc);
  }
}

export default OncIsaEmergencyMedicalServicesFacet;
