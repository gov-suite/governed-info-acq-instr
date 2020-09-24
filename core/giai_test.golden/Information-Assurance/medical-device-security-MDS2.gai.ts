import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./medical-device-security-MDS2.lhc-form.auto.tdg.ts";

// deno-lint-ignore no-empty-interface
export interface MedicalDeviceSecurityMds2FacetConstructionContext
  extends EvalFacetConstructionContext {}

export class MedicalDeviceSecurityMds2Facet extends EvaluationFacet {
  constructor(ctx?: MedicalDeviceSecurityMds2FacetConstructionContext) {
    super({ ...ctx, nihlhcForm: lhcFormJsonModule });
  }
}

export default MedicalDeviceSecurityMds2Facet;
