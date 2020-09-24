// Generated from american-medical-association-xcertia.lhc-form.json. DO NOT EDIT.

import { nihLhcForms as lforms, typedDataGen } from "../../deps.ts";

export const form: lforms.NihLhcForm = {
  name: "American Medical Association (AMA) Xcertia",
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
      question:
        "Is the identity of any entities that have access to, collect and/or use of the user's personal information made available and disclosed to the user on an at least annual basis?",
      questionCode: "XC2.1",
      questionCodeSystem: "Custom",
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
          text: "Yes",
          code: "Opt1",
        },
        {
          text: "No",
          code: "Opt2",
        },
      ],
    },
    {
      question:
        "If registration is required to use all or some of the app's features is the user provided with an explanation as to the uses of the registration information?",
      questionCodeSystem: "Custom",
      questionCode: "XC2.2",
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
          text: "Yes",
          code: "Opt1",
        },
        {
          text: "No",
          code: "Opt2",
        },
      ],
    },
    {
      question:
        "Does the app publisher obtain consent before collecting personal data, PII, PHI, financial or location data, including obtaining HIPAA authorizations where applicable?",
      questionCodeSystem: "Custom",
      questionCode: "XC2.3",
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
          text: "Yes",
          code: "Opt1",
        },
        {
          text: "No",
          code: "Opt2",
        },
      ],
    },
    {
      question:
        "Is there a mechanism that enables users to acknowledge and consent to changes to the Privacy Policy?",
      questionCodeSystem: "Custom",
      questionCode: "XC2.4",
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
          text: "Yes",
          code: "Opt1",
        },
        {
          text: "No",
          code: "Opt2",
        },
      ],
    },
    {
      question:
        "Does the Privacy Policy disclose the retention policy regarding user information?",
      questionCodeSystem: "Custom",
      questionCode: "XC2.5",
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
          text: "Yes",
          code: "Opt1",
        },
        {
          text: "No",
          code: "Opt2",
        },
      ],
    },
    {
      question:
        "Are the retention and deletion time periods based on clearly defined business needs or legal obligations?",
      questionCodeSystem: "Custom",
      questionCode: "XC2.6",
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
          text: "Yes",
          code: "Opt1",
        },
        {
          text: "No",
          code: "Opt2",
        },
      ],
    },
    {
      question:
        "If the app accesses any of the mobile device's native hardware (camera, etc.) is the reason for requiring such access disclosed to the user?",
      questionCodeSystem: "Custom",
      questionCode: "XC2.7",
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
          text: "Yes",
          code: "Opt1",
        },
        {
          text: "No",
          code: "Opt2",
        },
      ],
    },
    {
      question:
        "If the app accesses any Wi-Fi, LAN, or mobile network data connections, is an estimate of the amount of data consumed provided to the user along with a notice on carrier data charges?",
      questionCodeSystem: "Custom",
      questionCode: "XC2.8",
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
          text: "Yes",
          code: "Opt1",
        },
        {
          text: "No",
          code: "Opt2",
        },
      ],
    },
    {
      question:
        "If the app accesses social networking sites (such as Facebook, etc), are reasons as to why such sites are being accessed disclosed to the user?",
      questionCodeSystem: "Custom",
      questionCode: "XC2.9",
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
          text: "Yes",
          code: "Opt1",
        },
        {
          text: "No",
          code: "Opt2",
        },
      ],
    },
    {
      question:
        "Is there a mechanism where the user can affirmatively opt in or out of information shared with third parties?",
      questionCodeSystem: "Custom",
      questionCode: "XC2.10",
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
          text: "Yes",
          code: "Opt1",
        },
        {
          text: "No",
          code: "Opt2",
        },
      ],
    },
    {
      question:
        "Does the app publisher certify that a Business Associate Agreement (BAA) has been executed pursuant to HIPAA with any and all necessary third parties?",
      questionCodeSystem: "Custom",
      questionCode: "XC2.11",
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
          text: "Yes",
          code: "Opt1",
        },
        {
          text: "No",
          code: "Opt2",
        },
      ],
    },
    {
      question:
        "Does the user have the ability to access or request any of his/her Protected Health Information (PHI) collected, stored and/or transmitted by the app?",
      questionCodeSystem: "Custom",
      questionCode: "XC2.12",
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
          text: "Yes",
          code: "Opt1",
        },
        {
          text: "No",
          code: "Opt2",
        },
      ],
    },
    {
      question:
        "In case of any breach are notifications provided no later than 60 days following the discovery of a breach?",
      questionCodeSystem: "Custom",
      questionCode: "XC2.13",
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
          text: "Yes",
          code: "Opt1",
        },
        {
          text: "No",
          code: "Opt2",
        },
      ],
    },
    {
      question:
        "Does the app provide clear notice of the content that will be made available and its suitability for specific age groups?",
      questionCodeSystem: "Custom",
      questionCode: "XC2.14",
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
          text: "Yes",
          code: "Opt1",
        },
        {
          text: "No",
          code: "Opt2",
        },
      ],
    },
    {
      question:
        "Does the app provide an age verification process-either automatic or self-reported-to control access to age-restricted content?",
      questionCodeSystem: "Custom",
      questionCode: "XC2.15",
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
          text: "Yes",
          code: "Opt1",
        },
        {
          text: "No",
          code: "Opt2",
        },
      ],
    },
    {
      question:
        "Does the app have a default setting that prevents in-app purchases for children?",
      questionCodeSystem: "Custom",
      questionCode: "XC2.16",
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
          text: "Yes",
          code: "Opt1",
        },
        {
          text: "No",
          code: "Opt2",
        },
      ],
    },
    {
      question:
        "Does the app have a default setting that prevents usage of camera and microphone for children?",
      questionCodeSystem: "Custom",
      questionCode: "XC2.17",
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
          text: "Yes",
          code: "Opt1",
        },
        {
          text: "No",
          code: "Opt2",
        },
      ],
    },
    {
      question:
        "Does the app have measures in place to comply with applicable laws and regulations related to the European Union GDPR policy?",
      questionCodeSystem: "Custom",
      questionCode: "XC2.18",
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
          text: "Yes",
          code: "Opt1",
        },
        {
          text: "No",
          code: "Opt2",
        },
        {
          text: "NA",
          code: "Opt3",
        },
      ],
    },
  ],
};

export default form;

if (import.meta.main) {
  new typedDataGen.CliArgsEmitter(import.meta.url).emitJSON(form);
}
