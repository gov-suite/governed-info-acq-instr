import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./medigy-sdlc-hipaa-privacy-pharma.lhc-form.auto.tdg.ts";

export class MedigySdlcHipaaPrivacyPharmaFacet extends EvaluationFacet {
  constructor(efcc?: EvalFacetConstructionContext) {
    super(lhcFormJsonModule, efcc);
  }
}

export default MedigySdlcHipaaPrivacyPharmaFacet;
