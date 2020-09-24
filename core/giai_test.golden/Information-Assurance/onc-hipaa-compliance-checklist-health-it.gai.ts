import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./onc-hipaa-compliance-checklist-health-it.lhc-form.auto.tdg.ts";

// deno-lint-ignore no-empty-interface
export interface OncHipaaComplianceChecklistHealthItFacetConstructionContext
  extends EvalFacetConstructionContext {}

export class OncHipaaComplianceChecklistHealthItFacet extends EvaluationFacet {
  constructor(
    ctx?: OncHipaaComplianceChecklistHealthItFacetConstructionContext,
  ) {
    super({ ...ctx, nihlhcForm: lhcFormJsonModule });
  }
}

export default OncHipaaComplianceChecklistHealthItFacet;
