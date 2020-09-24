import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./onc-isa-emergency-medical-services-facet.lhc-form.auto.tdg.ts";

// deno-lint-ignore no-empty-interface
export interface OncIsaEmergencyMedicalServicesFacetConstructionContext
  extends EvalFacetConstructionContext {}

export class OncIsaEmergencyMedicalServicesFacet extends EvaluationFacet {
  constructor(ctx?: OncIsaEmergencyMedicalServicesFacetConstructionContext) {
    super({ ...ctx, nihlhcForm: lhcFormJsonModule });
  }
}

export default OncIsaEmergencyMedicalServicesFacet;
