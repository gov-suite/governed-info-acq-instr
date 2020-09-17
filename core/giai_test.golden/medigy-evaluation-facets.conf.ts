import {
  Campaign,
  InfoAcqConfiguration,
  NihLhcFormJsonFile,
  Path,
  TypicalCampaign,
  TypicalCampaignQuestionnaire,
} from "../giai.ts";

export class QualityCampaign extends TypicalCampaign {
  constructor(homePath: Path) {
    super("Quality", homePath.childPath("Quality"), (campaign) => {
      campaign.questionnaires.push(
        new TypicalCampaignQuestionnaire(
          campaign,
          new NihLhcFormJsonFile(
            "medigy_quality_evaluation_facet_lhc_form.json",
          ),
          {
            displayName: "Medigy Quality Evaluation Facet",
            shareInfo:
              "Tell us about your experience with <offering_name> support for different quality systems, evaluations and validations",
            invitationInfo:
              "Do you know anyone else who has experience with <offering_name> support for different quality systems, evaluations and validations?",
            branchPattern: "EF=QUALITY=",
          },
        ),
      );
    });
  }
}

export class SecurityCampaign extends TypicalCampaign {
  constructor(homePath: Path) {
    super("Security", homePath.childPath("Security"), (campaign) => {
      campaign.questionnaires.push(
        new TypicalCampaignQuestionnaire(
          campaign,
          new NihLhcFormJsonFile(
            "american_medical_association(AMA)_xcertia_lhc_form.json",
          ),
          {
            displayName: "American Medical Association (AMA) Xcertia",
            shareInfo:
              "Tell us about your experience with <offering_name> privacy policy, HIPAA compliance, law and regulation compliance, etc.",
            invitationInfo:
              "Do you know anyone else who has experience with <offering_name> privacy policy, HIPAA compliance, law and regulation compliance, etc?",
            branchPattern: "EF=SECURITYAMA=",
          },
        ),
        new TypicalCampaignQuestionnaire(
          campaign,
          new NihLhcFormJsonFile(
            "medigy_privacy_guidelines_evaluation_facet_lhc_form.json",
          ),
          {
            displayName: "Medigy Privacy Guidelines Evaluation Facet",
            shareInfo:
              "Tell us about your experience with <offering_name>'s privacy guidelines",
            invitationInfo:
              "Do you know anyone else that has experience with <offering_name>'s privacy guidelines?",
            branchPattern: "EF=SECURITYMPGEF=",
          },
        ),
      );
    });
  }
}

export class InteropCampaign extends TypicalCampaign {
  constructor(homePath: Path) {
    super(
      "Interoperability",
      homePath.childPath("Interoperability"),
      (campaign) => {
        campaign.questionnaires.push(
          new TypicalCampaignQuestionnaire(
            campaign,
            new NihLhcFormJsonFile(
              "medigy_terminology_facet_lhc_form.json",
            ),
            {
              displayName: "Medigy Terminology Facet",
              shareInfo:
                "Tell us about your experience with <offering_name> HL7, FHIR, and other interoperability standards",
              invitationInfo:
                " Do you know anyone else that has experience with <offering_name> HL7 FHIR, etc?",
              branchPattern: "EF=INTERMTF=",
            },
          ),
          new TypicalCampaignQuestionnaire(
            campaign,
            new NihLhcFormJsonFile(
              "onc_isa_allergy_and_intolerances_facet_lhc_form.json",
            ),
            {
              displayName: "ONC ISA Allergy and Intolerances Facet",
              shareInfo:
                "Tell us about your experience with <offering_name> Terminologies",
              invitationInfo:
                "Do you know anyone else that has experience with <offering_name> Terminologies?",
              branchPattern: "EF=INTEROIAIF=",
            },
          ),
          new TypicalCampaignQuestionnaire(
            campaign,
            new NihLhcFormJsonFile(
              "onc_isa_emergency_medical_services_facet_lhc_form.json",
            ),
            {
              displayName: "ONC ISA Emergency Medical Services Facet",
              shareInfo:
                "Tell us about your experience with <offering_name> Terminologies",
              invitationInfo:
                "Do you know anyone else that has experience with <offering_name> Terminologies?",
              branchPattern: "EF=INTEROIEMSF=",
            },
          ),
          new TypicalCampaignQuestionnaire(
            campaign,
            new NihLhcFormJsonFile(
              "onc_isa_encounter_diagnosis_facet_lhc_form.json",
            ),
            {
              displayName: "ONC ISA Encounter Diagnosis Facet",
              shareInfo:
                "Tell us about your experience with <offering_name> Terminologies",
              invitationInfo:
                "Do you know anyone else that has experience with <offering_name> Terminologies? ",
              branchPattern: "EF=INTEROIED=",
            },
          ),
          new TypicalCampaignQuestionnaire(
            campaign,
            new NihLhcFormJsonFile(
              "onc_isa_general_facet_lhc_form.json",
            ),
            {
              displayName: "ONC ISA General Facet",
              shareInfo:
                "Tell us about your experience with <offering_name> Terminologies",
              invitationInfo:
                "Do you know anyone else that has experience with <offering_name> Terminologies? ",
              branchPattern: "EF=INTEROIGF=",
            },
          ),
        );
      },
    );
  }
}

