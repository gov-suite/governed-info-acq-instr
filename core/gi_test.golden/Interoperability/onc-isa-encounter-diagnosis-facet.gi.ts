import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./onc-isa-encounter-diagnosis-facet.lhc-form.auto.tdg.ts";

// deno-lint-ignore no-empty-interface
export interface OncIsaEncounterDiagnosisFacetConstructionContext
  extends EvalFacetConstructionContext {}

export class OncIsaEncounterDiagnosisFacet extends EvaluationFacet {
  constructor(ctx?: OncIsaEncounterDiagnosisFacetConstructionContext) {
    super({ ...ctx, nihlhcForm: lhcFormJsonModule });
  }
}

export default OncIsaEncounterDiagnosisFacet;
