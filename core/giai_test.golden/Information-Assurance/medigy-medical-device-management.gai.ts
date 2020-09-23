import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./medigy-medical-device-management.lhc-form.auto.tdg.ts";

export class MedigyMedicalDeviceManagementFacet extends EvaluationFacet {
  constructor(efcc?: EvalFacetConstructionContext) {
    super(lhcFormJsonModule, efcc);
  }
}

export default MedigyMedicalDeviceManagementFacet;
