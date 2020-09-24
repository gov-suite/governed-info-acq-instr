// Generated from onc-isa-allergy-and-intolerances-facet.lhc-form.json. DO NOT EDIT.

import { nihLhcForms as lforms, typedDataGen } from "../../deps.ts";

export const form: lforms.NihLhcForm = {
  name: "ONC ISA Allergy and Intolerances Facet.lhc-forms.json",
  items: [
    {
      question: "Allergies and intolerance",
      questionCodeSystem: "Custom",
      questionCode: "ISA001",
      questionCardinality: {
        min: 1,
        max: 1,
      },
      header: true,
      editable: "1",
      answerCardinality: {
        min: 0,
        max: 1,
      },
      dataType: "ST",
    },
    {
      question: "Which of these do you capture in Allergies and intolerance?",
      questionCodeSystem: "Custom",
      questionCode: "ISA002",
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
          text: "Representing Patient Allergic Reactions",
          code: "01",
        },
        {
          text:
            "Representing Patient Allergies and Intolerances; Environmental Substances",
          code: "02",
        },
        {
          text:
            "Representing Patient Allergies and Intolerances; Food Substances",
          code: "03",
        },
        {
          text: "Representing Patient Allergies and Intolerances; Medications",
          code: "04",
        },
      ],
    },
    {
      question: "Representing Patient Allergic Reactions",
      questionCodeSystem: "Custom",
      questionCode: "ISA003",
      questionCardinality: {
        min: 1,
        max: 1,
      },
      header: true,
      editable: "1",
      answerCardinality: {
        min: 0,
        max: 1,
      },
      dataType: "ST",
    },
    {
      question:
        "Which of these Standard/Implementation specification do you support?",
      questionCodeSystem: "Custom",
      questionCode: "ISA004",
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
          text: "LOINC®",
          code: "01",
        },
        {
          text: "SNOMED CT®",
          code: "02",
        },
        {
          text: "Other",
          code: "03",
        },
      ],
    },
    {
      question:
        "Representing Patient Allergies and Intolerances; Environmental Substances",
      questionCode: "ISA005",
      questionCodeSystem: "Custom",
      questionCardinality: {
        min: 1,
        max: 1,
      },
      header: true,
      editable: "1",
      answerCardinality: {
        min: 0,
        max: 1,
      },
      dataType: "ST",
    },
    {
      question:
        "Which of these Standard/Implementation specification do you support?",
      questionCodeSystem: "Custom",
      questionCode: "ISA006",
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
      dataType: "CWE",
      answers: [
        {
          text: "SNOMED CT®",
          code: "01",
        },
        {
          text: "Other",
          code: "02",
        },
      ],
    },
    {
      question:
        "Representing Patient Allergies and Intolerances; Food Substances",
      questionCode: "ISA007",
      questionCodeSystem: "Custom",
      questionCardinality: {
        min: 1,
        max: 1,
      },
      header: true,
      editable: "1",
      answerCardinality: {
        min: 0,
        max: 1,
      },
      dataType: "ST",
    },
    {
      question:
        "Which of these Standard/Implementation specification do you support?",
      questionCodeSystem: "Custom",
      questionCode: "ISA008",
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
      dataType: "CWE",
      answers: [
        {
          text: "SNOMED CT®",
          code: "01",
        },
        {
          text: "Other",
          code: "02",
        },
      ],
    },
    {
      question: "Representing Patient Allergies and Intolerances; Medications",
      questionCode: "ISA009",
      questionCodeSystem: "Custom",
      questionCardinality: {
        min: 1,
        max: 1,
      },
      header: true,
      editable: "1",
      answerCardinality: {
        min: 0,
        max: 1,
      },
      dataType: "ST",
    },
    {
      question:
        "Which of these Standard/Implementation specification do you support?",
      questionCodeSystem: "Custom",
      questionCode: "ISA0010",
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
          text: "RxNorm",
          code: "01",
        },
        {
          text: "SNOMED CT®",
          code: "02",
        },
        {
          text: "Medication Reference Terminology (MED-RT)",
          code: "03",
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
