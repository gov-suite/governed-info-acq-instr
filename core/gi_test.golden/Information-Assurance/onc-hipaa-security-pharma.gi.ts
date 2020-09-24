import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./onc-hipaa-security-pharma.lhc-form.auto.tdg.ts";

// deno-lint-ignore no-empty-interface
export interface OncHipaaSecurityPharmaFacetConstructionContext
  extends EvalFacetConstructionContext {}

export class OncHipaaSecurityPharmaFacet extends EvaluationFacet {
  constructor(ctx?: OncHipaaSecurityPharmaFacetConstructionContext) {
    super({ ...ctx, nihlhcForm: lhcFormJsonModule });
  }
}

export default OncHipaaSecurityPharmaFacet;
