import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./fda-mitre-att-and-ck-for-mobile.lhc-form.auto.tdg.ts";

// deno-lint-ignore no-empty-interface
export interface FdaMitreAttAndCkForMobileFacetConstructionContext
  extends EvalFacetConstructionContext {}

export class FdaMitreAttAndCkForMobileFacet extends EvaluationFacet {
  constructor(ctx?: FdaMitreAttAndCkForMobileFacetConstructionContext) {
    super({ ...ctx, nihlhcForm: lhcFormJsonModule });
  }
}

export default FdaMitreAttAndCkForMobileFacet;
