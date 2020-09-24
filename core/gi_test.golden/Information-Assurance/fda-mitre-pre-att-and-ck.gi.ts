import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./fda-mitre-pre-att-and-ck.lhc-form.auto.tdg.ts";

// deno-lint-ignore no-empty-interface
export interface FdaMitrePreAttAndCkFacetConstructionContext
  extends EvalFacetConstructionContext {}

export class FdaMitrePreAttAndCkFacet extends EvaluationFacet {
  constructor(ctx?: FdaMitrePreAttAndCkFacetConstructionContext) {
    super({ ...ctx, nihlhcForm: lhcFormJsonModule });
  }
}

export default FdaMitrePreAttAndCkFacet;
