import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./carin-alliance-code-of-conduct.lhc-form.auto.tdg.ts";

// deno-lint-ignore no-empty-interface
export interface CarinAllianceCodeOfConductFacetConstructionContext
  extends EvalFacetConstructionContext {}

export class CarinAllianceCodeOfConductFacet extends EvaluationFacet {
  constructor(ctx?: CarinAllianceCodeOfConductFacetConstructionContext) {
    super({ ...ctx, nihlhcForm: lhcFormJsonModule });
  }
}

export default CarinAllianceCodeOfConductFacet;
