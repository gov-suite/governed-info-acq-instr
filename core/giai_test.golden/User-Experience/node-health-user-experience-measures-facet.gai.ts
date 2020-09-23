import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./node-health-user-experience-measures-facet.lhc-form.auto.tdg.ts";

export class NodeHealthUserExperienceMeasuresFacet extends EvaluationFacet {
  constructor(efcc?: EvalFacetConstructionContext) {
    super(lhcFormJsonModule, efcc);
  }
}

export default NodeHealthUserExperienceMeasuresFacet;
