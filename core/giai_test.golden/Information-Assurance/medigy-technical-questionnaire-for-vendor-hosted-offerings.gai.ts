import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./medigy-technical-questionnaire-for-vendor-hosted-offerings.lhc-form.auto.tdg.ts";

export class MedigyTechnicalQuestionnaireForVendorHostedOfferingsFacet
  extends EvaluationFacet {
  constructor(efcc?: EvalFacetConstructionContext) {
    super(lhcFormJsonModule, efcc);
  }
}

export default MedigyTechnicalQuestionnaireForVendorHostedOfferingsFacet;
