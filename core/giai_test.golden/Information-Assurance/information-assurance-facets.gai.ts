import {
  EvalFacetConstructor,
  EvalFacetsConstructionContext,
  EvaluationFacets,
} from "../mod.ts";

import { FdaMedicalDeviceIprSecurityFacet } from "./fda-medical-device-ipr-security.gai.ts";
import { FdaMitreAttAndCkForEnterpriseFacet } from "./fda-mitre-att-and-ck-for-enterprise.gai.ts";
import { FdaMitreAttAndCkForMobileFacet } from "./fda-mitre-att-and-ck-for-mobile.gai.ts";
import { FdaMitrePreAttAndCkFacet } from "./fda-mitre-pre-att-and-ck.gai.ts";
import { MedicalDeviceSecurityMds2Facet } from "./medical-device-security-MDS2.gai.ts";
import { MedigyMedicalDeviceManagementFacet } from "./medigy-medical-device-management.gai.ts";
import { MedigySdlcHipaaPrivacyPharmaFacet } from "./medigy-sdlc-hipaa-privacy-pharma.gai.ts";
import { MedigyTechnicalQuestionnaireForVendorHostedOfferingsFacet } from "./medigy-technical-questionnaire-for-vendor-hosted-offerings.gai.ts";
import { OncHipaaComplianceChecklistHealthItFacet } from "./onc-hipaa-compliance-checklist-health-it.gai.ts";
import { OncHipaaPrivacyPharmaFacet } from "./onc-hipaa-privacy-pharma.gai.ts";
import { OncHipaaSecurityPharmaFacet } from "./onc-hipaa-security-pharma.gai.ts";

// deno-lint-ignore no-empty-interface
export interface InformationAssuranceFacetsConstructionContext
  extends EvalFacetsConstructionContext {}

export class InformationAssuranceFacets extends EvaluationFacets {
  static readonly facets: readonly EvalFacetConstructor[] = [
    FdaMedicalDeviceIprSecurityFacet,
    FdaMitreAttAndCkForEnterpriseFacet,
    FdaMitreAttAndCkForMobileFacet,
    FdaMitrePreAttAndCkFacet,
    MedicalDeviceSecurityMds2Facet,
    MedigyMedicalDeviceManagementFacet,
    MedigySdlcHipaaPrivacyPharmaFacet,
    MedigyTechnicalQuestionnaireForVendorHostedOfferingsFacet,
    OncHipaaComplianceChecklistHealthItFacet,
    OncHipaaPrivacyPharmaFacet,
    OncHipaaSecurityPharmaFacet,
  ];
  readonly fdaMedicalDeviceIprSecurity: FdaMedicalDeviceIprSecurityFacet;
  readonly fdaMitreAttAndCkForEnterprise: FdaMitreAttAndCkForEnterpriseFacet;
  readonly fdaMitreAttAndCkForMobile: FdaMitreAttAndCkForMobileFacet;
  readonly fdaMitrePreAttAndCk: FdaMitrePreAttAndCkFacet;
  readonly medicalDeviceSecurityMds2: MedicalDeviceSecurityMds2Facet;
  readonly medigyMedicalDeviceManagement: MedigyMedicalDeviceManagementFacet;
  readonly medigySdlcHipaaPrivacyPharma: MedigySdlcHipaaPrivacyPharmaFacet;
  readonly medigyTechnicalQuestionnaireForVendorHostedOfferings:
    MedigyTechnicalQuestionnaireForVendorHostedOfferingsFacet;
  readonly oncHipaaComplianceChecklistHealthIt:
    OncHipaaComplianceChecklistHealthItFacet;
  readonly oncHipaaPrivacyPharma: OncHipaaPrivacyPharmaFacet;
  readonly oncHipaaSecurityPharma: OncHipaaSecurityPharmaFacet;

  constructor(ctx: InformationAssuranceFacetsConstructionContext) {
    super(
      {
        ...ctx,
        identity: "Information Assurance",
        path: ctx.path.childPath("Information-Assurance"),
      },
    );
    this.fdaMedicalDeviceIprSecurity = new FdaMedicalDeviceIprSecurityFacet();
    this.fdaMitreAttAndCkForEnterprise =
      new FdaMitreAttAndCkForEnterpriseFacet();
    this.fdaMitreAttAndCkForMobile = new FdaMitreAttAndCkForMobileFacet();
    this.fdaMitrePreAttAndCk = new FdaMitrePreAttAndCkFacet();
    this.medicalDeviceSecurityMds2 = new MedicalDeviceSecurityMds2Facet();
    this.medigyMedicalDeviceManagement =
      new MedigyMedicalDeviceManagementFacet();
    this.medigySdlcHipaaPrivacyPharma = new MedigySdlcHipaaPrivacyPharmaFacet();
    this.medigyTechnicalQuestionnaireForVendorHostedOfferings =
      new MedigyTechnicalQuestionnaireForVendorHostedOfferingsFacet();
    this.oncHipaaComplianceChecklistHealthIt =
      new OncHipaaComplianceChecklistHealthItFacet();
    this.oncHipaaPrivacyPharma = new OncHipaaPrivacyPharmaFacet();
    this.oncHipaaSecurityPharma = new OncHipaaSecurityPharmaFacet();
    this.instruments.push(this.fdaMedicalDeviceIprSecurity);
    this.instruments.push(this.fdaMitreAttAndCkForEnterprise);
    this.instruments.push(this.fdaMitreAttAndCkForMobile);
    this.instruments.push(this.fdaMitrePreAttAndCk);
    this.instruments.push(this.medicalDeviceSecurityMds2);
    this.instruments.push(this.medigyMedicalDeviceManagement);
    this.instruments.push(this.medigySdlcHipaaPrivacyPharma);
    this.instruments.push(
      this.medigyTechnicalQuestionnaireForVendorHostedOfferings,
    );
    this.instruments.push(this.oncHipaaComplianceChecklistHealthIt);
    this.instruments.push(this.oncHipaaPrivacyPharma);
    this.instruments.push(this.oncHipaaSecurityPharma);
  }
}

export default InformationAssuranceFacets;
