// Generated from onc-hipaa-compliance-checklist-health-it.lhc-form.json. DO NOT EDIT.

import { nihLhcForms as lforms, typedDataGen } from "../../deps.ts";

export const form: lforms.NihLhcForm = {
  code: "Q",
  name: "ONC HIPAA Compliance Checklist (Health IT)",
  units: null,
  templateOptions: {
    obrHeader: false,
    hideUnits: true,
    hideHeader: true,
    allowHTMLInInstructions: true,
    allowMultipleEmptyRepeatingItems: false,
    showFormHeader: false,
    showColumnHeaders: false,
    hideFormControls: true,
  },
  items: [
    {
      question: "Administrative Safeguards",
      header: true,
      hideUnits: true,
      questionCode: "Q0022",
      localQuestionCode: "Q0022",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "164.308(a)(1)(i)  Security management process: Implement policies and procedures to prevent, detect, contain, and correct security violations.",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-01",
          localQuestionCode: "Q0022-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-01-01",
          localQuestionCode: "Q0022-01-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(1)(ii)(A) Security management process: Implement policies and procedures to prevent, detect, contain, and correct security violations. ",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-02",
          localQuestionCode: "Q0022-02",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-02-01",
          localQuestionCode: "Q0022-02-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(1)(ii)(B) Has the risk management process been completed using IAW NIST Guidelines? (R) ",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-03",
          localQuestionCode: "Q0022-03",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-03-01",
          localQuestionCode: "Q0022-03-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(1)(ii)(C) Do you have formal sanctions against employees who fail to comply with security policies and procedures? (R)",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-04",
          localQuestionCode: "Q0022-04",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-04-01",
          localQuestionCode: "Q0022-04-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(1)(ii)(D) Have you implemented procedures to regularly review records of IS activity such as audit logs, access reports, and security incident tracking? (R)",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-05",
          localQuestionCode: "Q0022-05",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-05-01",
          localQuestionCode: "Q0022-05-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(2) Assigned security responsibility: Identify the security official who is responsible for the development and implementation of the policies and procedures required by this subpart for the entity. ",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-06",
          localQuestionCode: "Q0022-06",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-06-01",
          localQuestionCode: "Q0022-06-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(3)(i) Workforce security: Implement policies and procedures to ensure that all members of workforce have appropriate access to EPHI, as provided under paragraph (a)(4) of this section, and to prevent those workforce members who do not have access under paragraph (a)(4) of this section from obtaining access to electronic protected health information (EPHI). ",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-07",
          localQuestionCode: "Q0022-07",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-07-01",
          localQuestionCode: "Q0022-07-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(3)(ii)(A) Have you implemented procedures for the authorization and/or supervision of employees who work with EPHI or in locations where it might be accessed? (A) ",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-08",
          localQuestionCode: "Q0022-08",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-08-01",
          localQuestionCode: "Q0022-08-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(3)(ii)(B) Have you implemented procedures to determine the access of an employee to EPHI is appropriate? (A)",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-09",
          localQuestionCode: "Q0022-09",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-09-01",
          localQuestionCode: "Q0022-09-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(3)(ii)(C) Have you implemented procedures for terminating access to EPHI when an employee leaves your organization or as required by paragraph (a)(3)(ii)(B) of this section? (A)",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-10",
          localQuestionCode: "Q0022-10",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-10-01",
          localQuestionCode: "Q0022-10-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(4)(i) Information access management: Implement policies and procedures for authorizing access to EPHI that are consistent with the applicable requirements of subpart E of this part.",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-11",
          localQuestionCode: "Q0022-11",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-01-11",
          localQuestionCode: "Q0022-01-11",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(4)(ii)(A) If you are a clearinghouse that is part of a larger organization, have you implemented policies and procedures to protect EPHI from the larger organization? (A)",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-12",
          localQuestionCode: "Q0022-12",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-12-01",
          localQuestionCode: "Q0022-12-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(4)(ii)(B) Have you implemented policies and procedures for granting access to EPHI, for example, through access to a workstation, transaction, program, or process? (A) ",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-13",
          localQuestionCode: "Q0022-13",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-13-01",
          localQuestionCode: "Q0022-13-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(4)(ii)(C) Have you implemented policies and procedures that are based upon your access authorization policies, established, document, review, and modify a user's right of access to a workstation, transaction, program, or process? (A) ",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-14",
          localQuestionCode: "Q0022-14",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-14-01",
          localQuestionCode: "Q0022-14-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(5)(i) Security awareness and training: Implement a security awareness and training program for all members of the workforce (including management).",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-15",
          localQuestionCode: "Q0022-15",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-15-01",
          localQuestionCode: "Q0022-15-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(5)(ii)(A) Do you provide periodic information security reminders? (A) ",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-16",
          localQuestionCode: "Q0022-16",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-16-01",
          localQuestionCode: "Q0022-16-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(5)(ii)(B) Do you have policies and procedures for guarding against, detecting, and reporting malicious software? (A) ",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-17",
          localQuestionCode: "Q0022-17",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-17-01",
          localQuestionCode: "Q0022-17-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(5)(ii(C) Do you have procedures for monitoring log-in attempts and reporting discrepancies? (A) ",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-18",
          localQuestionCode: "Q0022-18",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-18-01",
          localQuestionCode: "Q0022-18-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(5)(ii)(D) Do you have procedures for creating, changing, and safeguarding passwords? (A)",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-19",
          localQuestionCode: "Q0022-19",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-19-01",
          localQuestionCode: "Q0022-19-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(6)(i)  Security incident procedures: Implement policies and procedures to address security incidents.",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-20",
          localQuestionCode: "Q0022-20",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-20-01",
          localQuestionCode: "Q0022-20-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(6)(ii) Do you have procedures to identify and respond to suspected or known security incidents, to mitigate them to the extent practicable, measure harmful effects of known security incidents, and document incidents and their outcomes? (R)",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-21",
          localQuestionCode: "Q0022-21",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-21-01",
          localQuestionCode: "Q0022-21-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(7)(i) Contingency plan: Establish (and implement as needed) policies and procedures for responding to an emergency or other occurrence (for example, fire, vandalism, system failure, or natural disaster) that damages systems that contain EPHI.",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-22",
          localQuestionCode: "Q0022-22",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-22-01",
          localQuestionCode: "Q0022-22-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(7)(ii)(A) Have you established and implemented procedures to create and maintain retrievable exact copies of EPHI? (R)",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-23",
          localQuestionCode: "Q0022-23",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-23-01",
          localQuestionCode: "Q0022-23-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(7)(ii)(B) Have you established (and implemented as needed) procedures to restore any loss of EPHI data stored electronically? (R)",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-24",
          localQuestionCode: "Q0022-24",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-24-01",
          localQuestionCode: "Q0022-24-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(7)(ii)(C) Have you established (and implemented as needed) procedures to enable continuation of critical business processes and for protection of EPHI while operating in the emergency mode? (R)",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-25",
          localQuestionCode: "Q0022-25",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-25-01",
          localQuestionCode: "Q0022-25-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(7)(ii)(D) Have you implemented procedures for periodic testing and revision of contingency plans? (A)",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-26",
          localQuestionCode: "Q0022-26",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-26-01",
          localQuestionCode: "Q0022-26-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(7)(ii)(E) Have you assessed the relative criticality of specific applications and data in support of other contingency plan components? (A)",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-27",
          localQuestionCode: "Q0022-27",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-27-01",
          localQuestionCode: "Q0022-27-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(a)(8) Have you established a plan for periodic technical and nontechnical evaluation, based initially upon the standards implemented under this rule and subsequently, in response to environmental or operational changes affecting the security of EPHI, that establishes the extent to which an entity's security policies and procedures meet the requirements of this subpart? (R)",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-28",
          localQuestionCode: "Q0022-28",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-28-01",
          localQuestionCode: "Q0022-28-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(b)(1) Business associate contracts and other arrangements: A covered entity, in accordance with Sec. 164.306, may permit a business associate to create, receive, maintain, or transmit EPHI on the covered entity's behalf only if the covered entity obtains satisfactory assurances, in accordance with Sec. 164.314(a) that the business associate appropriately safeguards the information.",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-29",
          localQuestionCode: "Q0022-29",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-29-01",
          localQuestionCode: "Q0022-29-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.308(b)(4) Have you established written contracts or other arrangements with your trading partners that document satisfactory assurances required by paragraph (b)(1) of this section that meets the applicable requirements of Sec. 164.3 1 4(a)? (R)",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-30",
          localQuestionCode: "Q0022-30",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q0022-30-01",
          localQuestionCode: "Q0022-30-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
      ],
    },
    {
      question: "Physical Safeguards",
      header: true,
      hideUnits: true,
      questionCode: "Q003",
      localQuestionCode: "Q003",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "164.310(a)(1) Facility access controls: Implement policies and procedures to limit physical access to electronic information systems and the facility or facilities in which they are housed, while ensuring properly authorized access is allowed.",
          questionCodeSystem: "Custom",
          questionCode: "Q003-01",
          localQuestionCode: "Q003-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q003-01-01",
          localQuestionCode: "Q003-01-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.310(a)(2)(i) Have you established (and implemented as needed) procedures that allow facility access in support of restoration of lost data under the disaster recovery plan and emergency mode operations plan? (A)",
          questionCodeSystem: "Custom",
          questionCode: "Q003-02",
          localQuestionCode: "Q003-02",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q003-02-01",
          localQuestionCode: "Q003-02-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.310(a)(2)(ii) Have you implemented policies and procedures to safeguard the facility and the equipment therein from unauthorized physical access, tampering, and theft? (A)",
          questionCodeSystem: "Custom",
          questionCode: "Q003-03",
          localQuestionCode: "Q003-03",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q003-03-01",
          localQuestionCode: "Q003-03-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.310(a)(2)(iii) Have you implemented procedures to control and validate a person's access to facilities based on his/her role or function, including visitor control, and control of access to software programs for testing and revision? (A)",
          questionCodeSystem: "Custom",
          questionCode: "Q003-04",
          localQuestionCode: "Q003-04",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q003-04-01",
          localQuestionCode: "Q003-04-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.310(a)(2)(iv) Have you implemented policies and procedures to document repairs and modifications to the physical components of a facility that are related to security (for example, hardware, walls, doors, and locks)? (A) 164.310(b)",
          questionCodeSystem: "Custom",
          questionCode: "Q003-05",
          localQuestionCode: "Q003-05",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q003-05-01",
          localQuestionCode: "Q003-05-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.310(b)  Have you implemented policies and procedures that specify the proper functions to be performed, the manner in which those functions are to be performed, and the physical attributes of the surroundings of a specific workstation or class of workstation that can access EPHI? (R)",
          questionCodeSystem: "Custom",
          questionCode: "Q003-06",
          localQuestionCode: "Q003-06",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q003-06-01",
          localQuestionCode: "Q003-06-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.310(c) Have you implemented physical safeguards for all workstations that access EPHI to restrict access to authorized users? (R)",
          questionCodeSystem: "Custom",
          questionCode: "Q003-07",
          localQuestionCode: "Q003-07",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q003-07-01",
          localQuestionCode: "Q003-07-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.310(d)(1) Device and media controls: Implement policies and procedures that govern the receipt and removal of hardware and electronic media that contain EPHI into and out of a facility, and the movement of these items within the facility.",
          questionCodeSystem: "Custom",
          questionCode: "Q003-08",
          localQuestionCode: "Q003-08",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q003-08-01",
          localQuestionCode: "Q003-08-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.310(d)(2)(i) Have you implemented policies and procedures to address final disposition of EPHI, and/or hardware or electronic media on which it is stored? (R)",
          questionCodeSystem: "Custom",
          questionCode: "Q003-09",
          localQuestionCode: "Q003-09",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q003-09-01",
          localQuestionCode: "Q003-09-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.310(d)(2)(ii) Have you implemented procedures for removal of EPHI from electronic media before the media are available for reuse? (R)",
          questionCodeSystem: "Custom",
          questionCode: "Q003-10",
          localQuestionCode: "Q003-10",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q003-10-01",
          localQuestionCode: "Q003-10-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.310(d)(2)(iii) Do you maintain a record of the movements of hardware and electronic media and the person responsible for its movement? (A)",
          questionCodeSystem: "Custom",
          questionCode: "Q003-11",
          localQuestionCode: "Q003-11",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q003-11-01",
          localQuestionCode: "Q003-11-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.310(d)(2)(iv) Do you create a retrievable, exact copy of EPHI, when needed, before moving equipment? (A)",
          questionCodeSystem: "Custom",
          questionCode: "Q003-12",
          localQuestionCode: "Q003-012",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q003-12-01",
          localQuestionCode: "Q003-12-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
      ],
    },
    {
      question: "Technical Safeguards",
      header: true,
      hideUnits: true,
      questionCode: "Q004",
      localQuestionCode: "Q004",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "164.312(a)(1)  Access controls: Implement technical policies and procedures for electronic information systems that maintain EPHI to allow access only to those persons or software programs that have been granted access rights as specified in Sec. 164.308(a)(4).",
          questionCodeSystem: "Custom",
          questionCode: "Q004-01",
          localQuestionCode: "Q004-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q004-01-01",
          localQuestionCode: "Q004-01-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.312(a)(2)(ii) Have you established (and implemented as needed) procedures for obtaining necessary EPHI during an emergency? (R)",
          questionCodeSystem: "Custom",
          questionCode: "Q004-03",
          localQuestionCode: "Q004-03",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q004-03-01",
          localQuestionCode: "Q004-03-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.312(a)(2)(i) Have you assigned a unique name and/or number for identifying and tracking user identity? (R).",
          questionCodeSystem: "Custom",
          questionCode: "Q004-02",
          localQuestionCode: "Q004-02",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q004-02-01",
          localQuestionCode: "Q004-02-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.312(a)(2)(iii) Have you implemented procedures that terminate an electronic session after a predetermined time of inactivity? (A)",
          questionCodeSystem: "Custom",
          questionCode: "Q004-04",
          localQuestionCode: "Q004-04",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q004-04-01",
          localQuestionCode: "Q004-04-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.312(a)(2)(iv) Have you implemented a mechanism to encrypt and decrypt EPHI? (A)",
          questionCodeSystem: "Custom",
          questionCode: "Q004-05",
          localQuestionCode: "Q004-05",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q004-05-01",
          localQuestionCode: "Q004-05-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.312(b) Have you implemented audit controls, hardware, software, and/or procedural mechanisms that record and examine activity in information systems that contain or use EPHI? (R)",
          questionCodeSystem: "Custom",
          questionCode: "Q004-06",
          localQuestionCode: "Q004-06",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q004-06-01",
          localQuestionCode: "Q004-06-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.312(c)(1) Integrity: Implement policies and procedures to protect EPHI from improper alteration or destruction.",
          questionCodeSystem: "Custom",
          questionCode: "Q004-07",
          localQuestionCode: "Q004-07",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q004-07-01",
          localQuestionCode: "Q004-07-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.312(c)(2) Have you implemented electronic mechanisms to corroborate that EPHI has not been altered or destroyed in an unauthorized manner? (A)",
          questionCodeSystem: "Custom",
          questionCode: "Q004-08",
          localQuestionCode: "Q004-08",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q004-08-01",
          localQuestionCode: "Q004-08-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.312(d) Have you implemented person or entity authentication procedures to verify a person or entity seeking access EPHI is the one claimed? (R)",
          questionCodeSystem: "Custom",
          questionCode: "Q004-09",
          localQuestionCode: "Q004-09",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q004-09-01",
          localQuestionCode: "Q004-09-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.312(e)(1) Transmission security: Implement technical security measures to guard against unauthorized access to EPHI being transmitted over an electronic communications network.",
          questionCodeSystem: "Custom",
          questionCode: "Q004-10",
          localQuestionCode: "Q004-10",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q004-10-01",
          localQuestionCode: "Q004-10-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.312(e)(2){i) Have you implemented security measures to ensure electronically transmitted EPHI is not improperly modified without detection until disposed of? (A)",
          questionCodeSystem: "Custom",
          questionCode: "Q004-11",
          localQuestionCode: "Q004-11",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q004-11-01",
          localQuestionCode: "Q004-11-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
        {
          question:
            "164.312(e)(2){ii) Have you implemented a mechanism to encrypt EPHI whenever deemed appropriate? (A)",
          questionCodeSystem: "Custom",
          questionCode: "Q004-12",
          localQuestionCode: "Q004-12",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "CNE",
          answers: [
            {
              text: "In Progress",
              code: "inProgress",
            },
            {
              text: "Completed",
              code: "Completed",
            },
            {
              text: "Not Started",
              code: "notStarted",
            },
            {
              text: "Not Applicable",
              code: "notApplicable",
            },
            {
              text: "POAM",
              code: "Poam",
            },
            {
              text: "Not Implemented",
              code: "notImplemented",
            },
          ],
        },
        {
          question: "Notes",
          questionCodeSystem: "Custom",
          questionCode: "Q004-12-01",
          localQuestionCode: "Q004-12-01",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          header: false,
          editable: "1",
          answerCardinality: {
            min: 0,
            max: 1,
          },
          dataType: "ST",
        },
      ],
    },
  ],
};

export default form;

if (import.meta.main) {
  new typedDataGen.CliArgsEmitter(import.meta.url).emitJSON(form);
}
