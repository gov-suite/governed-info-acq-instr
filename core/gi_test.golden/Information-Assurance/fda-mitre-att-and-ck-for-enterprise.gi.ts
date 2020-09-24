import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./fda-mitre-att-and-ck-for-enterprise.lhc-form.auto.tdg.ts";

// deno-lint-ignore no-empty-interface
export interface FdaMitreAttAndCkForEnterpriseFacetConstructionContext
  extends EvalFacetConstructionContext {}

export class FdaMitreAttAndCkForEnterpriseFacet extends EvaluationFacet {
  constructor(ctx?: FdaMitreAttAndCkForEnterpriseFacetConstructionContext) {
    super({ ...ctx, nihlhcForm: lhcFormJsonModule });
  }
}

export default FdaMitreAttAndCkForEnterpriseFacet;
