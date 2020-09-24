// Generated from fda-mitre-att-and-ck-for-enterprise.lhc-form.json. DO NOT EDIT.

import { nihLhcForms as lforms, typedDataGen } from "../../deps.ts";

export const form: lforms.NihLhcForm = {
  code: "Q-Title",
  name: "FDA MITRE ATT and CK for Enterprise",
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
      question: "Initial Access",
      header: true,
      hideUnits: true,
      questionCode: "Q0022",
      localQuestionCode: "Q0022",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question: "Do you provide Initial Access to all users?",
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
            "Do you provide execution of adversary-controlled code on a local or remote system?",
          hideUnits: true,
          questionCode: "Q0022-02",
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
          localQuestionCode: "Q0022-02",
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
      question: "Persistence",
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
            "Do you provide any access, action, or configuration change to a system that gives an adversary a persistent presence on that system?",
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
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question: "Does your system allows Account Manipulation",
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
      question: "Privilege Escalation",
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
            "Does your system allows an adversary to obtain a higher level of permissions on a system or network?",
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
          question: "Does your system allows Accessibility Features?",
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
      question: "Defense Evasion",
      header: true,
      hideUnits: true,
      questionCode: "Q005",
      localQuestionCode: "Q005",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question: "Does your system allows Access Token Manipulation?",
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
          question: "Does your system allows Binary Padding?",
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
  ],
};

export default form;

if (import.meta.main) {
  new typedDataGen.CliArgsEmitter(import.meta.url).emitJSON(form);
}
