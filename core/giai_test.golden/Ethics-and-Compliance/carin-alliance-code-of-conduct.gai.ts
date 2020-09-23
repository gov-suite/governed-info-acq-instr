import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./carin-alliance-code-of-conduct.lhc-form.auto.tdg.ts";

export class CarinAllianceCodeOfConductFacet extends EvaluationFacet {
  constructor(efcc?: EvalFacetConstructionContext) {
    super(lhcFormJsonModule, efcc);
  }
}

export default CarinAllianceCodeOfConductFacet;
