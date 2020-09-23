import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./medical-device-security-MDS2.lhc-form.auto.tdg.ts";

export class MedicalDeviceSecurityMds2Facet extends EvaluationFacet {
  constructor(efcc?: EvalFacetConstructionContext) {
    super(lhcFormJsonModule, efcc);
  }
}

export default MedicalDeviceSecurityMds2Facet;
