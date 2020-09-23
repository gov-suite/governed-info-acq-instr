import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./onc-isa-general-facet.lhc-form.auto.tdg.ts";

export class OncIsaGeneralFacet extends EvaluationFacet {
  constructor(efcc?: EvalFacetConstructionContext) {
    super(lhcFormJsonModule, efcc);
  }
}

export default OncIsaGeneralFacet;
