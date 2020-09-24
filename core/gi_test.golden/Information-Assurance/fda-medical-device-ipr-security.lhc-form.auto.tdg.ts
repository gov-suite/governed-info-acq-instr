// Generated from fda-medical-device-ipr-security.lhc-form.json. DO NOT EDIT.

import { nihLhcForms as lforms, typedDataGen } from "../../deps.ts";

export const form: lforms.NihLhcForm = {
  code: "Q-Title",
  name: "FDA Medical Device IPR Security",
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
      question: "Preparedness",
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
            "Company has assessed the cyber defensive measures as well as developed incident handling processes in Preparedness phase.",
          hideUnits: true,
          questionCode: "Q0022-01",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                    "May be",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q0022-01",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "May be",
              code: "M",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
      ],
    },
    {
      question: "Medical Device Procurement",
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
            "Have you built into the device purchase and/or maintenance fees the cost for mitigating device vulnerabilities?",
          hideUnits: true,
          questionCode: "Q003-01",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                    "Partial",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q003-01",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "Partial",
              code: "P",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Have you secured a commitment by the manufacturer to participate in your cybersecurity exercises",
          questionCode: "Q003-02",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-02",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q003-01",
                trigger: {
                  code: "N",
                },
              },
              {
                source: "Q003-01",
                trigger: {
                  code: "P",
                },
              },
            ],
            action: "show",
            logic: "ANY",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have spare devices for use during an incident with the medical device",
          questionCode: "Q003-03",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                    "Partial",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-03",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q003-02",
                trigger: {
                  code: "N",
                },
              },
              {
                source: "Q003-01",
                trigger: {
                  code: "N",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "Partial",
              code: "P",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Have you clearly defined the HDO-manufacturer relationship, roles and responsibilities of each party?",
          questionCode: "Q003-04",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                    "May be",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-04",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q003-03",
                trigger: {
                  code: "Y",
                },
              },
              {
                source: "Q003-02",
                trigger: {
                  code: "N",
                },
              },
              {
                source: "Q003-01",
                trigger: {
                  code: "N",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "May be",
              code: "M",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Does it include the need for HDO to share the scope, magnitude and impact of the incident on device(s) functionality, clinical care and patient safety initially and as it evolves with specific stakeholders?",
          questionCode: "Q003-05",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                    "May be",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-05",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q003-03",
                trigger: {
                  code: "Y",
                },
              },
              {
                source: "Q003-02",
                trigger: {
                  code: "N",
                },
              },
              {
                source: "Q003-01",
                trigger: {
                  code: "N",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "May be",
              code: "M",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Does it include the Manufacturer sharing actionable and product-specific information to enable a timely response?",
          questionCode: "Q003-06",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                    "May be",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-06",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q003-03",
                trigger: {
                  code: "Y",
                },
              },
              {
                source: "Q003-02",
                trigger: {
                  code: "N",
                },
              },
              {
                source: "Q003-01",
                trigger: {
                  code: "N",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "May be",
              code: "M",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Does it include the Manufacturer sharing Tangible patches/fixes to contain and eradicate the attack?",
          questionCode: "Q003-07",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                    "May be",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-07",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q003-03",
                trigger: {
                  code: "Y",
                },
              },
              {
                source: "Q003-02",
                trigger: {
                  code: "N",
                },
              },
              {
                source: "Q003-01",
                trigger: {
                  code: "N",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "May be",
              code: "M",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Does it include regular status communications between HDO and manufacturer",
          questionCode: "Q003-08",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                    "May be",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-08",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q003-03",
                trigger: {
                  code: "Y",
                },
              },
              {
                source: "Q003-02",
                trigger: {
                  code: "N",
                },
              },
              {
                source: "Q003-01",
                trigger: {
                  code: "N",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "May be",
              code: "M",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Is there an agreement to allow manufacturer to develop and/or refine their own internal processes for incident management after joint exercises with HDO ?",
          questionCode: "Q003-09",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-09",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q003-02",
                trigger: {
                  code: "Y",
                },
              },
              {
                source: "Q003-01",
                trigger: {
                  code: "N",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            " Will you get regular status communications (HDO/manufacturer)?",
          questionCode: "Q003-10",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-10",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a Software Bill of Materials (SBoM) to identify third party components in the device?",
          questionCode: "Q003-11",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-11",
          dataType: "CNE",
          codingInstructions:
            "Requesting a Software Bill of Materials (SBoM) will enable the HDO to identify and address vulnerable device components. This information is valuable in the development of IR plans as it enables triage and prioritization across an organization's device inventory helping facilitate a swift response when an incident occurs. ",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a service layered user account as preparedness process in case a cybersecurity incident occurs?",
          questionCode: "Q003-12",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-12",
          dataType: "CNE",
          codingInstructions:
            "Consider arranging for a cybersecurity preparedness user account that provides service layer access during an incident. This may enable minimal disruption of clinical operations and a more rapid response. AAMI's Medical Device Cybersecurity: A Guide for HTM Professionals9 can serve as an additional resource. ",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
      ],
    },
    {
      question: "Medical Device Asset Inventory",
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
            "Do you maintain an Asset Inventory, i.e. centrally managed, baseline set of information about each medical devices?",
          hideUnits: true,
          questionCode: "Q004-01",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q004-01",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Do you update baseline information regularly (ideally, real-time and/or when there are changes) and ensure that the inventory is current?",
          questionCode: "Q004-02",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-02",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q004-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Does the Asset Inventory capture Device name and description for every unique model and manufacturer",
          questionCode: "Q004-03",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-03",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q004-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Does the Asset Inventory capture Physical location of the device - Hot, Offline, Floor, Bldg, campus, city, etc.?",
          questionCode: "Q004-04",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-04",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q004-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Does the Asset Inventory capture Logical device location?",
          questionCode: "Q004-05",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-05",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q004-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          codingInstructions:
            "Logical device location (e.g., Internet Protocol address, switch port and/or wireless access point connection(s))",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Does the Asset Inventory capture Device owner and manager?",
          questionCode: "Q004-06",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-06",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q004-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Does the Asset Inventory capture Device maintenance parameters?",
          questionCode: "Q004-07",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-07",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q004-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          codingInstructions:
            "Device maintenance parameters (e.g., no longer supported by the manufacturer, internally maintained by X organization [with current contact information], maintenance outsourced and provided by Y entity with these Service Level Agreement [SLA] parameters)",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Does the Asset Inventory capture Device operational status?",
          questionCode: "Q004-08",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-08",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q004-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          codingInstructions:
            " Device operational status (in use, broken, etc.), to include current Operating System and patch status.",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Does the Asset Inventory capture Embedded components (e.g., SBoM), to include component version, release, patch status, etc.?",
          questionCode: "Q004-09",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-09",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q004-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Does the Asset Inventory capture interaction with and/or dependencies on other devices/IT resources?",
          questionCode: "Q004-10",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-10",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q004-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Does the Asset Inventory capture log files with device operating and/or diagnostic information?",
          questionCode: "Q004-11",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-11",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q004-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          codingInstructions:
            " Log files that capture device operating and/or diagnostic information (e.g., to diagnose malfunctions as cyber-related or not), ideally with a capability to interpret error codes.",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you  use NIST Cybersecurity Framework (CSF) 'Identify' function's asset management category to capture additional details regarding hardware and software?",
          questionCode: "Q004-15",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-15",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q004-01",
                trigger: {
                  code: "N",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have an arrangement with Device manufacturer to access SBoM and a query capability to maintain the device asset inventory with your organization.",
          questionCode: "Q004-16",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-16",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q004-01",
                trigger: {
                  code: "N",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
      ],
    },
    {
      question: "Hazard Vulnerability Analysis",
      header: true,
      hideUnits: true,
      questionCode: "Q005",
      localQuestionCode: "Q005",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "Have you conducted a broad level Hazard Vulnerability Analysis (HVA) across your organization",
          hideUnits: true,
          questionCode: "Q005-01",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q005-01",
          units: null,
          dataType: "CNE",
          codingInstructions:
            " An HVA is used to 'assess and identify potential gaps in emergency planning'. 13 Anticipated cybersecurity threats and existing mitigations should be reviewed to identify and manage residual cybersecurity risks (e.g., accept, avoid, transfer). ",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          copyrightNotice: null,
        },
        {
          question:
            "Have you included cybersecurity incidents and their potential impact on Medical devices in your HVA",
          questionCode: "Q005-02",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-02",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q005-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Have you reviewed anticipated cybersecurity threats and existing mitigations to identify and manage residual cybersecurity risks (e.g., accept, avoid, transfer)",
          questionCode: "Q005-03",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-03",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q005-02",
                trigger: {
                  code: "Y",
                },
              },
              {
                source: "Q005-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "What resources have you used to support a cybersecurity HVA",
          questionCode: "Q005-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-04",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q005-02",
                trigger: {
                  code: "Y",
                },
              },
              {
                source: "Q005-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text:
                "AAMI's Medical Device Cybersecurity: A Guide for HTM Professionals",
              code: "1",
            },
            {
              text:
                "Manufacturer Disclosure Statement for Medical Device Security(MDS2 )",
              code: "2",
            },
            {
              text:
                "Veteran's Affairs (VA) 6550, Pre-Procurement Assessment For Medical Device/Systems",
              code: "3",
            },
            {
              text:
                "NIST SP 800-30 revision 1, Guide for Conducting Risk Assessments",
              code: "4",
            },
            {
              text: "ASPR TRACIE",
              code: "5",
            },
            {
              text: "Kaiser Permanente's HVA planning tool ",
              code: "6",
            },
            {
              text:
                "The American Health Care Association and the National Center for Assisted Living's overview of the HVA process. ",
              code: "7",
            },
            {
              text: "None ",
              code: "8",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Is their an inability to conduct a complete medical device asset inventory risk moving forward?",
          questionCode: "Q005-05",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-05",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Is their an inability to collect and correlate system audit logs across the enterprise?",
          questionCode: "Q005-06",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-06",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Is their a limited sensor coverage (e.g., security monitoring tools) to detect adversary activity on HDO devices, other systems, and networks?",
          questionCode: "Q005-07",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-07",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Is their a device procurement process that does not address cybersecurity?",
          questionCode: "Q005-08",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-08",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Is there a lack of staff ability to detect and respond to a cybersecurity incident?",
          questionCode: "Q005-09",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-09",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Have you assessed the HDO's infrastructure and tiering/prioritizing functions and assets to protect and maintain during an incident in order of importance?",
          questionCode: "Q005-10",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-10",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a IR mitigation plan to review and prioritize remote device connections based device type, status, location, etc.?",
          questionCode: "Q005-11",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-11",
          dataType: "CNE",
          codingInstructions:
            "Incidence Response may require temporarily blocking or severing these connections.",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a capability and plan to put medical devices on their own dedicated and protected network segment, separate from general IT assets?",
          questionCode: "Q005-12",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-12",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a plan for continuous improvement of device procurement practices?",
          questionCode: "Q005-13",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-13",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a regular user awareness and training plan for device cybersecurity issues?",
          questionCode: "Q005-14",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-14",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have an Intrusion detection and/or security information and event management capability for Medical Devices?",
          questionCode: "Q005-15",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-15",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Have you identified other additional mitigating measures?",
          questionCode: "Q005-16",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-16",
          dataType: "CNE",
          codingInstructions:
            "For e.g. the need to hire skilled cybersecurity incident responders or allocate resources to training of designated staff",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Have you identified other additional communication measures to other stakeholders?",
          questionCode: "Q005-17",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-17",
          dataType: "CNE",
          codingInstructions:
            "For e.g. inform the medical device cybersecurity portions of the HDO's Emergency Operations Plan (EOP) to internal or external stakeholders",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
      ],
    },
    {
      question: "Medical Device Cybersecurity Support to the HIMT",
      header: true,
      hideUnits: true,
      questionCode: "Q006",
      localQuestionCode: "Q006",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "Do you have an Incident Command System (ICS) that defines a Hospital Incident Management Team (HIMT) to lead response to all-hazards incidents?",
          hideUnits: true,
          questionCode: "Q006-01",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q006-01",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "For responding to an incident that includes medical device cybersecurity concerns, does the ICS involves Medical-Technical Specialists with cybersecurity and medical device expertise as part of the activated HIMT.",
          questionCode: "Q006-02",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-02",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q006-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a policy in place for senior leadership champion to officially sanction the cybersecurity decisions and actions the HIMT takes during an incident?",
          questionCode: "Q006-03",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-03",
          dataType: "CNE",
          codingInstructions:
            "For e.g.,  During a cyber attack, there is not always time to make calls through a chain of command, accordingly, to facilitate timely decision making during an incident, clarify, in advance,who has what authority for curtailing device usage",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Select from this list one or more of external entities identified as partner offering support for Incidence Response ",
          questionCode: "Q006-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-04",
          dataType: "CNE",
          answers: [
            {
              text: "manufacturer(s)",
              code: "manufacturer",
            },
            {
              text: "maintenance contractor(s)",
              code: "maintenance",
            },
            {
              text: "peer HDOs",
              code: "peer",
            },
            {
              text: "regional partners",
              code: "regional",
            },
            {
              text: "trade associations",
              code: "trade",
            },
            {
              text: "H-ISAC",
              code: "H-ISAC",
            },
            {
              text: "others",
              code: "others",
            },
            {
              text: "None",
              code: "None",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have an SLA during IR with one or more of the listed partner(s)?",
          questionCode: "Q006-05",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-05",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q006-04",
                trigger: {
                  code: "others",
                },
              },
              {
                source: "Q006-04",
                trigger: {
                  code: "H-ISAC",
                },
              },
              {
                source: "Q006-04",
                trigger: {
                  code: "trade",
                },
              },
              {
                source: "Q006-04",
                trigger: {
                  code: "regional",
                },
              },
              {
                source: "Q006-04",
                trigger: {
                  code: "peer",
                },
              },
              {
                source: "Q006-04",
                trigger: {
                  code: "maintenance",
                },
              },
              {
                source: "Q006-04",
                trigger: {
                  code: "manufacturer",
                },
              },
            ],
            action: "show",
            logic: "ANY",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a web portal access at the device manufacturer to  to report incidents/ specific alerts and escalate for cybersecurity IR?",
          questionCode: "Q006-06",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-06",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a point of contact at the device manufacturer to offer support during an cybersecurity IR?",
          questionCode: "Q006-07",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-07",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a chart that identifies medical device cybersecurity roles, people filling the roles, and two methods of contact for each person?",
          questionCode: "Q006-08",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-08",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Have you identified ISO and their roles and responsibilities?",
          questionCode: "Q006-09",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-09",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q006-08",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          codingInstructions:
            "Designated by the Incident Commander to lead the cybersecurity portion of the HIMT and deal with the logistics of managing IR. The ISO is the liaison to the Incident Commander and the cybersecurity support staff.",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Have you identified CMIO and their roles and responsibilities?",
          questionCode: "Q006-10",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-10",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q006-08",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          codingInstructions:
            "The CMIO is involved with IT-related decisions having a potential impact on patient care (e.g., taking a portion of the network offline, shutting off devices).",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Have you identified specialized technical experts and their roles and responsibilities?",
          questionCode: "Q006-11",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-11",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q006-08",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          codingInstructions:
            "Specialized medical device and/or cybersecurity expertise may be needed to augment the Medical-Technical Specialists. Example expertise may include HTM, intrusion detection, malware analysis, and digital forensics. Not all HDOs will have staff with these skills, collaborating with regional peers and/or outsourcing may be needed.",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Have you identified Medical Device Security Liason and their roles and responsibilities?",
          questionCode: "Q006-12",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-12",
          dataType: "CNE",
          codingInstructions:
            "To facilitate IR coordination with external entities, such as regional partners and/or the device manufacturer, a medical device cybersecurity liaison should be identified. Ideally, this person will be familiar with the affected device(s) (e.g., an HTM professional) and may be part of the HIMT Liaison Officer's team as a Medical-Technical Specialist.",
          skipLogic: {
            conditions: [
              {
                source: "Q006-08",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Have you identified other HDO staff and their roles and responsibilities?",
          questionCode: "Q006-13",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-13",
          dataType: "CNE",
          codingInstructions:
            "While the technical team is responsible for incident detection, analysis, and eradication, the HIMT may require support from other HDO departments, such as HMT, legal, risk management, finance, human resources and public affairs/media relations, to ensure that the right information is conveyed to the right people at the right time.",
          skipLogic: {
            conditions: [
              {
                source: "Q006-08",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
      ],
    },
    {
      question:
        "Emergency Operations Plan Medical Device Cybersecurity Supplement ",
      header: true,
      hideUnits: true,
      questionCode: "Q007",
      localQuestionCode: "Q007",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "Have you developed the medical device cybersecurity-related plan with senior leadership champion such as CIO or CMIO?",
          hideUnits: true,
          questionCode: "Q007-01",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q007-01",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Have you identified HIMT members and their roles and responsbilities to handle incident actions related to Medical Device Cyber Security?",
          questionCode: "Q007-02",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-02",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a policy or procedure for evaluating when is a medical device cybersecurity issue considered an incident? ",
          questionCode: "Q007-03",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-03",
          dataType: "CNE",
          codingInstructions: "",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a policy or procedure for identifying what are the trigger scenarios that will cause the IR activity to occur?",
          questionCode: "Q007-04",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-04",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a policy or procedure for identifying if vulnerabilities with available patches are considered incidents?",
          questionCode: "Q007-05",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-05",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a policy or procedure to collect alerts from external entities (e.g., regional HCC, ASPR, HCCIC, H-ISAC) ",
          questionCode: "Q007-06",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-06",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a policy or procedure for helping establish incident status with alerts coming from external entities and does it describe under what circumstances? ",
          questionCode: "Q007-07",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-07",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q007-06",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a policy or procedure for when and how to activate and transition to/from the medical device cybersecurity elements of a Business Continuity Plan",
          questionCode: "Q007-08",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-08",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a policy or procedure identifying Triggers for medical device cybersecurity HIMT member activation?",
          questionCode: "Q007-09",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-09",
          dataType: "CNE",
          codingInstructions: "",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a policy or procedure for how situational awareness is maintained",
          questionCode: "Q007-10",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-10",
          dataType: "CNE",
          codingInstructions: "",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have Cyber Insurance and are you aware of the the policy terms as it relates to Cyber Security of Medical Devices",
          questionCode: "Q007-11",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-11",
          dataType: "CNE",
          codingInstructions: "",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a list that is updated regularly for Medical Device cybersecurity incident notification sources",
          questionCode: "Q007-12",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-12",
          dataType: "CNE",
          codingInstructions: "",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a policy for Internal and external communication requirements to all stakeholders regarding Medical Device Cyber Security?",
          questionCode: "Q007-13",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-13",
          dataType: "CNE",
          codingInstructions: "",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have in place the mutual aid agreements within the region to enable incident-related access to additional medical devices (e.g., through device loans) or agreements to divert patients to another facility?",
          questionCode: "Q007-14",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-14",
          dataType: "CNE",
          codingInstructions: "",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
      ],
    },
    {
      question: "Incident Response Communications Plan ",
      header: true,
      hideUnits: true,
      questionCode: "Q008",
      localQuestionCode: "Q008",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "Have you included medical device cybersecurity incident-specific communications in an overall HDO IR Communications Plan?",
          hideUnits: true,
          questionCode: "Q008-01",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q008-01",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Does HDO IR include external stakeholders in the communications regarding medical device cybersecurity incidents?",
          questionCode: "Q008-02",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-02",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q008-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Have you identified key internal and external stakeholders and their communication roles (e.g., state Department of Health liaison, public affairs), with primary and secondary means of communication (e.g., email, landline), including who is authorized to speak publicly about the incident ",
          questionCode: "Q008-03",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-03",
          dataType: "CNE",
          codingInstructions: "",
          skipLogic: {
            conditions: [
              {
                source: "Q008-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a planned frequency of communications between internal stakeholders",
          questionCode: "Q008-04",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-04",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q008-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a planned frequency of communications with Medical Device Manufacturers and other stakeholders?",
          questionCode: "Q008-05",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-05",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q008-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Have you identified incident sharing parameters?",
          questionCode: "Q008-06",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-06",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q008-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            " Have you identified what incident information can (and cannot) be shared with internal and extenrnal stakeholders and partners? ",
          questionCode: "Q008-07",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                    "Partially",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-07",
          dataType: "CNE",
          codingInstructions:
            "Given potential incident sensitivities, specify incident sharing expectations for all participants in the IR communications plan.",
          skipLogic: {
            conditions: [
              {
                source: "Q008-02",
                trigger: {
                  code: "Y",
                },
              },
              {
                source: "Q008-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "Partially",
              code: "P",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            " With whom incident information can (and cannot) be shared and under what circumstances.",
          questionCode: "Q008-08",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                    "Partially",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-08",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "Partially",
              code: "P",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "By what mechanism the information can be shared.",
          questionCode: "Q008-09",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                    "Partially",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-09",
          dataType: "CNE",
          codingInstructions: "",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "Partially",
              code: "P",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "When incident information can be shared. Are there circumstances that would prevent sharing during an incident? Is there an incident reporting timetable requirement?",
          questionCode: "Q008-10",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                    "Partially",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-10",
          dataType: "CNE",
          codingInstructions: "",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "Partially",
              code: "P",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Is there a designated regional command center to facilitate sharing, and if so, how will the HDO participate?",
          questionCode: "Q008-11",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                    "Partially",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-11",
          dataType: "CNE",
          codingInstructions: "",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "Partially",
              code: "P",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "If a cybersecurity incident involving a medical device is identified, do you initiate an outreach first to the manufacturer and then to the broader healthcare community?",
          questionCode: "Q008-12",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-12",
          dataType: "CNE",
          codingInstructions: "",
          skipLogic: {
            conditions: [
              {
                source: "Q008-05",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "If a cybersecurity incident involving a medical device is identified, do you initiate an outreach to the FDA?",
          questionCode: "Q008-13",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-13",
          dataType: "CNE",
          codingInstructions: "",
          skipLogic: {
            conditions: [
              {
                source: "Q008-05",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have an informal outreach plan to the regional peers to confirm incident symptoms and provide validation to you?",
          questionCode: "Q008-14",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-14",
          dataType: "CNE",
          codingInstructions: "",
          skipLogic: {
            conditions: [
              {
                source: "Q008-05",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a policy to share the medical device cybersecurity incident information with the H-ISAC or another healthcare-oriented ISAO, with regional incident response partners, and with the state Department of Health?",
          questionCode: "Q008-15",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-15",
          dataType: "CNE",
          codingInstructions: "",
          skipLogic: {
            conditions: [
              {
                source: "Q008-05",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Will the HDO receive notifications of externally discovered medical device cybersecurity issues to initiate the appropriate response activities?",
          questionCode: "Q008-16",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-16",
          dataType: "CNE",
          codingInstructions:
            "HDOs need to receive notifications of externally discovered medical device cybersecurity issues to initiate the appropriate response activities.",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "If yes, where do these notifications come from? ",
          questionCode: "Q008-17",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-17",
          dataType: "TX",
          codingInstructions:
            "These notifications may come from many sources, such as the manufacturer, the H-ISAC (or other ISAO), the FDA, Department of Homeland Security National Cyber Command Information Center (NCCIC), Department of Health and Human Services Healthcare Cybersecurity and Communications Integration Center (HCCIC), regional partners, and state Department(s) of Health.",
          skipLogic: {
            conditions: [
              {
                source: "Q008-16",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you have a policy for maintaining incident situational awareness with Device Manufacturers, HHS ASPR CIP, H-ISAC, etc? ",
          questionCode: "Q008-18",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-18",
          dataType: "CNE",
          codingInstructions: "",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Do you conduct Incident Situational Awareness programs with your Medical Device Cyber Security team?",
          questionCode: "Q008-19",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-19",
          dataType: "CNE",
          codingInstructions: "",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Have you prepared and distributed draft communication templates for different IR messaging needs?",
          questionCode: "Q008-20",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-20",
          dataType: "CNE",
          codingInstructions:
            "Examples are: Incident notification, Internal communications to, for instance, activate the HIMT, contact impacted staff (e.g., system users/owners/managers), inform the C-suite of incident parameters, and notify all users of the incident and its impacts, External communications to business associates or others whose assets and/or communication channels could be impacted by the original incident (e.g., severing remote connections due to compromise), Internet service provider notification, Outreach to trusted partners to share incident parameters, Public affairs messaging to make the public aware of the incident and its impacts, Compliance and/or regulatory notification communications, and Notification to law enforcement.",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Have you identified 2 or more methods of communication with each stakeholder contact and do you maintain this list?",
          questionCode: "Q008-21",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-21",
          dataType: "CNE",
          codingInstructions: "",
          skipLogic: {
            conditions: [
              {
                source: "Q008-20",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Have you identified alternative means of communication if an incident causes compromised communications with external stakeholders?",
          questionCode: "Q008-22",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-22",
          dataType: "CNE",
          codingInstructions:
            "For incidents with compromised communications, the HHS/ HCCIC, the Department of Homeland Security/Homeland Security Information Network (DHS/HSIN)27, the state's health emergency communication network (e.g., Massachusetts' Health and Homeland Alert Network, Nevada's Health Alert Network)28, and the FDA's safety notification dissemination channel29 may provide an alternate means for cross-region communication. H-ISAC offers 'WEE Secrets' 30 for its members. Regional organizations, such as the state Department of Health or the Regional Fusion Centers, may also offer an out-of-band communication capability during emergencies.",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
      ],
    },
    {
      question: "Training",
      header: true,
      hideUnits: true,
      questionCode: "Q009",
      localQuestionCode: "Q009",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "Do you conduct any User Awareness training to help prepare your HDOs for medical device cybersecurity incidents",
          hideUnits: true,
          questionCode: "Q009-01",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q009-01",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions:
            "User Awareness Training: Medical device users, from clinicians to IT helpdesk staff and HTM professionals, should be aware of potential device cybersecurity incidents, their impacts and appropriate responses. Exercises: HDOs conduct preparedness and response exercises for all-hazards.",
          copyrightNotice: null,
        },
        {
          question:
            "Are Medical Device users trained in incident discovery, identifying device peculiarity?",
          hideUnits: true,
          questionCode: "Q009-02",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q009-02",
          units: null,
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q009-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Does your Cyber Security User Awareness training identify medical device cybersecurity POCs and familiarize users with the device cybersecurity incident classification ands prioritization system?",
          hideUnits: true,
          questionCode: "Q009-03",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q009-03",
          units: null,
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q009-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Does your Cyber Security User Awareness training either include medical device cybersecurity issue logging or has an identified internal Point of Contact for incident reporting, analysis and escalation.",
          hideUnits: true,
          questionCode: "Q009-04",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q009-04",
          units: null,
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q009-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Has your HDO included in you all-hazard exercises or do you conduct Cyber Security preparedness and response exercises with Medical Device users?",
          hideUnits: true,
          questionCode: "Q009-05",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q009-05",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions:
            "Device users would also benefit from participation in exercises, building their understanding and enhancing their situational awareness of the types of medical device cybersecurity scenarios that may arise.",
          copyrightNotice: null,
        },
        {
          question:
            "Do you include your HTM, your IT dept. and outside parties like device manufacturers and maintenance contractors in your exercises?",
          hideUnits: true,
          questionCode: "Q009-06",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q009-06",
          units: null,
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q009-05",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions:
            "Understanding and enhancing their situational awareness of the types of medical device cybersecurity scenarios that may arise",
          copyrightNotice: null,
        },
        {
          question:
            "Does your exercises for cyber security simulate most common realistic incidents?",
          hideUnits: true,
          questionCode: "Q009-06-01",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q009-06-01",
          units: null,
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q009-05",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions:
            "HDOs conduct preparedness and response exercises for all-hazards. Cybersecurity can be integrated into these exercises.",
          copyrightNotice: null,
        },
        {
          question:
            "Do you update the EOP and other IR Plans after the exercise for medical device cyber security?",
          hideUnits: true,
          questionCode: "Q009-07",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q009-07",
          units: null,
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q009-05",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions:
            "After the exercise, update the EOP and other IR plans to incorporate lessons learned, create or improve communication channels between different business units, define internal policy and processes, create new groups if necessary, obtain buy-in from senior leadership and affected business units, and identify the individuals who will participate in IR.",
          copyrightNotice: null,
        },
      ],
    },
    {
      question: "Incident Detection and Validation",
      header: true,
      hideUnits: true,
      questionCode: "Q010",
      localQuestionCode: "Q010",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "Do you have a process to detect and validate cyber security incidents for each medical device, differentiating between real v/s device or user error?",
          hideUnits: true,
          questionCode: "Q010-01",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q010-01",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Do you have a process to understand how did the potential cyber security incident arise and detext the sources of incident in the medical device?",
          hideUnits: true,
          questionCode: "Q010-02",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q010-02",
          units: null,
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q010-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Do you check with regional partners, medical device manufacturers or other external sources when you first identify potential incidents?",
          hideUnits: true,
          questionCode: "Q010-03",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q010-03",
          units: null,
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q010-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
      ],
    },
    {
      question: "Incident Categorization and Prioritization",
      header: true,
      hideUnits: true,
      questionCode: "Q011",
      localQuestionCode: "Q011",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "Do you catagorize and prioritize medical device cybersecurity incidents?",
          hideUnits: true,
          questionCode: "Q011-01",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q011-01",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Do you define classes of medical device cybersecurity incidents to help prioritize incidents and determine the appropriate level of response?",
          hideUnits: true,
          questionCode: "Q011-02",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q011-02",
          units: null,
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q011-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Do you consider how the business impacts resulting from different incident types and severity levels tied to a priority level (e.g., high, medium, low) that ties to a concomitant resolution level of effort ",
          hideUnits: true,
          questionCode: "Q011-03",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q011-03",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions:
            "Concomitant level of effort e.g., from 'stop everything and fix this,' to 'resolve during the next maintenance cycle'.",
          copyrightNotice: null,
        },
        {
          question:
            "Do you document and plan for level of response algined to the severity levels, the types of incident, the business impact, all in a common communication mechanism for IR and non-IR personnel (e.g., device users) consistently?",
          hideUnits: true,
          questionCode: "Q011-07",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                    "May be",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q011-07",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "May be",
              code: "M",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Have you established an escalation list that ties medical device cybersecurity IR decision making responsibilities to specific roles in the HIMT hierarchy?",
          hideUnits: true,
          questionCode: "Q011-08",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q011-08",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions:
            "If possible, the HDO should also establish an escalation list that ties medical device cybersecurity IR decision making responsibilities to specific roles in the HIMT hierarchy, in keeping with higher incident severity levels.",
          copyrightNotice: null,
        },
      ],
    },
    {
      question: "Incident Reporting",
      header: true,
      hideUnits: true,
      questionCode: "Q0012",
      localQuestionCode: "Q0012",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "Do you have a policy/ process in place for  reporting medical device cybersecurity incident?",
          hideUnits: true,
          questionCode: "Q0012-01",
          localQuestionCode: "Q0012-01",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions:
            "Formal and informal reporting obligations often accompany discovery of a medical device cybersecurity incident. A manufacturer is required to conduct a formal notification of the incident to its customers and user community. Formal notification may be a condition of ISAC or ISAO membership.   Depending on the nature of the incident, law enforcement may need to be contacted by the affected entity.",
          copyrightNotice: null,
        },
        {
          question:
            "Do you have a policy to help analyze the reporting requirement to the appropriate external agency depending on the circumtances and the nature of the incident?",
          hideUnits: true,
          questionCode: "Q0012-02",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q0012-02",
          units: null,
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q0012-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Do you have policy in place to evaluate  the circumstances that warrant incident reporting for breaches of Protected Health Information (PHI)39 and/or Personally Identifiable Information as per HIPAA guidelines?",
          hideUnits: true,
          questionCode: "Q0012-03",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q0012-03",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions:
            "HDOs need to consider those circumstances that warrant incident reporting for breaches of Protected Health Information (PHI) and/or Personally Identifiable Information (PII).",
          copyrightNotice: null,
        },
        {
          question:
            "Have you designated a person with appropriate back-up for the role of incident liasison to lead the external reporting requirements?",
          hideUnits: true,
          questionCode: "Q0012-04",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q0012-04",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
      ],
    },
    {
      question: "Incident Analysis",
      header: true,
      hideUnits: true,
      questionCode: "Q013",
      localQuestionCode: "Q013",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "Do you have a policy for establishing initial incident parameters that are required to start with the incident investigation?",
          hideUnits: true,
          questionCode: "Q013-01",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q013-01",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions:
            "This the something an assigned HIMT members will use to gather data and determine the full incident impact, which will inform the containment strategy.",
          copyrightNotice: null,
        },
        {
          question:
            "Do the assigned HIMT members need to gather data to determine the full incident impact?",
          hideUnits: true,
          questionCode: "Q013-02",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q013-02",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions:
            "The assigned HIMT members need to gather data to determine the full incident impact, which will inform the containment strategy.",
          copyrightNotice: null,
        },
        {
          question:
            "Name the external sources, which provides additional insights on the vulnerability, malware or potential exploits today?",
          hideUnits: true,
          questionCode: "Q013-03",
          localQuestionCode: "Q013-03",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Manufacturer",
              code: "Manufacturer",
            },
            {
              text: "DHS NCCIC",
              code: "DHS NCCIC",
            },
            {
              text: "HHS ASPR",
              code: "HHS ASPR",
            },
            {
              text:
                "Cybersecurity-knowledgeable organizations, such as SANS, Symantec, and the CERT Coordination Center",
              code: "Cybersecurity-knowledgeable organizations",
            },
            {
              text: "Regional partners",
              code: "Regional partners",
            },
            {
              text: "Internet service provider",
              code: "Internet service provider",
            },
            {
              text: "Business partners",
              code: "Business partners",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Name the internal sources, which provide insights on the incident's impact within the HDO?",
          hideUnits: true,
          questionCode: "Q013-04",
          localQuestionCode: "Q013-04",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text:
                "Log files (e.g., device logs, server logs, domain name server logs, firewall logs, router logs)",
              code: "Log",
            },
            {
              text: "System and network tools and sensors",
              code: "System",
            },
            {
              text: "Device users",
              code: "Device users",
            },
            {
              text: "System and network administrators",
              code: "System and network administrators",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
      ],
    },
    {
      question: "Incident Documentation",
      header: true,
      hideUnits: true,
      questionCode: "Q014",
      localQuestionCode: "Q014",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question: "Do you maintain Incident Document?",
          hideUnits: true,
          questionCode: "Q014-01",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q014-01",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions:
            "Its a record with all activities undertaken during cybersecurity IR, from incident discovery to containment and post-activity.",
          copyrightNotice: null,
        },
        {
          question:
            "Do you have a policy / process to capture Incident Documentation to help in incident investigation ",
          hideUnits: true,
          questionCode: "Q014-02",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q014-02",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions:
            "Capturing how the incident was discovered, the steps taken, the decisions made, etc., will aid incident investigation and can also be reviewed in the Post Activity phase to improve future IR.",
          copyrightNotice: null,
        },
        {
          question:
            "Do you have a policy / process to capture Incident Documentation for post activity phase to improve future IR?",
          hideUnits: true,
          questionCode: "Q014-03",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q014-03",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "If the attack is potential criminal activity, then for preserving evidence, do you have a policy in place to bring in external forensics experts?",
          hideUnits: true,
          questionCode: "Q014-04",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q014-04",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions:
            "If the nature of the attack may involve potential criminal activity, then preserving evidence and chain of custody is important, and the HDO may need to bring in external forensics experts",
          copyrightNotice: null,
        },
        {
          question:
            "Do you have a process to take additional incident insight acquired after an incident analysis and adjust the response and containment procedures including the communications, reporting, and/or sharing.",
          hideUnits: true,
          questionCode: "Q014-05",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q014-05",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
      ],
    },
    {
      question: "Containment, Eradication, and Recovery ",
      header: true,
      hideUnits: true,
      questionCode: "Q015",
      localQuestionCode: "Q015",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "Is there a 'contain, clean, and deny' strategy by the HDO to halt a medical device cybersecurity incident?",
          hideUnits: true,
          questionCode: "Q015-01",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q015-01",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions:
            "Many HDOs use a 'contain, clean, and deny' strategy to halt a cybersecurity incident, fix the damage, and restore services as quickly as possible. When cybersecurity criminal activity is suspected, a 'monitor and record' strategy that watches and captures adversary actions may be used.",
          copyrightNotice: null,
        },
        {
          question:
            "Is the medical device cybersecurity portion of the Communications Plan comprises of an internal and external response communications?",
          hideUnits: true,
          questionCode: "Q015-02",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q015-02",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions:
            "Internal and external response communications should follow the medical device cybersecurity portion of the Communications Plan.",
          copyrightNotice: null,
        },
        {
          question:
            "Will the containment begin with HIMT activation and execution of the EOP?",
          hideUnits: true,
          questionCode: "Q015-03",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q015-03",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Are there any overarching goals driving the overall response phase under the containment?",
          hideUnits: true,
          questionCode: "Q015-04",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q015-04",
          units: null,
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q015-03",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions:
            "Minimizing impact to healthcare delivery, halting the active cybersecurity disruption, assessing the damage, and restoring normal business operations are the overarching goals driving the overall response phase.",
          copyrightNotice: null,
        },
        {
          question:
            "Do you have a questionnaire for the incidence containment with HIMT activation and execution of the EOP?",
          hideUnits: true,
          questionCode: "Q015-05",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q015-05",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "When cybersecurity criminal activity is suspected, do you have a  strategy that watches and captures adversary actions?",
          hideUnits: true,
          questionCode: "Q015-06",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q015-06",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
      ],
    },
    {
      question: "Post Activity",
      header: true,
      hideUnits: true,
      questionCode: "Q016",
      localQuestionCode: "Q016",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "Will you review all plans annually, whether an incident occurred or not, to ensure that all processes, procedures, contacts, etc?",
          hideUnits: true,
          questionCode: "Q016-01",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q016-01",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Will the response activity end with system recovery when exercising an IR plan, whether as part of a practice activity or in the event of an intrusion",
          hideUnits: true,
          questionCode: "Q016-02",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q016-02",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Will the post IR process identify what went well and what did not?",
          hideUnits: true,
          questionCode: "Q016-03",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q016-03",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
      ],
    },
    {
      question: "Lessons Learned",
      header: true,
      hideUnits: true,
      questionCode: "Q017",
      localQuestionCode: "Q017",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "Will you obtain any incident insight feedbacks from the key IR participants to improve future incident response?",
          hideUnits: true,
          questionCode: "Q017-01",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q017-01",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Would there any 'Hot wash' session to be conducted to elicit the feedback from IR participants?",
          hideUnits: true,
          questionCode: "Q017-02",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q017-02",
          units: null,
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q017-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Are there any further questions to be asked to the IR participants?",
          hideUnits: true,
          questionCode: "Q017-03",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q017-03",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
      ],
    },
    {
      question: "Forensics Investigation",
      header: true,
      hideUnits: true,
      questionCode: "Q018",
      localQuestionCode: "Q018",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "Will you sign for a forensics investigation in the occurrence of a cybersecurity incident?",
          hideUnits: true,
          questionCode: "Q018-01",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q018-01",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions:
            "Consider retaining a trained digital forensics expert to determine the full extent of any damage to the affected entity associated with a cybersecurity incident.",
          copyrightNotice: null,
        },
      ],
    },
    {
      question: "Plan Updates",
      header: true,
      hideUnits: true,
      questionCode: "Q019",
      localQuestionCode: "Q019",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "Will you document the post-incident insights such as what worked, what didn't and ideas for the future?",
          hideUnits: true,
          questionCode: "Q019-01",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          localQuestionCode: "Q019-01",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions:
            "Document post-incident insights-what worked, what didn't, ideas for the future, etc. As appropriate, update the EOP, Communications Plan, and other pertinent plans in light of the experience gained. In addition, review all plans annually, whether an incident occurred or not, to ensure that all processes, procedures, contacts, etc., are current.",
          copyrightNotice: null,
        },
      ],
    },
  ],
};

export default form;

if (import.meta.main) {
  new typedDataGen.CliArgsEmitter(import.meta.url).emitJSON(form);
}
