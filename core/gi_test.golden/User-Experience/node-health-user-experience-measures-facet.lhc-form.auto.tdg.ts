// Generated from node-health-user-experience-measures-facet.lhc-form.json. DO NOT EDIT.

import { nihLhcForms as lforms, typedDataGen } from "../../deps.ts";

export const form: lforms.NihLhcForm = {
  name: "NODE Health User Experience Measures Facet",
  items: [
    {
      question: "Data Control",
      questionCode: "H1",
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
      items: [
        {
          question: "The user can control their profile information",
          questionCodeSystem: "Custom",
          questionCode: "UEM 1.1",
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
          question:
            "The user has control over their data (including revoking, sharing, transferring, exporting, avoiding data loss, etc)",
          questionCodeSystem: "Custom",
          questionCode: "UEM 1.2",
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
          question:
            "Data security approach and storage  location is communicated clearly to the user",
          questionCodeSystem: "Custom",
          questionCode: "UEM 1.3",
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
          question:
            "Data privacy and sharing is communicated clearly to the user",
          questionCodeSystem: "Custom",
          questionCode: "UEM 1.4",
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
          codingInstructions:
            "data privacy and sharing is communicated to user clearly",
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
          question:
            "Consents and opt-ins/outs are implemented, confirmed and clear for any data sharing",
          questionCodeSystem: "Custom",
          questionCode: "UEM 1.5",
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
          question:
            "The app explains any sensors on personal devices it will use and why",
          questionCodeSystem: "Custom",
          questionCode: "UEM 1.6",
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
      ],
    },
    {
      question: "Value",
      questionCode: "H2",
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
      items: [
        {
          question:
            'The experience enables "jobs to be done" or tasks to be completed effectively',
          questionCodeSystem: "Custom",
          questionCode: "UEM 2.1",
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
          question:
            "The experience provides valuable information in an easily digestible format",
          questionCodeSystem: "Custom",
          questionCode: "UEM 2.2",
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
          question:
            "Information needed for a particular task or decision making is grouped together on a single screen",
          questionCodeSystem: "Custom",
          questionCode: "UEM 2.3",
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
          question:
            "The experience is useful for clinical documentation and clinical decision support",
          questionCodeSystem: "Custom",
          questionCode: "UEM 2.4",
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
          question:
            "The experience minimizes the creation of unjustified workflow for clinicians",
          questionCodeSystem: "Custom",
          questionCode: "UEM 2.5",
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
      ],
    },
    {
      question: "Performance",
      questionCode: "H3",
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
      items: [
        {
          question:
            "Screens load and system actions execute in a timely manner",
          questionCodeSystem: "Custom",
          questionCode: "UEM 3.1",
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
          codingInstructions:
            "Average load time for screens or wait times for system actions based on sampling of no less than 5 or 20% of screens (whichever is more) in seconds (0 = > 10 seconds, 1 = > 5 seconds, 2 = > 2 second, 3 = 1 second, 4 = 1-0.5 second, 5 = < .5 second) )",
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
          ],
        },
        {
          question:
            "If a secondary system there is single sign-on/seamless embedding from the primary system",
          questionCodeSystem: "Custom",
          questionCode: "UEM 3.2",
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
          dataType: "BL",
        },
        {
          question: "Number of errors as percentage per interaction",
          questionCodeSystem: "Custom",
          questionCode: "UEM 3.3",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Percentage",
                },
              },
            },
          },
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
          dataType: "INT",
          defaultAnswer: "0",
        },
        {
          question: "It is easy to connect peripherals and related services",
          questionCodeSystem: "Custom",
          questionCode: "UEM 3.4",
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
      ],
    },
    {
      question: "Design",
      questionCode: "H4",
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
      items: [
        {
          question:
            "The user experience matches current paradigms of digital interaction",
          questionCodeSystem: "Custom",
          questionCode: "UEM 4.1",
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
          question:
            "Prompts for additional information are contextual and timely",
          questionCodeSystem: "Custom",
          questionCode: "UEM 4.2",
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
          question:
            "On-boarding is completed in a timely manner and the user clearly understands the capabilities of the application after on-boarding",
          questionCodeSystem: "Custom",
          questionCode: "UEM 4.3",
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
          codingInstructions: "Is on-boarding is fast and simple?",
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
          question:
            "The experience can be easily navigated and the user knows where they are at all times in the experience",
          questionCodeSystem: "Custom",
          questionCode: "UEM 4.4",
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
          codingInstructions:
            "Does the user know where they are at all times in the experience?",
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
          question:
            "The information is presented to the user in easily scannable format",
          questionCodeSystem: "Custom",
          questionCode: "UEM 4.5",
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
          question: "User can control notifications in a flexible way",
          questionCodeSystem: "Custom",
          questionCode: "UEM 4.6",
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
          question: "Login is simple",
          questionCodeSystem: "Custom",
          questionCode: "UEM 4.7",
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
          question: "In-experience advertising is not obtrusive",
          questionCodeSystem: "Custom",
          questionCode: "UEM 4.8",
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
          codingInstructions:
            "Does the experience has any obtrusive advertising?",
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
          question:
            "Conversational language is favored over medical jargon and uses the same terminology that clinicians use with patients",
          questionCodeSystem: "Custom",
          questionCode: "UEM 4.9",
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
      ],
    },
    {
      question: "Research",
      questionCode: "H5",
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
      items: [
        {
          question:
            "Was the relevant academic literature was reviewed as evidence basis for the solution",
          questionCodeSystem: "Custom",
          questionCode: "UEM 5.1",
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
          dataType: "BL",
        },
        {
          question:
            "How many users were involved in your product development research? (0=0,1 = < 3, etc)",
          questionCodeSystem: "Custom",
          questionCode: "UEM 5.2",
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
          dataType: "INT",
        },
        {
          question: "Were personas developed as part of product creation?",
          questionCodeSystem: "Custom",
          questionCode: "UEM 5.3",
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
          dataType: "BL",
        },
        {
          question: "Was usability testing conducted?",
          questionCodeSystem: "Custom",
          questionCode: "UEM 5.4",
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
          dataType: "BL",
        },
        {
          question:
            "How many users were involved in your product development research? (0=0,1 = < 3, etc)",
          questionCodeSystem: "Custom",
          questionCode: "UEM 5.5",
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
          dataType: "INT",
        },
      ],
    },
    {
      question: "Satisfaction and Delight",
      questionCode: "H6",
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
      items: [
        {
          question:
            "Percentage of invited users who have used the app or service for at least two sessions in the last 6 months",
          questionCodeSystem: "Custom",
          questionCode: "UEM 6.1",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Percentage",
                },
              },
            },
          },
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
          dataType: "INT",
        },
        {
          question:
            "Net promoter score (i.e. on scale of 1-10 how likely are you to recommend this app) of a sampling of no less than 5% of users in the last 3 months",
          questionCodeSystem: "Custom",
          questionCode: "UEM 6.2",
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
          dataType: "INT",
        },
        {
          question:
            "Experience provides moments of levity and delight to the user",
          questionCodeSystem: "Custom",
          questionCode: "UEM 6.3",
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
      ],
    },
    {
      question: "Special Needs and Accessibility",
      questionCode: "H7",
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
      items: [
        {
          question:
            "Is there language support for languages of populations greater than 5% of total target population?",
          questionCodeSystem: "Custom",
          questionCode: "UEM 7.1",
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
          dataType: "BL",
        },
        {
          question:
            "Was the population evaluated for special needs (physical disabilities, hardware, connectivity, technical literacy)?",
          questionCodeSystem: "Custom",
          questionCode: "UEM 7.2",
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
          dataType: "BL",
        },
        {
          question:
            "If the population has special needs, were measures implemented to address them?",
          questionCodeSystem: "Custom",
          questionCode: "UEM 7.3",
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
          dataType: "BL",
        },
        {
          question:
            "Is proxy access available (spouses, caregivers, 3rd parties)?",
          questionCodeSystem: "Custom",
          questionCode: "UEM 7.4",
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
          dataType: "BL",
        },
        {
          question:
            "For section 508/accessibility what is the W3 conformance level? (A=1, AA=2, AAA=3)",
          questionCodeSystem: "Custom",
          questionCode: "UEM 7.5",
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
          dataType: "INT",
        },
      ],
    },
    {
      question: "Support and Feedback",
      questionCode: "H8",
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
      items: [
        {
          question: "There is a means to provide feedback on the experience",
          questionCodeSystem: "Custom",
          questionCode: "UEM 8.1",
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
          question:
            "There is a simple and fast way to get help with the application",
          questionCodeSystem: "Custom",
          questionCode: "UEM 8.2",
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
          question:
            "Do you provide human support in addition to digital support?",
          questionCodeSystem: "Custom",
          questionCode: "UEM 8.3",
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
          dataType: "BL",
        },
        {
          question:
            "Is there an integrated feedback mechanism in your solution that is evaluated on an ongoing basis",
          questionCodeSystem: "Custom",
          questionCode: "UEM 8.4",
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
          dataType: "BL",
        },
        {
          question:
            "Upon imminent or actual system or user error there is clear communication and graceful recovery",
          questionCodeSystem: "Custom",
          questionCode: "UEM 8.5",
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
          question:
            "The system provides informative feedback to the user about actions they are about to take or have taken",
          questionCodeSystem: "Custom",
          questionCode: "UEM 8.6",
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
