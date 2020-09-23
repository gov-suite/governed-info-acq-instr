// Generated from onc-isa-emergency-medical-services-facet.lhc-form.json. DO NOT EDIT.

import { nihLhcForms as lforms, typedDataGen } from "../../deps.ts";

export const form: lforms.NihLhcForm = {
  name: "ONC ISA Emergency Medical Services Facet",
  items: [
    {
      question: "Emergency Medical Services",
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
      question: "Which of these do you capture ?",
      questionCodeSystem: "Custom",
      questionCode: "ISA 01",
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
          text: "Representing Health Care Data for Emergency Medical Services",
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
        "Which of these Standard/Implementation specification do you support?",
      questionCodeSystem: "Custom",
      questionCode: "ISA 005",
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
          text: "NEMSIS Version 3",
          code: "01",
        },
        {
          text: "Other",
          code: "02",
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
