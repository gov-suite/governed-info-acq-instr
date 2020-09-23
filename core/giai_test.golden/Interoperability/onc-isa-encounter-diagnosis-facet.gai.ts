import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./onc-isa-encounter-diagnosis-facet.lhc-form.auto.tdg.ts";

export class OncIsaEncounterDiagnosisFacet extends EvaluationFacet {
  constructor(efcc?: EvalFacetConstructionContext) {
    super(lhcFormJsonModule, efcc);
  }
}

export default OncIsaEncounterDiagnosisFacet;
