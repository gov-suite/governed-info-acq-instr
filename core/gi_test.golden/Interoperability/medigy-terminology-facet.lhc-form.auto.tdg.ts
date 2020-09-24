// Generated from medigy-terminology-facet.lhc-form.json. DO NOT EDIT.

import { nihLhcForms as lforms, typedDataGen } from "../../deps.ts";

export const form: lforms.NihLhcForm = {
  name: "Medigy Terminology Facet",
  items: [
    {},
    {
      question: "Terminologies Supported",
      questionCodeSystem: "Custom",
      questionCode: "TERMS",
      extensions: {
        qe3: {
          publication: {
            qe3_visualization: {
              type: "Select",
              options: [
                "ICD9",
                "ICD10",
                "LOINC",
                "SNOMED CT",
                "NDC",
                "RxNorm",
                "RadLex",
                "CPT",
                "HCPCS",
                "MEDCIN",
              ],
            },
          },
        },
      },
      codingInstructions:
        "What Terminologies are supported by your application?",
      questionCardinality: {
        min: 1,
        max: 1,
      },
      header: false,
      editable: "1",
      answerCardinality: {
        min: 0,
        max: "*",
      },
      dataType: "CWE",
      answers: [
        {
          text: "ICD9",
          code: "TERMS1",
        },
        {
          text: "ICD10",
          code: "TERMS2",
        },
        {
          text: "LOINC",
          code: "TERMS3",
        },
        {
          text: "SNOMED CT",
          code: "TERMS4",
        },
        {
          text: "NDC",
          code: "TERMS5",
        },
        {
          text: "RxNorm",
          code: "TERMS6",
        },
        {
          text: "RadLex",
          code: "TERMS7",
        },
        {
          text: "CPT",
          code: "TERMS8",
        },
        {
          text: "HCPCS",
          code: "TERMS9",
        },
        {
          text: "MEDCIN",
          code: "TERMS10",
        },
      ],
    },
  ],
  templateOptions: {
    showFormHeader: false,
    hideFormControls: true,
    obrHeader: false,
    hideUnits: true,
    hideHeader: true,
    allowHTMLInInstructions: true,
    allowMultipleEmptyRepeatingItems: false,
    showColumnHeaders: false,
  },
};

export default form;

if (import.meta.main) {
  new typedDataGen.CliArgsEmitter(import.meta.url).emitJSON(form);
}
