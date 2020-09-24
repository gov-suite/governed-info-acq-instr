// Generated from medigy-objectives-and-key-results-facet.lhc-form.json. DO NOT EDIT.

import { nihLhcForms as lforms, typedDataGen } from "../../deps.ts";

export const form: lforms.NihLhcForm = {
  code: "Q-Title",
  name: "Medigy Objectives and Key Results Facet",
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
    {},
    {
      question: "Objective",
      questionCode: "Q003-01",
      hideUnits: false,
      noEmptyValue: true,
      localQuestionCode: "expectation",
      dataType: "ST",
      questionCardinality: {
        min: 1,
        max: "*",
      },
      items: [
        {
          question: "Objective Status",
          questionCode: "Q003-01-03",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Select",
                  options: [
                    "Not Started",
                    "In Progress",
                    "Completed",
                  ],
                },
              },
            },
          },
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "expectation-status",
          dataType: "CNE",
          answers: [
            {
              text: "Not Started",
              code: "0",
            },
            {
              text: "In Progress",
              code: "1",
            },
            {
              text: "Completed",
              code: "2",
            },
          ],
        },
        {
          question: "Objective Priority",
          questionCode: "Q003-01-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "expectation-priority",
          dataType: "ST",
        },
        {
          question: "Key Result",
          header: true,
          hideUnits: true,
          questionCode: "Q003-01-H",
          localQuestionCode: "Q003-01-H",
          units: null,
          codingInstructions: "",
          copyrightNotice: null,
          questionCardinality: {
            min: 1,
            max: "*",
          },
          items: [
            {
              question: "Key Result",
              questionCode: "Q003-01-01",
              extensions: {
                qe3: {
                  publication: {
                    qe3_visualization: {
                      type: "Range",
                      minRange: "0",
                      maxRange: "10",
                    },
                  },
                },
              },
              hideUnits: false,
              noEmptyValue: true,
              localQuestionCode: "expectation-metric",
              dataType: "CNE",
              answers: [
                {
                  text: "0",
                  code: "0",
                },
                {
                  text: "1",
                  code: "1",
                },
                {
                  text: "2",
                  code: "2",
                },
                {
                  text: "3",
                  code: "3",
                },
                {
                  text: "4",
                  code: "4",
                },
                {
                  text: "5",
                  code: "5",
                },
                {
                  text: "6",
                  code: "6",
                },
                {
                  text: "7",
                  code: "7",
                },
                {
                  text: "8",
                  code: "8",
                },
                {
                  text: "9",
                  code: "9",
                },
                {
                  text: "10",
                  code: "10",
                },
              ],
            },
            {
              question: "Key Result Type",
              questionCode: "Q003-01-02",
              hideUnits: false,
              noEmptyValue: true,
              localQuestionCode: "expectation-metric-type",
              dataType: "ST",
            },
            {
              question: "Key Result Status",
              questionCode: "Q003-01-03",
              extensions: {
                qe3: {
                  publication: {
                    qe3_visualization: {
                      type: "Select",
                      options: [
                        "Not Started",
                        "In Progress",
                        "Completed",
                      ],
                    },
                  },
                },
              },
              hideUnits: false,
              noEmptyValue: true,
              localQuestionCode: "expectation-metric-status",
              dataType: "CNE",
              answers: [
                {
                  text: "Not Started",
                  code: "0",
                },
                {
                  text: "In Progress",
                  code: "1",
                },
                {
                  text: "Completed",
                  code: "2",
                },
              ],
            },
            {
              question: "Key Result Priority",
              questionCode: "Q003-01-04",
              hideUnits: false,
              noEmptyValue: true,
              localQuestionCode: "expectation-metric-priority",
              dataType: "ST",
            },
          ],
        },
      ],
    },
  ],
};

export default form;

if (import.meta.main) {
  new typedDataGen.CliArgsEmitter(import.meta.url).emitJSON(form);
}
