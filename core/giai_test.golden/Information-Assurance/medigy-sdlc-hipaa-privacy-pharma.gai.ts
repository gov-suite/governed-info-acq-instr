import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./medigy-sdlc-hipaa-privacy-pharma.lhc-form.auto.tdg.ts";

// deno-lint-ignore no-empty-interface
export interface MedigySdlcHipaaPrivacyPharmaFacetConstructionContext
  extends EvalFacetConstructionContext {}

export class MedigySdlcHipaaPrivacyPharmaFacet extends EvaluationFacet {
  constructor(ctx?: MedigySdlcHipaaPrivacyPharmaFacetConstructionContext) {
    super({ ...ctx, nihlhcForm: lhcFormJsonModule });
  }
}

export default MedigySdlcHipaaPrivacyPharmaFacet;
