import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./onc-hipaa-privacy-pharma.lhc-form.auto.tdg.ts";

export class OncHipaaPrivacyPharmaFacet extends EvaluationFacet {
  constructor(efcc?: EvalFacetConstructionContext) {
    super(lhcFormJsonModule, efcc);
  }
}

export default OncHipaaPrivacyPharmaFacet;
