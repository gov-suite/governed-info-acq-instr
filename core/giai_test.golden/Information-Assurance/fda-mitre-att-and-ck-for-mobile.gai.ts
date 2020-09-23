import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./fda-mitre-att-and-ck-for-mobile.lhc-form.auto.tdg.ts";

export class FdaMitreAttAndCkForMobileFacet extends EvaluationFacet {
  constructor(efcc?: EvalFacetConstructionContext) {
    super(lhcFormJsonModule, efcc);
  }
}

export default FdaMitreAttAndCkForMobileFacet;
