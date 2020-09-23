import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./fda-mitre-pre-att-and-ck.lhc-form.auto.tdg.ts";

export class FdaMitrePreAttAndCkFacet extends EvaluationFacet {
  constructor(efcc?: EvalFacetConstructionContext) {
    super(lhcFormJsonModule, efcc);
  }
}

export default FdaMitrePreAttAndCkFacet;
