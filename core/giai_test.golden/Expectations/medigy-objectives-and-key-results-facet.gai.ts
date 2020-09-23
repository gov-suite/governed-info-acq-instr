import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./medigy-objectives-and-key-results-facet.lhc-form.auto.tdg.ts";

export class MedigyObjectivesAndKeyResultsFacet extends EvaluationFacet {
  constructor(efcc?: EvalFacetConstructionContext) {
    super(lhcFormJsonModule, efcc);
  }
}

export default MedigyObjectivesAndKeyResultsFacet;