export class EthicsCampaign extends TypicalCampaign {
  constructor(homePath: Path) {
    super(
      "Ethics and Compliance",
      homePath.childPath("Ethics-and-Compliance"),
      (campaign) => {
        campaign.questionnaires.push(
          new TypicalCampaignQuestionnaire(
            campaign,
            new NihLhcFormJsonFile(
              "carin_alliance_code_of_conduct_lhc_form.json",
            ),
            {
              displayName: "CARIN Alliance Code of Conduct",
              shareInfo:
                "Tell us about your experience with <offering_name>'s Code of Conduct",
              invitationInfo:
                "Do you know anyone else that has experience with <offering_name>'s Code of Conduct?",
              branchPattern: "EF=ETHICS=",
            },
          ),
        );
      },
    );
  }
}

export class ExpectationsCampaign extends TypicalCampaign {
  constructor(homePath: Path) {
    super(
      "Expectations",
      homePath.childPath("Expectations"),
      (campaign) => {
        campaign.questionnaires.push(
          new TypicalCampaignQuestionnaire(
            campaign,
            new NihLhcFormJsonFile(
              "medigy_objectives_and_key_results_facet_lhc_form.json",
            ),
            {
              displayName: "Medigy Objectives and Key Results Facet",
              shareInfo:
                "Would you like to share your OKRs for <offering_name>",
              invitationInfo:
                "Do you know someone else who can share the OKRs for <offering_name>?",
              branchPattern: "EF=EXPECTATIONS=",
            },
          ),
        );
      },
    );
  }
}

export class UserExperienceCampaign extends TypicalCampaign {
  constructor(homePath: Path) {
    super(
      "User Experience",
      homePath.childPath("User-Experience"),
      (campaign) => {
        campaign.questionnaires.push(
          new TypicalCampaignQuestionnaire(
            campaign,
            new NihLhcFormJsonFile(
              "node_health_user_experience_measures_facet_lhc_form.json",
            ),
            {
              displayName: "NODE Health User Experience Measures Facet",
              shareInfo:
                "Tell us about your experience with <offering_name> ease of use, performance, design, satisfaction, accessibility, etc.",
              invitationInfo:
                "Do you know anyone else that has experience with <offering_name> ease of use, performance, design, satisfaction, accessibility, etc?",
              branchPattern: "EF=EXPERIENCE=",
            },
          ),
        );
      },
    );
  }
}

