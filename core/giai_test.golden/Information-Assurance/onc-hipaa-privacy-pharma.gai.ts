import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./onc-hipaa-privacy-pharma.lhc-form.auto.tdg.ts";

// deno-lint-ignore no-empty-interface
export interface OncHipaaPrivacyPharmaFacetConstructionContext
  extends EvalFacetConstructionContext {}

export class OncHipaaPrivacyPharmaFacet extends EvaluationFacet {
  constructor(ctx?: OncHipaaPrivacyPharmaFacetConstructionContext) {
    super({ ...ctx, nihlhcForm: lhcFormJsonModule });
  }
}

export default OncHipaaPrivacyPharmaFacet;
