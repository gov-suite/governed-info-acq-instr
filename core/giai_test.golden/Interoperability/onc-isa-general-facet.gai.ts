import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./onc-isa-general-facet.lhc-form.auto.tdg.ts";

// deno-lint-ignore no-empty-interface
export interface OncIsaGeneralFacetConstructionContext
  extends EvalFacetConstructionContext {}

export class OncIsaGeneralFacet extends EvaluationFacet {
  constructor(ctx?: OncIsaGeneralFacetConstructionContext) {
    super({ ...ctx, nihlhcForm: lhcFormJsonModule });
  }
}

export default OncIsaGeneralFacet;