export class InfoAssuranceCampaign extends TypicalCampaign {
  constructor(homePath: Path) {
    super(
      "Information Assurance",
      homePath.childPath("Information-Assurance"),
      (campaign) => {
        campaign.questionnaires.push(
          new TypicalCampaignQuestionnaire(
            campaign,
            new NihLhcFormJsonFile(
              "fda_medical_device_ipr_security_lhc_form.json",
            ),
            {
              displayName: "FDA Medical Device IPR Security",
              shareInfo:
                "Tell us about your experience with <offering_name> access, persistence, privilege escalation, defense evasion and other permissions for enterprises",
              invitationInfo:
                "Do you know anyone else that has experience with <offering_name> access, persistence, privilege escalation, defense evasion and other permissions for enterprises?",
              branchPattern: "EF=INFRMTNFMDIS=",
            },
          ),
          new TypicalCampaignQuestionnaire(
            campaign,
            new NihLhcFormJsonFile(
              "fda_mitre_att_and_ck_for_enterprise_lhc_form.json",
            ),
            {
              displayName: "FDA MITRE ATT&CK for Enterprise",
              shareInfo:
                "Tell us about your experience with <offering_name> access, persistence, privilege escalation, defense evasion and other permissions for mobile ",
              invitationInfo:
                "Do you know anyone else that has experience with <offering_name> access, persistence, privilege escalation, defense evasion and other permissions for mobile? ",
              branchPattern: "EF=INFRMTNFMACE=",
            },
          ),
          new TypicalCampaignQuestionnaire(
            campaign,
            new NihLhcFormJsonFile(
              "fda_mitre_att_and_ck_for_mobile_lhc_form.json",
            ),
            {
              displayName: "FDA MITRE ATT&CK for Mobile",
              shareInfo:
                "Tell us about your experience with <offering_name> priority definition planning and priority definition directions",
              invitationInfo:
                "Do you know anyone else that has experience with <offering_name> priority definition planning and priority definition directions?",
              branchPattern: "EF=INFRMTNFMACM=",
            },
          ),
          new TypicalCampaignQuestionnaire(
            campaign,
            new NihLhcFormJsonFile(
              "fda_mitre_pre_att_and_ck_lhc_form.json",
            ),
            {
              displayName: "FDA MITRE Pre ATT&CK",
              shareInfo:
                "Tell us about your experience with <offering_name> intellectual property rights security measures",
              invitationInfo:
                "Do you know anyone else that has experience with <offering_name> intellectual property rights security meassures?",
              branchPattern: "EF=INFRMTNFMPAC=",
            },
          ),
          new TypicalCampaignQuestionnaire(
            campaign,
            new NihLhcFormJsonFile(
              "medical_device_security(MDS2)_lhc_form.json",
            ),
            {
              displayName: "Medical Device Security (MDS2)",
              shareInfo:
                "Tell us about your experience with <offering_name> medical device security (MDS2) capability",
              invitationInfo:
                "Do you know anyone else that has experience with <offering_name> medical device security (MDS2) capability?",
              branchPattern: "EF=INFRMTNFMPAC=",
            },
          ),
          new TypicalCampaignQuestionnaire(
            campaign,
            new NihLhcFormJsonFile(
              "medigy_medical_device_management_lhc_form.json",
            ),
            {
              displayName: "Medigy Medical Device Management (MDM)",
              shareInfo:
                "Tell us about your experience with <offering_name> medical device management capability ",
              invitationInfo:
                "Do you know anyone else that has experience with <offering_name> medical device management capability?",
              branchPattern: "EF=INFRMTNMMDM=",
            },
          ),
          new TypicalCampaignQuestionnaire(
            campaign,
            new NihLhcFormJsonFile(
              "medigy_sdlc_hippa_privacy(pharma)_lhc_form.json",
            ),
            {
              displayName: "Medigy SDLC HIPAA Privacy (Pharma)",
              shareInfo:
                "Tell us about your experience with <offering_name> project lifecycle, procedures, data management, technical and regulatory requirements, etc.",
              invitationInfo:
                "Do you know anyone else that has experience with <offering_name> project lifecycle, procedures, data management, technical and regulatory requirements, etc? ",
              branchPattern: "EF=INFRMSHP=",
            },
          ),
          new TypicalCampaignQuestionnaire(
            campaign,
            new NihLhcFormJsonFile(
              "medigy_technical_questionnaire_for_vendor_hosted_offerings_lhc_form.json",
            ),
            {
              displayName:
                "Medigy Technical Questionnaire for Vendor Hosted Offerings",
              shareInfo:
                "Tell us about your experience with <offering_name> access and authentication, security, certification requirements, networking, workstation and hardware requirements.",
              invitationInfo:
                "Do you know anyone else that has experience with <offering_name> access and authentication, security, certification requirements, networking, workstation and hardware requirements? ",
              branchPattern: "EF=INFRMMTQVHO=",
            },
          ),
          new TypicalCampaignQuestionnaire(
            campaign,
            new NihLhcFormJsonFile(
              "onc_hippa_compliance_checklist_helath_it_lhc_form.json",
            ),
            {
              displayName: "ONC HIPAA Compliance Checklist (Health IT)",
              shareInfo:
                "Tell us about your experience with <offering_name> administrative, physical and technical safeguard policies and procedures and other HIPAA compliance measures ",
              invitationInfo:
                "Tell us about your experience with<offering_name> administrative, physical and technical safeguard policies and procedures and other HIPAA compliance measures",
              branchPattern: "EF=INFRMMTQVHO=",
            },
          ),
          new TypicalCampaignQuestionnaire(
            campaign,
            new NihLhcFormJsonFile(
              "onc_hippa_privacy(pharma)_lhc_form.json",
            ),
            {
              displayName: "ONC HIPAA Privacy (Pharma)",
              shareInfo:
                "Tell us about your experience with <offering_name> HIPAA Privacy",
              invitationInfo:
                "Do you know anyone else that has experience with <offering_name> HIPAA Privacy?",
              branchPattern: "EF=INFRMNOHPP=",
            },
          ),
          new TypicalCampaignQuestionnaire(
            campaign,
            new NihLhcFormJsonFile(
              "onc_hippa_security(pharma)_lhc_form.json",
            ),
            {
              displayName: "ONC HIPAA Security (Pharma)",
              shareInfo:
                "Tell us about your experience with <offering_name> HIPAA Security measures like audit, training, security policy, organizational security, asset and information management, human resource security, physical and environmental security, IT operations Management and Communication, access control, information systems maintenance and change, incident management and incident communications, business continuity and disaster recovery, compliance to regulations (legal/regulatory)",
              invitationInfo:
                " Do you know anyone else that has experience with <offering_name> HIPAA Security measures like audit, training, security policy, organizational security, asset and information management, human resource security, physical and environmental security, IT operations Management and Communication, access control, information systems maintenance and change, incident management and incident communications, business continuity and disaster recovery, compliance to regulations (legal/regulatory)?",
              branchPattern: "EF=INFRMNOHSP=",
            },
          ),
        );
      },
    );
  }
}

export class MedigyEvaluationFacets implements InfoAcqConfiguration {
  readonly isInfoAcqConfiguration = true;
  readonly campaigns?: Campaign[];
  constructor(homePath: Path) {
    this.campaigns = [
      new QualityCampaign(homePath),
      new SecurityCampaign(homePath),
      new InteropCampaign(homePath),
      new EthicsCampaign(homePath),
      new ExpectationsCampaign(homePath),
      new UserExperienceCampaign(homePath),
      new InfoAssuranceCampaign(homePath),
    ];
  }
}
