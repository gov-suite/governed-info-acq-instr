import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./medigy-medical-device-management.lhc-form.auto.tdg.ts";

// deno-lint-ignore no-empty-interface
export interface MedigyMedicalDeviceManagementFacetConstructionContext
  extends EvalFacetConstructionContext {}

export class MedigyMedicalDeviceManagementFacet extends EvaluationFacet {
  constructor(ctx?: MedigyMedicalDeviceManagementFacetConstructionContext) {
    super({ ...ctx, nihlhcForm: lhcFormJsonModule });
  }
}

export default MedigyMedicalDeviceManagementFacet;
