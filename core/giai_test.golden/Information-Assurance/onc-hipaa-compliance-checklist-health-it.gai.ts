import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./onc-hipaa-compliance-checklist-health-it.lhc-form.auto.tdg.ts";

export class OncHipaaComplianceChecklistHealthItFacet extends EvaluationFacet {
  constructor(efcc?: EvalFacetConstructionContext) {
    super(lhcFormJsonModule, efcc);
  }
}

export default OncHipaaComplianceChecklistHealthItFacet;
