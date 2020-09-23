import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./fda-mitre-att-and-ck-for-enterprise.lhc-form.auto.tdg.ts";

export class FdaMitreAttAndCkForEnterpriseFacet extends EvaluationFacet {
  constructor(efcc?: EvalFacetConstructionContext) {
    super(lhcFormJsonModule, efcc);
  }
}

export default FdaMitreAttAndCkForEnterpriseFacet;
