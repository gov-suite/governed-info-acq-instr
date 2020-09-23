import { EvalFacetConstructor, EvaluationFacets, Path } from "../mod.ts";

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

  constructor(homePath: Path) {
    super("Information Assurance", homePath.childPath("Information-Assurance"));
    InformationAssuranceFacets.facets.forEach((f) =>
      this.questionnaires.push(new f())
    );
  }
}

export default InformationAssuranceFacets;
