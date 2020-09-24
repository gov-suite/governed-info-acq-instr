import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./medigy-objectives-and-key-results-facet.lhc-form.auto.tdg.ts";

// deno-lint-ignore no-empty-interface
export interface MedigyObjectivesAndKeyResultsFacetConstructionContext
  extends EvalFacetConstructionContext {}

export class MedigyObjectivesAndKeyResultsFacet extends EvaluationFacet {
  constructor(ctx?: MedigyObjectivesAndKeyResultsFacetConstructionContext) {
    super({ ...ctx, nihlhcForm: lhcFormJsonModule });
  }
}

export default MedigyObjectivesAndKeyResultsFacet;
