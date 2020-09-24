import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./node-health-user-experience-measures-facet.lhc-form.auto.tdg.ts";

// deno-lint-ignore no-empty-interface
export interface NodeHealthUserExperienceMeasuresFacetConstructionContext
  extends EvalFacetConstructionContext {}

export class NodeHealthUserExperienceMeasuresFacet extends EvaluationFacet {
  constructor(ctx?: NodeHealthUserExperienceMeasuresFacetConstructionContext) {
    super({ ...ctx, nihlhcForm: lhcFormJsonModule });
  }
}

export default NodeHealthUserExperienceMeasuresFacet;
