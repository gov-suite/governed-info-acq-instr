// Generated from fda-mitre-pre-att-and-ck.lhc-form.json. DO NOT EDIT.

import { nihLhcForms as lforms, typedDataGen } from "../../deps.ts";

export const form: lforms.NihLhcForm = {
  code: "Q-Title",
  name: "FDA MITRE Pre ATT and CK",
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
      question: "Priority Definition Planning ",
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
            "In your organization is there any process of determining the set of Key Intelligence Topics (KIT) or Key Intelligence Questions (KIQ) required for meeting key strategic, operational, or tactical goals?",
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
            "Are you maintaining Key Intelligence Topics (KITs) and Key Intelligence Questions (KIQs) may be further subdivided to focus on political, economic, diplomatic, military, financial, or intellectual property categories?",
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
      question: "Priority Definition Direction",
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
            "Do you have a process of collecting and assigning requirements for meeting Key Intelligence Topics (KIT) or Key Intelligence Questions (KIQ) as determined by leadership.",
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
          question:
            "Do you maintain a central management system for submitting intelligence requirements, Key Intelligence Topics (KITs), and Key Intelligence Questions (KIQs)",
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
  ],
};

export default form;

if (import.meta.main) {
  new typedDataGen.CliArgsEmitter(import.meta.url).emitJSON(form);
}
