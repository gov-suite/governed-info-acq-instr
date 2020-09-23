// Generated from onc-hipaa-security-pharma.lhc-form.json. DO NOT EDIT.

import { nihLhcForms as lforms, typedDataGen } from "../../deps.ts";

export const form: lforms.NihLhcForm = {
  code: "Q-001",
  name: "ONC HIPAA Security (Pharma)",
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
      question: "Audit",
      header: true,
      questionCode: "Q0022",
      localQuestionCode: "Q0022",
      units: null,
      codingInstructions: null,
      copyrightNotice: null,
      items: [
        {
          question:
            "Has an independent third party review or audit of your Company's information security and data protection programs been conducted?",
          questionCode: "Q0022-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-01",
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
              text: "In progress",
              code: "IP",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-01-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-01-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented a monitoring or audit program to document that the information security and data protection programs are operating in a manner that prevents unauthorized access?",
          questionCode: "Q0022-02",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-02",
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
              text: "In progress",
              code: "IP",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-02-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-02-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company conduct (and document) due diligence assessments of privacy, security and data protection related practices of your potential Business Partners prior to engaging them?",
          questionCode: "Q0022-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-03",
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
              text: "In progress",
              code: "IP",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-03-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-03-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company conduct audits or assessments of privacy, security and data protection related practices of Business Partners during the course of their engagement with your Company?",
          questionCode: "Q00222-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-04",
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
              text: "In progress",
              code: "IP",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-04-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-04-01",
          dataType: "TX",
        },
      ],
    },
    {
      question: "Training",
      header: true,
      questionCode: "Q003",
      localQuestionCode: "Q003",
      units: null,
      codingInstructions: null,
      copyrightNotice: null,
      items: [
        {
          question:
            "Has your Company implemented a mandatory documented Information Security training program that communicates the key features of your Company's security policy for all Resources that process or have access to pertinent Company information and information systems?",
          questionCode: "Q003-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-01",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q003-01-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-01-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented a mandatory documented privacy training program for all Resources that process or have access to Personal Information (PI) or Sensitive Personal Information (SPI) and which requires their written acknowledgement of their understanding of additional sensitivity, controls, and applicable regulations?",
          questionCode: "Q003-02",
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
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q003-02-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-02-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company's information security policy training program address acceptable and unacceptable use of systems and the major security controls that the Resources need to operate the systems?",
          questionCode: "Q003-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-03",
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
          question: "Comments",
          questionCode: "Q003-03-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-03-01",
          dataType: "TX",
        },
        {
          question:
            "Is evidence that privacy and security training have taken place documented and retained by your Company?",
          questionCode: "Q003-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-04",
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
          question: "Comments",
          questionCode: "Q003-04-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-04-01",
          dataType: "TX",
        },
      ],
    },
    {
      question: "Risk Assessment",
      header: true,
      questionCode: "Q004",
      localQuestionCode: "Q004",
      units: null,
      codingInstructions: null,
      copyrightNotice: null,
      items: [
        {
          question:
            "Has your Company implemented an IT risk assessment program?",
          questionCode: "Q004-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-01",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q004-01-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-01-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented an IT procedure to monitor and review all identified risks on an ongoing basis?",
          questionCode: "Q004-02",
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
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q004-02-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-02-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company perform risk mitigation activity for each IT risk discovered?",
          questionCode: "Q004-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-03",
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
          question: "Comments",
          questionCode: "Q004-03-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-03-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company perform an IT risk assessment of Business Partners utilized by your Company?",
          questionCode: "Q004-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-04",
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
          question: "Comments",
          questionCode: "Q004-04-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-04-01",
          dataType: "TX",
        },
      ],
    },
    {
      question: "Security Policy",
      header: true,
      questionCode: "Q005",
      localQuestionCode: "Q005",
      units: null,
      codingInstructions: null,
      copyrightNotice: null,
      items: [
        {
          question:
            "Is your Company's Information Security Program written in one or more readily accessible parts?",
          questionCode: "Q005-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-01",
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
              text: "In progress",
              code: "IP",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q005-01-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-01-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented a comprehensive documented Information Security Policy and Program that includes, but are not limited to: the organizations high-level commitment, sponsorship and strategy to assure the ongoing protection of information?",
          questionCode: "Q005-02",
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
        {
          question: "Comments",
          questionCode: "Q005-02-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-02-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company's Information Security Program contain administrative, technical and physical safeguards?",
          questionCode: "Q005-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-03",
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
          question: "Comments",
          questionCode: "Q005-03-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-03-01",
          dataType: "TX",
        },
        {
          question:
            "Are the safeguards contained in the Information Security program consistent with the safeguards for protection of Privacy Information (PI), set forth in applicable state or federal laws and regulations?",
          questionCode: "Q005-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-04",
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
          question: "Comments",
          questionCode: "Q005-04-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-04-01",
          dataType: "TX",
        },
      ],
    },
    {
      question: "Organizational Security",
      header: true,
      questionCode: "Q005--1",
      localQuestionCode: "Q005--1",
      units: null,
      codingInstructions: null,
      copyrightNotice: null,
      items: [
        {
          question:
            "Does your Company have a Chief Information Security Officer, Chief Information Risk Management Officer or equivalent, with overall accountability for delivery of information security objectives?",
          questionCode: "Q005-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-01",
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
          question: "Comments",
          questionCode: "Q005-01-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-01-01",
          dataType: "TX",
        },
      ],
    },
    {
      question: "Asset and Information Management",
      header: true,
      questionCode: "Q006",
      localQuestionCode: "Q006",
      units: null,
      codingInstructions: null,
      copyrightNotice: null,
      items: [
        {
          question:
            "Does your Company have a written Record Retention Policy that requires master records (Electronic and paper) to be retained for an adequate amount of time to facilitate retrieval or reconstruction of data that can satisfy requirements under applicable Laws and contracts?",
          questionCode: "Q006-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-01",
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
          question: "Comments",
          questionCode: "Q006-01-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-01-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented controls for legal holds or equivalent to protect data/documents/records from destruction, such as in the case of litigation, regulatory actions or investigations?",
          questionCode: "Q006-02",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-02",
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
              text: "In progress",
              code: "IP",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q006-02-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-02-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented a Procedure for securely destroying customer or Business Partner data, or eradicating such data from your environment, at the end of an applicable retention period, subject to any applicable legal hold order or other requirements?",
          questionCode: "Q006-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-03",
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
              text: "In progress",
              code: "IP",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q006-03-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-03-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented a Procedure for returning or securely destroying customer or Business Partner data, and/or eradicating such data from your environment, at the termination of a contract or your activities on their behalf, subject to any applicable legal hold order or requirements?",
          questionCode: "Q006-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-04",
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
              text: "In progress",
              code: "IP",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q006-04-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-04-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company engage outside Business Partners to securely destroy paper documents or electronic data / media?",
          questionCode: "Q006-05",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-05",
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
          question: "Comments",
          questionCode: "Q006-05-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-05-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company require formal permission from the data owner (such as your Business Partners or customers), and is there evidence that permission is documented and retained, prior to destroying electronic, paper or other forms of media and/or records?",
          questionCode: "Q006-06",
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
          question: "Comments",
          questionCode: "Q006-06-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-06-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company require a record of destruction or a certificate of destruction be produced by and obtained from your data/document destruction Business Partner?",
          questionCode: "Q006-07",
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
          question: "Comments",
          questionCode: "Q006-07-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-07-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented special secure bins at your Sites to collect sensitive documents for secure destruction?",
          questionCode: "Q006-08-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-08-01",
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
          question: "Comments",
          questionCode: "Q006-08-01-comments",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-08-01-comments",
          dataType: "TX",
        },
      ],
    },
    {
      question: "Human Resources Security",
      header: true,
      questionCode: "Q007",
      localQuestionCode: "Q007",
      units: null,
      codingInstructions: null,
      copyrightNotice: null,
      items: [
        {
          question:
            "Has your Company implemented a formal role description for each individual that performs tasks within the Company?",
          questionCode: "Q007-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-01",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q007-01-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-01-01",
          dataType: "TX",
        },
        {
          question:
            "Do your Company's role/job descriptions for each individual that performs tasks with in the Company identify the minimum education, training and proficiency acceptable to permit a person to perform that role/job?",
          questionCode: "Q007-02",
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
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q007-02-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-02-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company, as part of its hiring/contracting process, require that all applicants be subject to criminal background screenings prior to hire?",
          questionCode: "Q007-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-03",
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
          question: "Comments",
          questionCode: "Q007-03-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-03-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company, as part of its hiring/contracting process, require that all applicants be subject to drug screenings prior to hire?",
          questionCode: "Q007-04",
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
          question: "Comments",
          questionCode: "Q007-04-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-04-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company, as part of its hiring/contracting process, require that all applicants be subject to reference checks with previous employers?",
          questionCode: "Q007-05",
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
          question: "Comments",
          questionCode: "Q007-05-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-05-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company, as part of its hiring/contracting process, require that all applicants be subject to verification of qualifications?",
          questionCode: "Q007-06",
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
          question: "Comments",
          questionCode: "Q007-06-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-06-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company complete background screenings before Resources are permitted to work on or access data, applications or services?",
          questionCode: "Q007-07",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-07",
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
          question: "Comments",
          questionCode: "Q007-07-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-07-01",
          dataType: "TX",
        },
      ],
    },
    {
      question: "Physical and Environmental Security",
      header: true,
      questionCode: "Q008",
      localQuestionCode: "Q008",
      units: null,
      codingInstructions: null,
      copyrightNotice: null,
      items: [
        {
          question:
            "Are all of your Company's physical Sites (and their associated access points) containing Pfizer Information or where access can be gained to Pfizer Information protected from unauthorized access?",
          questionCode: "Q008-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-01",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q008-01-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-01-01",
          dataType: "TX",
        },
        {
          question:
            "Are all your Company's physical Sites where access can be gained to critical Information Technology components, employee workstations and sensitive areas physically protected from unauthorized access?",
          questionCode: "Q008-02",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-02",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q008-02-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-02-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company only grant physical access to Data Center facilities after appropriate documented authorization is obtained?",
          questionCode: "Q008-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-03",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q008-03-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-03-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company have documented evidence that Data Center facilities authorization is periodically reviewed?",
          questionCode: "Q008-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-04",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q008-04-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-04-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented a documented description of primary physical security controls?",
          questionCode: "Q008-05",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-05",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q008-05-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-05-01",
          dataType: "TX",
        },
        {
          question:
            "Are Company implemented and documented description of primary physical security controls appropriate to the confidentiality and sensitivity of the assets and/or information at each Site?",
          questionCode: "Q008-06",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-06",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q008-06-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-06-01",
          dataType: "TX",
        },
        {
          question:
            "Do your Company's physical security controls also address the security of any directly supporting assets - locations where wiring connects systems?",
          questionCode: "Q008-07",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-07",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q008-07-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-07-01",
          dataType: "TX",
        },
        {
          question:
            "Do your Company's physical security controls also address the security of any directly supporting assets - supporting services (such as generators, master power switches, and environmental controls?",
          questionCode: "Q008-08",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q008-08-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-08-01",
          dataType: "TX",
        },
        {
          question:
            "Do your Company's physical security controls also address the security of any directly supporting assets - offsite data storage locations?",
          questionCode: "Q008-09",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-09",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q008-09-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-09-01",
          dataType: "TX",
        },
        {
          question:
            "Do your Company's physical security controls also address the security of any directly supporting assets - data storage areas (e.g. storage bins, containers, or rooms)?",
          questionCode: "Q008-10",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-10",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q008-10-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-10-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented procedures to monitor, control and detect unauthorized physical access attempts at your Site?",
          questionCode: "Q008-11",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-11",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q008-11-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-11-01",
          dataType: "TX",
        },
      ],
    },
    {
      question: "IT Operations Management and Communication",
      header: true,
      questionCode: "Q009",
      localQuestionCode: "Q009",
      units: null,
      codingInstructions: null,
      copyrightNotice: null,
      items: [
        {
          question:
            "Has your Company implemented a procedure for maintaining up to date anti-virus software on workstations, laptops, and mission critical systems within the organization?",
          questionCode: "Q009-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-01",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q009-01-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-01-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company's anti-virus software maintain near real-time virus signature updates configured to actively scan and prevent viruses on workstations, laptops, and mission critical systems within the organization?",
          questionCode: "Q009-02",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-02",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q009-02-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-02-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented a procedure for maintaining current security patch levels and other security software updates?",
          questionCode: "Q009-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-03",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q009-03-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-03-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented a documented access control Policy for all mission critical systems?",
          questionCode: "Q009-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-04",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q009-04-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-04-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented up to date active firewall protection for the network perimeter and a dedicated firewall-protected connection to the internet?",
          questionCode: "Q009-05",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-05",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q009-05-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-05-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented strong encryption, with a minimum of 128 bit encryption when transmitting Pfizer Information outside your network?",
          questionCode: "Q009-06",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-06",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q009-06-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-06-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented two-factor authentication such as tokens or biometric authentication if mobile or remote access to Pfizer data is available?",
          questionCode: "Q009-07",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-07",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q009-07-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-07-01",
          dataType: "TX",
        },
        {
          question:
            "Do wireless access points attached to your Company's network implement a secure configuration and encryption protocol?",
          questionCode: "Q009-08",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-08",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q009-08-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-08-01",
          dataType: "TX",
        },
        {
          question:
            "Are all your Company's laptops or other portable devices that store or process Pfizer data encrypted?",
          questionCode: "Q009-09",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-09",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q009-09-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-09-01",
          dataType: "TX",
        },
        {
          question:
            "Do your Company's servers and backup servers have SSL or equivalent protection implemented?",
          questionCode: "Q009-10",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-10",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q009-10-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-10-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented a procedure to store backed up Pfizer data on individual media, (i.e., separated from non-Pfizer data)?",
          questionCode: "Q009-11",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-11",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q009-11-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-11-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company use Vendors who process, transport or store Pfizer data within their IT infrastructure?",
          questionCode: "Q009-12",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-12",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q009-12-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-12-01",
          dataType: "TX",
        },
        {
          question:
            "If your Company stores Pfizer Information outside the Pfizer network, is this data logically separated from the data of other clients unless specifically agreed to in writing by Pfizer?",
          questionCode: "Q009-13",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-13",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q009-13-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-13-01",
          dataType: "TX",
        },
        {
          question:
            "If Pfizer agrees that Pfizer Information can be commingled with data from your Company's clients or Business Partners or customers or your own data, is restore/retrieval of data accomplished for one client or party without disclosing or giving access to another client?",
          questionCode: "Q009-14",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-14",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q009-14-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-14-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company conduct and document regular penetration tests executed against web-based applications?",
          questionCode: "Q009-15",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-15",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q009-15-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-15-01",
          dataType: "TX",
        },
      ],
    },
    {
      question: "Access Control",
      header: true,
      questionCode: "Q0010",
      localQuestionCode: "Q0010",
      units: null,
      codingInstructions: null,
      copyrightNotice: null,
      items: [
        {
          question:
            "Has your Company implemented a documented procedure for authorizing access to your network and its information systems?",
          questionCode: "Q0010-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-01",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-01-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-01-01",
          dataType: "TX",
        },
        {
          question:
            "Are access permissions and privileges granted to an individual restricted, based on the individual's need-to-know tasks/job duties associated with their role(s)?",
          questionCode: "Q0010-02",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-02",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-02-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-02-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company identify and assign each account and/or token that provides network or application access to an individual?",
          questionCode: "Q0010-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-03",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-03-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-03-01",
          dataType: "TX",
        },
        {
          question:
            "If any account within your Company is assigned to more than a single individual (e.g., shared account), are there any compensating controls to assure all actions performed using the account are associated with an accountable individual?",
          questionCode: "Q0010-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-04",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-04-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-04-01",
          dataType: "TX",
        },
        {
          question:
            "If any account within your Company is assigned to more than a single individual (e.g., shared account), are there any compensating controls to assure all actions performed using the account cannot modify data (intentionally or unintentionally)?",
          questionCode: "Q0010-05",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-05",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-05-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-05-01",
          dataType: "TX",
        },
        {
          question:
            "If any account within your Company is assigned to more than a single individual (e.g., shared account), are there any compensating controls to assure all action performed using the account are monitored and logged?",
          questionCode: "Q0010-06",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-06",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-06-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-06-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company have a Procedure detailing the process and approval for access requests?",
          questionCode: "Q0010-07",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-07",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-07-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-07-01",
          dataType: "TX",
        },
        {
          question:
            "Does this procedure require all new and altered access privileges to be approved and logged?",
          questionCode: "Q0010-08",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-08",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-08-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-08-01",
          dataType: "TX",
        },
        {
          question:
            "Does this procedure require all terminated access privileges to be logged?",
          questionCode: "Q0010-09",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-09",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-09-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-09-01",
          dataType: "TX",
        },
        {
          question:
            "Does this procedure require granted access be limited to individual's roles and responsibilities?",
          questionCode: "Q0010-10",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-10",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-10-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-10-01",
          dataType: "TX",
        },
        {
          question:
            "Does this procedure require access privileges be issued only by authorized personnel or groups?",
          questionCode: "Q0010-11",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-11",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-11-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-11-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented Procedures requiring new, modified and terminated access privilege changes to be logged?",
          questionCode: "Q0010-12",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-12",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-12-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-12-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company issue or assign access privileges to applications and data (including network and application, tokens and badges) in a documented controlled and secure way by an authorized group?",
          questionCode: "Q0010-13",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-13",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-13-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-13-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company control the authorization and renewal of temporary access by a documented Procedure that requires periodic re-authorization?",
          questionCode: "Q0010-14",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-14",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-14-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-14-01",
          dataType: "TX",
        },
        {
          question:
            "Is your Company's authorization and renewal of temporary access recorded, logged, and retained?",
          questionCode: "Q0010-15",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-15",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-15-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-15-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company re-authorize temporary access at least every 90 days or less where applicable Laws require?",
          questionCode: "Q0010-16",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-16",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-16-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-16-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented a Procedure or Policy so that, when a Resource reaches their termination date, all access privileges are deactivated and assets are returned for re-provisioning or secure disposal in a timely manner?",
          questionCode: "Q0010-17",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-17",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-17-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-17-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company's password Policy and password implementation require a minimum length of 8 characters?",
          questionCode: "Q0010-18",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-18",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-18-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-18-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company's password Policy and password implementation require a minimum complexity of at least 3 of the following character types (numbers, upper case letters, lower case letters, and non-alpha numeric characters)?",
          questionCode: "Q0010-19",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-19",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-19-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-19-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company's password Policy and password implementation require passwords to be changed at least every 120 days?",
          questionCode: "Q0010-20",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-20",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-20-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-20-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company's password Policy and password implementation require password storage and transmission are encrypted?",
          questionCode: "Q0010-21",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-21",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-21-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-21-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company's password Policy and password implementation require passwords to be maintained as secret information and must not be shared or written?",
          questionCode: "Q0010-22",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-22",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-22-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-22-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company block/lockout access to information/systems after no more than ten (10) unsuccessful password attempts?",
          questionCode: "Q0010-23",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-23",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-23-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-23-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented a Procedure to monitor and detect unauthorized internal access attempts relating to client's data?",
          questionCode: "Q0010-24",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-24",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-24-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-24-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company have a documented Procedure for detecting and preventing security system failures?",
          questionCode: "Q0010-25",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-25",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-25-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-25-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company Procedure for documenting and preventing security system failures include a mechanism to report known or suspected non-conformances or failures in security?",
          questionCode: "Q0010-26",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-26",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-26-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-26-01",
          dataType: "TX",
        },
        {
          question:
            "Is the identity of each individual requesting access confirmed using authoritative PI before credentials for computing assets and/or physical locations are issued?",
          questionCode: "Q0010-27",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-27",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-27-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-27-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company provide remote access outside of the Company's Sites to records containing PI?",
          questionCode: "Q0010-28",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-28",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0010-28-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-28-01",
          dataType: "TX",
        },
      ],
    },
    {
      question: "Information Systems Maintenance and Change",
      header: true,
      questionCode: "Q0011",
      localQuestionCode: "Q0011",
      units: null,
      codingInstructions: null,
      copyrightNotice: null,
      items: [
        {
          question:
            "Has your Company implemented a formal change management / change control Procedure?",
          questionCode: "Q0011-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0011-01",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0011-01-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0011-01-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company independently test software and infrastructure prior to implementation?",
          questionCode: "Q0011-02",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0011-02",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0011-02-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0011-02-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company use a computerized system for tracking changes/problems when independently testing software and infrastructure prior to implementation?",
          questionCode: "Q0011-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0011-03",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0011-03-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0011-03-01",
          dataType: "TX",
        },
        {
          question:
            "Are all changes tested before being released into the production environment?",
          questionCode: "Q0011-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0011-04",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0011-04-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0011-04-01",
          dataType: "TX",
        },
        {
          question: "Is all documentation of the change retained?",
          questionCode: "Q0011-05",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0011-05",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0011-05-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0011-05-01",
          dataType: "TX",
        },
      ],
    },
    {
      question: "Incident Management and Incident Communications",
      header: true,
      questionCode: "Q0012",
      localQuestionCode: "Q0012",
      units: null,
      codingInstructions: null,
      copyrightNotice: null,
      items: [
        {
          question:
            "Has your Company implemented a written Incident Response Procedure to identify, consistently report and resolve any known or suspected security or privacy problems, incidents or breaches?",
          questionCode: "Q0012-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-01",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0012-01-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-01-01",
          dataType: "TX",
        },
        {
          question:
            "If so, does this Incident Response Procedure require the identification, reporting, containment and notification to affected parties be completed within the mandatory timeframes required by applicable Laws?",
          questionCode: "Q0012-02",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-02",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0012-02-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-02-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented a Procedure for documenting responsive actions taken in connection with any incident involving a breach of security or privacy?",
          questionCode: "Q0012-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-03",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0012-03-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-03-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company conduct a mandatory post-incident (post-mortem) review of events and actions taken?",
          questionCode: "Q0012-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-04",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0012-04-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-04-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented a documented Process for making applicable changes in business practices based upon the incident review?",
          questionCode: "Q0012-05",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-05",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0012-05-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-05-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company been affected by an attack or had a security or proxy incident in the past 36 months related to: Client, customer, patient and/or health care professional records or data compromised",
          questionCode: "Q0012-06",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-06",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0012-06-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-06-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company been affected by an attack or had a security or proxy incident in the past 36 months related to: Confidential records or data compromised",
          questionCode: "Q0012-07",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-07",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0012-07-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-07-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company been affected by an attack or had a security or proxy incident in the past 36 months related to: Employee or Resource records or data compromised",
          questionCode: "Q0012-08",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-08",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0012-08-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-08-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company been affected by an attack or had a security or proxy incident in the past 36 months related to: Identity theft (involving Resource, client, customer, patient and/or health care professional) or PI stolen or compromised",
          questionCode: "Q0012-09",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-09",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0012-09-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-09-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company been affected by an attack or had a security or proxy incident in the past 36 months related to: Intellectual property theft or compromise",
          questionCode: "Q0012-10",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-10",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0012-10-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-10-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company been affected by an attack or had a security or proxy incident in the past 36 months related to: Regulatory exposure, investigation and/or action",
          questionCode: "Q0012-11",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-11",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0012-11-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-11-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company been affected by an attack or had a security or proxy incident in the past 36 months related to: Loss or damage of internal records",
          questionCode: "Q0012-12",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-12",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0012-12-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-12-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company been affected by an attack or had a security or proxy incident in the past 36 months related to: Fraud",
          questionCode: "Q0012-13",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-13",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0012-13-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-13-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company been affected by an attack or had a security or proxy incident in the past 36 months related to: Legal exposure or action",
          questionCode: "Q0012-14",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-14",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0012-14-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-14-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company been affected by an attack or had a security or proxy incident in the past 36 months related to: Financial losses",
          questionCode: "Q0012-15",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-15",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0012-15-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-15-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company been affected by an attack or had a security or proxy incident in the past 36 months related to: Client, customer, patient and/or health care professional records unavailable",
          questionCode: "Q0012-16",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-16",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0012-16-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-16-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company been affected by an attack or had a security or proxy incident in the past 36 months related to: Employee or Resource records unavailable",
          questionCode: "Q0012-17",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-17",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0012-17-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-17-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company been affected by an attack or had a security or proxy incident in the past 36 months related to: Loss of network, e-mail, website(s) and/or applications",
          questionCode: "Q0012-18",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-18",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0012-18-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-18-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company been affected by an attack or had a security or proxy incident in the past 36 months related to: Brand / reputation compromised",
          questionCode: "Q0012-19",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-19",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0012-19-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-19-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company been subject to complaints concerning the collection, use or processing of PI, compliance or non-compliance with privacy, security or data protection related Laws or Policies, identity theft or data security?",
          questionCode: "Q0012-20",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-20",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0012-20-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-20-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company's Incident Response Procedure include specific reporting requirements to your Company for privacy and security related incidents?",
          questionCode: "Q0012-21",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-21",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0012-21-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-21-01",
          dataType: "TX",
        },
      ],
    },
    {
      question: "Business Continuity and Disaster Recovery",
      header: true,
      questionCode: "Q0013",
      localQuestionCode: "Q0013",
      units: null,
      codingInstructions: null,
      copyrightNotice: null,
      items: [
        {
          question:
            "Has your Company documented and implemented data backup, retrieval and restoration Procedures?",
          questionCode: "Q0013-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0013-01",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0013-01-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0013-01-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented the storage of backup media and any restoration and retrieval instructions sufficiently segregated from the operational Site (usually requiring an off-site storage location)?",
          questionCode: "Q0013-02",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0013-02",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0013-02-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0013-02-01",
          dataType: "TX",
        },
        {
          question:
            "Is at least one system in each of your Company's major data centers restored annually, either via restoration testing or via actual system restoration?",
          questionCode: "Q0013-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0013-03",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0013-03-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0013-03-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented Disaster Recovery ('DR') Procedures, including, but not limited to DR plans?",
          questionCode: "Q0013-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0013-04",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0013-04-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0013-04-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented an alternative DR Site and is this Site owned or operated by a Business Partner or the Company?",
          questionCode: "Q0013-05",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0013-05",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0013-05-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0013-05-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented a documented Business Continuity ('BC') Procedure with managerial sponsorship to address any issue that affects core business activities (including, but not limited to BC plans) (e.g., Global Data Center outage)?",
          questionCode: "Q0013-06",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0013-06",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0013-06-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0013-06-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company use a third party provider for off-Site storage?",
          questionCode: "Q0013-07",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0013-07",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0013-07-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0013-07-01",
          dataType: "TX",
        },
        {
          question:
            "Are documented physical, technical, administrative and environmental control requirements sustained during the transport of any physical media?",
          questionCode: "Q0013-08",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0013-08",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0013-08-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0013-08-01",
          dataType: "TX",
        },
        {
          question:
            "When physical media (Electronic or paper) is transferred to a new physical location or between physical locations, are the physical, technical, and administrative access control requirements equivalent to or better than the controls of the original location?",
          questionCode: "Q0013-09",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0013-09",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0013-09-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0013-09-01",
          dataType: "TX",
        },
      ],
    },
    {
      question: "Compliance To Regulations (Legal/Regulatory)",
      header: true,
      questionCode: "Q0014",
      localQuestionCode: "Q0014",
      units: null,
      codingInstructions: null,
      copyrightNotice: null,
      items: [
        {
          question:
            "If applicable, has your Company implemented, written Procedures to meet E-Mail - e.g., U.S. CAN-Spam Act of 2003, or similar requirements",
          questionCode: "Q0014-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-01",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0014-01-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-01-01",
          dataType: "TX",
        },
        {
          question:
            "If applicable, has your Company implemented, written Procedures to meet Telemarketing and Faxing - e.g., Telephone Consumer Protection Act (TCPA), Telemarketing Sales Rule, Junk Protection Act of 2005, or local or state do-not-call or do not fax laws",
          questionCode: "Q0014-02",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-02",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0014-02-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-02-01",
          dataType: "TX",
        },
        {
          question:
            "If applicable, has your Company implemented, written Procedures to meet HIPAA, including HIPAA Privacy and Security Rules and HITECH Act.",
          questionCode: "Q0014-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-03",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Select",
          questionCode: "XIII. e",
          codingInstructions: "",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "II. c",
          dataType: "CNE",
          answers: [
            {
              text: "As a Covered Entity",
              code: "As a Covered Entity",
            },
            {
              text: "As a Business Associate",
              code: "As a Business Associate",
            },
            {
              text: "Neither a Covered Entity nor a Business Associate",
              code: "Neither a Covered Entity nor a Business Associate",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
          skipLogic: {
            conditions: [
              {
                source: "Q0014-03",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
        },
        {
          question: "Comments",
          questionCode: "Q0014-03-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-03-01",
          dataType: "TX",
        },
        {
          question:
            "If applicable, has your Company implemented, written Procedures to meet Children's Online Privacy Protection Act (COPPA)",
          questionCode: "Q0014-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-04",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0014-04-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-04-01",
          dataType: "TX",
        },
        {
          question:
            "If applicable, has your Company implemented, written Procedures to meet Web - e.g. California Online Privacy Protection Act of 2003",
          questionCode: "Q0014-05",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-05",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0014-05-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-05-01",
          dataType: "TX",
        },
        {
          question:
            "If applicable, has your Company implemented, written Procedures to meet 40+ state security breach notification laws",
          questionCode: "Q0014-06",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-06",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0014-06-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-06-01",
          dataType: "TX",
        },
        {
          question:
            "If applicable, has your Company implemented, written Procedures to meet FACT ACT, including FACT ACT Disposal Rule and Identity Theft Red Flags Rule",
          questionCode: "Q0014-07",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-07",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0014-07-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-07-01",
          dataType: "TX",
        },
        {
          question:
            "If applicable, has your Company implemented, written Procedures to meet GLBA Section 501(b) Safeguards Rule",
          questionCode: "Q0014-08",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-08",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0014-08-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-08-01",
          dataType: "TX",
        },
        {
          question:
            "If applicable, has your Company implemented, written Procedures to meet 25+ state laws regulating use and protection of Social Security Numbers",
          questionCode: "Q0014-09",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-09",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0014-09-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-09-01",
          dataType: "TX",
        },
        {
          question:
            "If applicable, has your Company implemented, written Procedures to meet State laws (e.g., New Hampshire) limiting use of Prescriber-identifiable data for certain commercial purposes",
          questionCode: "Q0014-10",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-10",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0014-10-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-10-01",
          dataType: "TX",
        },
        {
          question:
            "If applicable, has your Company implemented, written Procedures to meet MA-201 CMR 17, Standards for the Protection of Personal Information of Residents of the Commonwealth of Massachusetts",
          questionCode: "Q0014-11",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-11",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0014-11-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-11-01",
          dataType: "TX",
        },
        {
          question:
            "If applicable, has your Company implemented, written Procedures to meet Federal, state or local medical marketing practices-related laws, rules or regulations,  -  e.g., California Civil Code Section 1798.91",
          questionCode: "Q0014-12",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-12",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0014-12-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-12-01",
          dataType: "TX",
        },
        {
          question:
            "If applicable, has your Company implemented, written Procedures to meet State or local medical information confidentiality laws, rules or regulations - e.g., California Confidentiality of Medical Information Act (CA Civil Code Section 56-56.07, et seq.)",
          questionCode: "Q0014-13",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-13",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0014-13-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-13-01",
          dataType: "TX",
        },
        {
          question:
            "If applicable, has your Company implemented, written Procedures to meet Payment Care Industry Date Security Standards ('PCI-DSS')",
          questionCode: "Q0014-14",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-14",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0014-14-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-14-01",
          dataType: "TX",
        },
        {
          question:
            "Please select the region(s) where data processing takes place and where your Company's data center's are physically located?",
          questionCode: "Q0014-15",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-15",
          dataType: "CNE",
          answers: [
            {
              text: "Americas Region: USA",
              code: "Americas Region: USA",
            },
            {
              text: "Americas Region: Canada",
              code: "Americas Region: Canada",
            },
            {
              text: "Americas Region: Latin America not including  Argentina",
              code: "Americas Region: Latin America not including  Argentina",
            },
            {
              text: "Americas Region: Latin America including Argentina",
              code: "Americas Region: Latin America including Argentina",
            },
            {
              text:
                "Americas Region: Other Americas country (Please identify in comments)",
              code:
                "Americas Region: Other Americas country (Please identify in comments)",
            },
            {
              text: "EU/European Economic Area (EEA): Austria",
              code: "EU/European Economic Area (EEA): Austria",
            },
            {
              text: "EU/European Economic Area (EEA): Belgium",
              code: "EU/European Economic Area (EEA): Belgium",
            },
            {
              text: "EU/European Economic Area (EEA): Bulgaria",
              code: "EU/European Economic Area (EEA): Bulgaria",
            },
            {
              text: "EU/European Economic Area (EEA): Cyprus",
              code: "EU/European Economic Area (EEA): Cyprus",
            },
            {
              text: "EU/European Economic Area (EEA): Czech Republic",
              code: "EU/European Economic Area (EEA): Czech Republic",
            },
            {
              text: "EU/European Economic Area (EEA): Denmark",
              code: "EU/European Economic Area (EEA): Denmark",
            },
            {
              text: "EU/European Economic Area (EEA): Estonia",
              code: "EU/European Economic Area (EEA): Estonia",
            },
            {
              text: "EU/European Economic Area (EEA): Finland",
              code: "EU/European Economic Area (EEA): Finland",
            },
            {
              text: "EU/European Economic Area (EEA): France",
              code: "EU/European Economic Area (EEA): France",
            },
            {
              text: "EU/European Economic Area (EEA): Germany",
              code: "EU/European Economic Area (EEA): Germany",
            },
            {
              text: "EU/European Economic Area (EEA): Greece",
              code: "EU/European Economic Area (EEA): Greece",
            },
            {
              text: "EU/European Economic Area (EEA): Hungary",
              code: "EU/European Economic Area (EEA): Hungary",
            },
            {
              text: "EU/European Economic Area (EEA): Iceland",
              code: "EU/European Economic Area (EEA): Iceland",
            },
            {
              text: "EU/European Economic Area (EEA): Italy",
              code: "EU/European Economic Area (EEA): Italy",
            },
            {
              text: "EU/European Economic Area (EEA): Latvia",
              code: "EU/European Economic Area (EEA): Latvia",
            },
            {
              text: "EU/European Economic Area (EEA): Liechtenstein",
              code: "EU/European Economic Area (EEA): Liechtenstein",
            },
            {
              text: "EU/European Economic Area (EEA): Lithuania",
              code: "EU/European Economic Area (EEA): Lithuania",
            },
            {
              text: "EU/European Economic Area (EEA): Luxembourg",
              code: "EU/European Economic Area (EEA): Luxembourg",
            },
            {
              text: "EU/European Economic Area (EEA): Malta",
              code: "EU/European Economic Area (EEA): Malta",
            },
            {
              text: "EU/European Economic Area (EEA): Netherlands",
              code: "EU/European Economic Area (EEA): Netherlands",
            },
            {
              text: "EU/European Economic Area (EEA): Norway",
              code: "EU/European Economic Area (EEA): Norway",
            },
            {
              text: "EU/European Economic Area (EEA): Poland",
              code: "EU/European Economic Area (EEA): Poland",
            },
            {
              text: "EU/European Economic Area (EEA): Portugal",
              code: "EU/European Economic Area (EEA): Portugal",
            },
            {
              text: "EU/European Economic Area (EEA): Romania",
              code: "EU/European Economic Area (EEA): Romania",
            },
            {
              text: "EU/European Economic Area (EEA): Slovakia",
              code: "EU/European Economic Area (EEA): Slovakia",
            },
            {
              text: "EU/European Economic Area (EEA): Spain",
              code: "EU/European Economic Area (EEA): Spain",
            },
            {
              text: "EU/European Economic Area (EEA): Sweden",
              code: "EU/European Economic Area (EEA): Sweden",
            },
            {
              text: "EU/European Economic Area (EEA): United Kingdom",
              code: "EU/European Economic Area (EEA): United Kingdom",
            },
            {
              text: "EU/European Economic Area (EEA): Switzerland",
              code: "EU/European Economic Area (EEA): Switzerland",
            },
            {
              text: "EU/European Economic Area (EEA): Other European country",
              code: "EU/European Economic Area (EEA): Other European country",
            },
            {
              text: "EU/European Economic Area (EEA): Russia",
              code: "EU/European Economic Area (EEA): Russia",
            },
            {
              text: "EU/European Economic Area (EEA): Ukraine",
              code: "EU/European Economic Area (EEA): Ukraine",
            },
            {
              text:
                "EU/European Economic Area (EEA): Other European country (Please identify in comments)",
              code:
                "EU/European Economic Area (EEA): Other European country (Please identify in comments)",
            },
            {
              text: "Asia and Pacific Regions: Japan",
              code: "Asia and Pacific Regions: Japan",
            },
            {
              text: "Asia and Pacific Regions: China",
              code: "Asia and Pacific Regions: China",
            },
            {
              text: "Asia and Pacific Regions: India",
              code: "Asia and Pacific Regions: India",
            },
            {
              text: "Asia and Pacific Regions: Hong Kong",
              code: "Asia and Pacific Regions: Hong Kong",
            },
            {
              text: "Asia and Pacific Regions: South Korea",
              code: "Asia and Pacific Regions: South Korea",
            },
            {
              text: "Asia and Pacific Regions: Australia",
              code: "Asia and Pacific Regions: Australia",
            },
            {
              text:
                "Asia and Pacific Regions: Other Asia and Pacific Regions (Please identify in comments)",
              code:
                "Asia and Pacific Regions: Other Asia and Pacific Regions (Please identify in comments)",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0014-15-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-15-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented a procedure to require that any change to your accreditation status (e.g., ISO, PCI-DSS, and Safe Harbor) is communicated to your clients and Resources that could be impacted?",
          questionCode: "Q0014-16",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-16",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0014-16-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-16-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented a Code of Conduct and/or Ethics Policy?",
          questionCode: "Q0014-17",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-17",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0014-17-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-17-01",
          dataType: "TX",
        },
        {
          question:
            "If your company has a Code of Conduct and/or Ethics Policy, does it address the privacy of Personal Information and the confidentiality of corporate, customer and Business Partner information?",
          questionCode: "Q0014-18",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-18",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0014-18-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-18-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company have a compliance hotline or so-called 'whistleblower hotline' as may be allowed by Laws?",
          questionCode: "Q0014-19",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-19",
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
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0014-19-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014-19-01",
          dataType: "TX",
        },
      ],
    },
  ],
};

export default form;

if (import.meta.main) {
  new typedDataGen.CliArgsEmitter(import.meta.url).emitJSON(form);
}
