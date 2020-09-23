import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./medigy-quality-evaluation-facet.lhc-form.auto.tdg.ts";

export class MedigyQualityFacet extends EvaluationFacet {
  constructor(efcc?: EvalFacetConstructionContext) {
    super(lhcFormJsonModule, efcc);
  }
}

export default MedigyQualityFacet;
