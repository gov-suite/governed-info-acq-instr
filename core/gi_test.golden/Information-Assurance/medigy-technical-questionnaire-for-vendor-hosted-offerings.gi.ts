import { EvalFacetConstructionContext, EvaluationFacet } from "../mod.ts";
import lhcFormJsonModule from "./medigy-technical-questionnaire-for-vendor-hosted-offerings.lhc-form.auto.tdg.ts";

// deno-lint-ignore no-empty-interface
export interface MedigyTechnicalQuestionnaireForVendorHostedOfferingsFacetConstructionContext
  extends EvalFacetConstructionContext {}

export class MedigyTechnicalQuestionnaireForVendorHostedOfferingsFacet
  extends EvaluationFacet {
  constructor(
    ctx?:
      MedigyTechnicalQuestionnaireForVendorHostedOfferingsFacetConstructionContext,
  ) {
    super({ ...ctx, nihlhcForm: lhcFormJsonModule });
  }
}

export default MedigyTechnicalQuestionnaireForVendorHostedOfferingsFacet;
