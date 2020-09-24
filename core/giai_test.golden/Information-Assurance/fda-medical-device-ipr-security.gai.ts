import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./fda-medical-device-ipr-security.lhc-form.auto.tdg.ts";

// deno-lint-ignore no-empty-interface
export interface FdaMedicalDeviceIprSecurityFacetConstructionContext
  extends EvalFacetConstructionContext {}

export class FdaMedicalDeviceIprSecurityFacet extends EvaluationFacet {
  constructor(ctx?: FdaMedicalDeviceIprSecurityFacetConstructionContext) {
    super({ ...ctx, nihlhcForm: lhcFormJsonModule });
  }
}

export default FdaMedicalDeviceIprSecurityFacet;
