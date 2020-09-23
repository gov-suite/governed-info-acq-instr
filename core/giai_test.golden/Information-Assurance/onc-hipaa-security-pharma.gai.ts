import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./onc-hipaa-security-pharma.lhc-form.auto.tdg.ts";

export class OncHipaaSecurityPharmaFacet extends EvaluationFacet {
  constructor(efcc?: EvalFacetConstructionContext) {
    super(lhcFormJsonModule, efcc);
  }
}

export default OncHipaaSecurityPharmaFacet;
