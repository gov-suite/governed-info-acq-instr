import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./fda-medical-device-ipr-security.lhc-form.auto.tdg.ts";

export class FdaMedicalDeviceIprSecurityFacet extends EvaluationFacet {
  constructor(efcc?: EvalFacetConstructionContext) {
    super(lhcFormJsonModule, efcc);
  }
}

export default FdaMedicalDeviceIprSecurityFacet;
