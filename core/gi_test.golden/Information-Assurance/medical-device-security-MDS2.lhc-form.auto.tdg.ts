// Generated from medical-device-security-MDS2.lhc-form.json. DO NOT EDIT.

import { nihLhcForms as lforms, typedDataGen } from "../../deps.ts";

export const form: lforms.NihLhcForm = {
  code: "Q-Title",
  name: "Medical Device Security (MDS2)",
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
      question: "Device Description",
      header: true,
      hideUnits: true,
      questionCode: "Q0022",
      localQuestionCode: "Q0022",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question: "Device Category",
          hideUnits: true,
          questionCode: "Q0022-01",
          localQuestionCode: "Q0022-01",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question: "Manufacturer Name",
          hideUnits: true,
          questionCode: "Q0022-02",
          localQuestionCode: "Q0022-02",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question: "Document ID",
          hideUnits: true,
          questionCode: "Q0022-03",
          localQuestionCode: "Q0022-03",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question: "Document Release Date",
          hideUnits: true,
          questionCode: "Q0022-04",
          localQuestionCode: "Q0022-04",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question: "Device Model",
          hideUnits: true,
          questionCode: "Q0022-05",
          localQuestionCode: "Q0022-05",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question: "Software Revision",
          hideUnits: true,
          questionCode: "Q0022-06",
          localQuestionCode: "Q0022-06",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question: "Software Release Date",
          hideUnits: true,
          questionCode: "Q0022-07",
          localQuestionCode: "Q0022-07",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question: "Company Name",
          hideUnits: true,
          questionCode: "Q0022-08",
          localQuestionCode: "Q0022-08",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question: "Representative Name / Position",
          hideUnits: true,
          questionCode: "Q0022-09",
          localQuestionCode: "Q0022-09",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question: "Manufacturer Contact Information",
          hideUnits: true,
          questionCode: "Q0022-10",
          localQuestionCode: "Q0022-10",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question: "Intended user of device in network-connected environment",
          hideUnits: true,
          questionCode: "Q0022-11",
          localQuestionCode: "Q0022-11",
          units: null,
          dataType: "TX",
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
      question: "Management of Private Data",
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
            "A Can this device display, transmit or maintain Private Data (including electronic Protected Health Information [ePHI])?",
          hideUnits: true,
          questionCode: "Q003-01",
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
              text: "Not Applicable",
              code: "NA",
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
            "B Types of Private Data elements that can be maintained by the device:",
          questionCode: "Q003-02",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-02",
          dataType: "CNE",
          answers: [
            {
              text:
                "B.1 Demographic (e.g., name, address, location, unique identification number)?",
              code: "Demographic",
            },
            {
              text:
                "B.2 Medical record (e.g., medical record #, account #, test or treatment date, device identification number)?",
              code: "Medical-record",
            },
            {
              text:
                "B.3 Diagnostic/therapeutic (e.g., photo/radiograph, test results, or physiologic data with identifying characteristics)?",
              code: "Diagnostic/therapeutic",
            },
            {
              text:
                "B.4 Open, unstructured text entered by device user/operator?",
              code: "Open",
            },
            {
              text: "B.5 Biometric data",
              code: "Patient-biometric-data",
            },
            {
              text: "B.6 Personal financial information?",
              code: "Medical-record",
            },
          ],
          answerCardinality: {
            min: 1,
            max: "*",
          },
        },
        {
          question: "C Maintaining Private Data - Can the device:",
          questionCode: "Q003-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-03",
          dataType: "CNE",
          answers: [
            {
              text:
                "C.1 Maintain private data temporarily in volatile memory (i.e., until cleared by power-off or reset)?",
              code: "Maintain-Private-Data-temporarily",
            },
            {
              text: "C.2 Store private data persistently on local media?",
              code: "Store-Private-Data",
            },
            {
              text: "C.3 Import/export private data with other systems?",
              code: "Import/export",
            },
            {
              text:
                "C.4 Maintain private data during power service interruptions?",
              code: "Maintain-Private-Data",
            },
          ],
          answerCardinality: {
            min: 1,
            max: "*",
          },
        },
        {
          question:
            "D Mechanisms used for the transmitting, importing/exporting of Private Data - Can the device:",
          questionCode: "Q003-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-04",
          dataType: "CNE",
          answers: [
            {
              text: "D.1 Display Private Data (e.g., video display, etc.)?",
              code: "display-private-data",
            },
            {
              text:
                "D.2 Generate hardcopy reports or images containing Private Data?",
              code: "generate-hardcopy",
            },
            {
              text:
                "D.3 Retrieve Private Data from or record Private Data to removable media (e.g., disk, DVD, CDROM, tape, CF/SD card, memory stick, etc.)?",
              code: "Retrieve-Private-Data",
            },
            {
              text:
                "D.4 Transmit/receive or import/export Private Data via dedicated cable connection (e.g., IEEE 1073, serial port, USB, FireWire, etc.)?",
              code: "Transmit/receive-import/export",
            },
            {
              text:
                "D.5 Transmit/receive Private Data via a wired network connection (e.g., LAN, WAN, VPN, intranet, Internet, etc.)?",
              code: "Transmit/receive-wired-network-connection",
            },
            {
              text:
                "D.6 Transmit/receive Private Data via an integrated wireless network connection (e.g. WiFi, Bluetooth, infrared, etc.)?",
              code: "Transmit/receive-integrated-wireless-network-connection",
            },
            {
              text: "D.7 Import Private Data via scanning?",
              code: "import-private-data-scanning",
            },
            {
              text: "D.8 Other",
              code: "other",
            },
          ],
          answerCardinality: {
            min: 1,
            max: "*",
          },
          items: [
            {
              question: "Other",
              hideUnits: true,
              questionCode: "Q003-05",
              localQuestionCode: "Q003-05",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              skipLogic: {
                conditions: [
                  {
                    source: "Q003-04",
                    trigger: {
                      code: "other",
                    },
                  },
                ],
                action: "show",
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
        {
          question: "Management of Private Data notes: ",
          hideUnits: true,
          questionCode: "Q003-05",
          localQuestionCode: "Q003-05",
          units: null,
          dataType: "TX",
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
      question: "SECURITY CAPABILITIES",
      header: true,
      hideUnits: true,
      questionCode: "Q004-TITLE",
      localQuestionCode: "Q004-TITLE",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question: "1 AUTOMATIC LOGOFF (ALOF)",
          header: true,
          hideUnits: true,
          questionCode: "Q005",
          localQuestionCode: "Q005",
          units: null,
          codingInstructions:
            "The device's ability to prevent access and misuse by unauthorized users if device is left idle for a period of time.",
          copyrightNotice: null,
          items: [
            {
              question:
                "1-1 Can the device be configured to force reauthorization of logged-in user(s) after a predetermined length of inactivity (e.g., auto logoff, session lock, password protected screen saver)?",
              hideUnits: true,
              questionCode: "Q005-01",
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
                {
                  text: "Not Applicable",
                  code: "NA",
                },
              ],
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question:
                    "1-1.1 Is the length of inactivity time before auto-logoff / screen lock user or administrator configurable? (indicate time (fixed or configurable range) in notes)",
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
                    {
                      text: "Not Applicable",
                      code: "NA",
                    },
                  ],
                  answerCardinality: {
                    min: 1,
                    max: 1,
                  },
                },
                {
                  question:
                    "1-1.2Can auto-logoff/screen lock be manually invoked (e.g., via a shortcut key or proximity sensor, etc.) by the user?",
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
                    {
                      text: "Not Applicable",
                      code: "NA",
                    },
                  ],
                  answerCardinality: {
                    min: 1,
                    max: 1,
                  },
                  items: [
                    {
                      question: "Other",
                      hideUnits: true,
                      questionCode: "Q005-03-01",
                      localQuestionCode: "Q005-03-01",
                      units: null,
                      dataType: "TX",
                      skipLogic: {
                        conditions: [
                          {
                            source: "Q005-03",
                            trigger: {
                              code: "Other",
                            },
                          },
                        ],
                        action: "show",
                      },
                      questionCardinality: {
                        min: 1,
                        max: 1,
                      },
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                  ],
                },
              ],
            },
            {
              question: "ALOF notes: ",
              hideUnits: true,
              questionCode: "Q005-05",
              localQuestionCode: "Q005-05",
              units: null,
              dataType: "TX",
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
          question: "2 AUDIT CONTROLS (AUDT) ",
          header: true,
          hideUnits: true,
          questionCode: "Q004",
          localQuestionCode: "Q004",
          units: null,
          codingInstructions:
            "The ability to reliably audit activity on the device.",
          copyrightNotice: null,
          items: [
            {
              question: "2-1 Can the medical device create an audit trail?",
              hideUnits: true,
              questionCode: "Q004-01",
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
                {
                  text: "Not Applicable",
                  code: "NA",
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
                "2-2 Indicate which of the following events are recorded in the audit log:",
              questionCode: "Q004-02",
              hideUnits: false,
              noEmptyValue: true,
              localQuestionCode: "Q004-02",
              dataType: "CNE",
              answers: [
                {
                  text: "2-2.1 Login/logout",
                  code: "login/logout",
                },
                {
                  text: "2-2.2 Display/presentation of data",
                  code: "display/presentation",
                },
                {
                  text: "2-2.3 Creation/modification/deletion of data",
                  code: "creation/modification/deletion",
                },
                {
                  text: "2-2.4 Import/export of data from removable media",
                  code: "import/export",
                },
                {
                  text:
                    "2-2.5 Receipt/transmission of data from/to external (e.g. network) connection",
                  code: "receipt/transmission",
                },
                {
                  text: "2-2.5.1 Remote service activity",
                  code: "remote-service",
                },
                {
                  text: "2-2.6 Other events?",
                  code: "other",
                },
              ],
              answerCardinality: {
                min: 1,
                max: "*",
              },
              items: [
                {
                  question: "Other",
                  hideUnits: true,
                  questionCode: "Q004-02-01",
                  localQuestionCode: "Q004-02-01",
                  units: null,
                  dataType: "ST",
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q004-02",
                        trigger: {
                          code: "other",
                        },
                      },
                    ],
                    action: "show",
                  },
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
              question:
                "2-3 Indicate what information is used to identify individual events recorded in the audit log:",
              questionCode: "Q004-03",
              hideUnits: false,
              noEmptyValue: true,
              localQuestionCode: "Q004-03",
              dataType: "CNE",
              answers: [
                {
                  text: "2-3.1 user ID",
                  code: "user-ID",
                },
                {
                  text: "2-3.2 Date/Time",
                  code: "Date/Time",
                },
                {
                  text: "2-3.3 Other",
                  code: "other",
                },
              ],
              answerCardinality: {
                min: 1,
                max: "*",
              },
              items: [
                {
                  question: "Other",
                  hideUnits: true,
                  questionCode: "Q004-03-01",
                  localQuestionCode: "Q004-03-01",
                  units: null,
                  dataType: "ST",
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q004-03",
                        trigger: {
                          code: "other",
                        },
                      },
                    ],
                    action: "show",
                  },
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
              question: "AUDT notes: ",
              hideUnits: true,
              questionCode: "Q004-05",
              localQuestionCode: "Q004-05",
              units: null,
              dataType: "TX",
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
          question: "3 AUTHORIZATION (AUTH) ",
          header: true,
          hideUnits: true,
          questionCode: "Q007",
          localQuestionCode: "Q007",
          units: null,
          codingInstructions:
            "The ability of the device to determine the authorization of users.",
          copyrightNotice: null,
          items: [
            {
              question:
                "3-1 Can the device prevent access to unauthorized users through user login requirements or other mechanism?",
              hideUnits: true,
              questionCode: "Q007-01",
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
                {
                  text: "Not Applicable",
                  code: "NA",
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
                "3-2 Can users be assigned different privilege levels within an application based on 'roles' (e.g., guests, regular users, power users, administrators, etc.)?",
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
                  text: "Not Applicable",
                  code: "NA",
                },
              ],
              answerCardinality: {
                min: 1,
                max: 1,
              },
            },
            {
              question:
                "3-3 Can the device owner/operator obtain unrestricted administrative privileges (e.g., access operating system or application via local root or admin account)?",
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
                {
                  text: "Not Applicable",
                  code: "NA",
                },
              ],
              answerCardinality: {
                min: 1,
                max: 1,
              },
            },
            {
              question: "AUTH notes: ",
              hideUnits: true,
              questionCode: "Q007-05",
              localQuestionCode: "Q007-05",
              units: null,
              dataType: "TX",
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
          question: "4 CONFIGURATION OF SECURITY FEATURES (CNFS)",
          header: true,
          hideUnits: true,
          questionCode: "Q0025",
          localQuestionCode: "Q0025",
          units: null,
          codingInstructions:
            "The ability to configure/re-configure device security capabilities to meet users' needs.",
          copyrightNotice: null,
          items: [
            {
              question:
                "4-1 Can the device owner/operator reconfigure product security capabilities?",
              hideUnits: true,
              questionCode: "Q0025-01",
              localQuestionCode: "Q0025-01",
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
                  text: "Not Applicable",
                  code: "NA",
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
              question: "CNFS notes: ",
              hideUnits: true,
              questionCode: "Q0025-05",
              localQuestionCode: "Q0025-05",
              units: null,
              dataType: "TX",
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
          question: "5 CYBER SECURITY PRODUCT UPGRADES (CSUP) ",
          header: true,
          hideUnits: true,
          questionCode: "Q008",
          localQuestionCode: "Q008",
          units: null,
          codingInstructions:
            "The ability of on-site service staff, remote service staff, or authorized customer staff to install/upgrade device's security patches.",
          copyrightNotice: null,
          items: [
            {
              question:
                "5-1 Can relevant OS and device security patches be applied to the device as they become available?",
              hideUnits: true,
              questionCode: "Q008-01",
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
                {
                  text: "Not Applicable",
                  code: "NA",
                },
              ],
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question:
                    "5-1.1 Can security patches or other software be installed remotely?",
                  hideUnits: true,
                  questionCode: "Q008-01",
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
                    {
                      text: "Not Applicable",
                      code: "NA",
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
              question: "CSUP notes: ",
              hideUnits: true,
              questionCode: "Q008-05",
              localQuestionCode: "Q008-05",
              units: null,
              dataType: "TX",
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
          question: "6 HEALTH DATA DE-IDENTIFICATION (DIDT)",
          header: true,
          hideUnits: true,
          questionCode: "Q0026",
          localQuestionCode: "Q0026",
          units: null,
          codingInstructions:
            "The ability of the device to directly remove information that allows identification of a person.",
          copyrightNotice: null,
          items: [
            {
              question:
                "6-1 Does the device provide an integral capability to de-identify private data?",
              hideUnits: true,
              questionCode: "Q0026-01",
              localQuestionCode: "Q0026-01",
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
                  text: "Not Applicable",
                  code: "NA",
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
              question: "DIDT notes: ",
              hideUnits: true,
              questionCode: "Q0026-05",
              localQuestionCode: "Q0026-05",
              units: null,
              dataType: "TX",
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
          question: "7 DATA BACKUP AND DISASTER RECOVERY (DTBK)",
          header: true,
          hideUnits: true,
          questionCode: "Q0027",
          localQuestionCode: "Q0027",
          units: null,
          codingInstructions:
            "The ability to recover after damage or destruction of device data, hardware, or software.",
          copyrightNotice: null,
          items: [
            {
              question:
                "7-1 Does the device have an integral data backup capability (i.e., backup to remote storage or removable media such as tape, disk)?",
              hideUnits: true,
              questionCode: "Q0027-01",
              localQuestionCode: "Q0027-01",
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
                  text: "Not Applicable",
                  code: "NA",
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
              question: "DTBK notes: ",
              hideUnits: true,
              questionCode: "Q0027-05",
              localQuestionCode: "Q0027-05",
              units: null,
              dataType: "TX",
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
          question: "8 EMERGENCY ACCESS (EMRG)",
          header: true,
          hideUnits: true,
          questionCode: "Q0028",
          localQuestionCode: "Q0028",
          units: null,
          codingInstructions:
            "The ability of device users to access private data in case of an emergency situation that requires immediate access to stored private data.",
          copyrightNotice: null,
          items: [
            {
              question:
                "8-1 Does the device incorporate an emergency access ('break-glass') feature?",
              hideUnits: true,
              questionCode: "Q0028-01",
              localQuestionCode: "Q0028-01",
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
                  text: "Not Applicable",
                  code: "NA",
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
              question: "EMRG notes: ",
              hideUnits: true,
              questionCode: "Q0028-05",
              localQuestionCode: "Q0028-05",
              units: null,
              dataType: "TX",
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
          question: "9 HEALTH DATA INTEGRITY AND AUTHENTICITY (IGAU)",
          questionCode: "Q0014",
          header: true,
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0014",
          codingInstructions:
            "How the device ensures that data processed by the device has not been altered or destroyed in an unauthorized manner and is from the originator.",
          items: [
            {
              question:
                "9-1 Does the device ensure the integrity of stored data with implicit or explicit error detection/correction technology?",
              hideUnits: true,
              questionCode: "Q0014-01",
              localQuestionCode: "Q0014-01",
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
                  text: "Not Applicable",
                  code: "NA",
                },
              ],
              questionCardinality: {
                min: 1,
                max: 1,
              },
              copyrightNotice: null,
            },
            {
              question: "IGAU notes: ",
              hideUnits: true,
              questionCode: "Q0014-05",
              localQuestionCode: "Q0014-05",
              units: null,
              dataType: "TX",
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
          question: "10 MALWARE DETECTION/PROTECTION (MLDP)",
          questionCode: "Q0029",
          header: true,
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0029",
          codingInstructions:
            "The ability of the device to effectively prevent, detect and remove malicious software (malware).",
          items: [
            {
              question:
                "10-1 Does the device support the use of anti-malware software (or other anti-malware mechanism)?",
              hideUnits: true,
              questionCode: "Q0029-01",
              localQuestionCode: "Q0029-01",
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
                  text: "Not Applicable",
                  code: "NA",
                },
              ],
              questionCardinality: {
                min: 1,
                max: 1,
              },
              copyrightNotice: null,
              items: [
                {
                  question:
                    "10-1.1 Can the user independently re-configure anti-malware settings?",
                  hideUnits: true,
                  questionCode: "Q0029-01-01",
                  localQuestionCode: "Q0029-01-01",
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
                      text: "Not Applicable",
                      code: "NA",
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
                    "10-1.2 Does notification of malware detection occur in the device user interface?",
                  hideUnits: true,
                  questionCode: "Q0029-01-02",
                  localQuestionCode: "Q0029-01-02",
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
                      text: "Not Applicable",
                      code: "NA",
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
                    "10-1.3 Can only manufacturer-authorized persons repair systems when malware has been detected?",
                  hideUnits: true,
                  questionCode: "Q0029-01-03",
                  localQuestionCode: "Q0029-01-03",
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
                      text: "Not Applicable",
                      code: "NA",
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
              question:
                "10-2 Can the device owner install or update anti-virus software?",
              hideUnits: true,
              questionCode: "Q0029-02",
              localQuestionCode: "Q0029-02",
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
                  text: "Not Applicable",
                  code: "NA",
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
                "10-3 Can the device owner/operator (technically/physically) update virus definitions on manufacturer-installed anti-virus software?",
              hideUnits: true,
              questionCode: "Q0029-03",
              localQuestionCode: "Q0029-03",
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
                  text: "Not Applicable",
                  code: "NA",
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
              question: "MLDP notes: ",
              hideUnits: true,
              questionCode: "Q0029-05",
              localQuestionCode: "Q0029-05",
              units: null,
              dataType: "TX",
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
          question: "11 NODE AUTHENTICATION (NAUT)",
          questionCode: "Q0015",
          header: true,
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0015",
          codingInstructions:
            "The ability of the device to authenticate communication partners/nodes.",
          items: [
            {
              question:
                "11-1 Does the device provide/support any means of node authentication that assures both the sender and the recipient of data are known to each other and are authorized to receive transferred information?",
              hideUnits: true,
              questionCode: "Q0015-01",
              localQuestionCode: "Q0015-01",
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
                  text: "Not Applicable",
                  code: "NA",
                },
              ],
              questionCardinality: {
                min: 1,
                max: 1,
              },
              copyrightNotice: null,
            },
            {
              question: "NAUT notes: ",
              hideUnits: true,
              questionCode: "Q0015-05",
              localQuestionCode: "Q0015-05",
              units: null,
              dataType: "TX",
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
          question: "12 PERSON AUTHENTICATION (PAUT)",
          questionCode: "Q0031",
          header: true,
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0031",
          codingInstructions: "Ability of the device to authenticate users.",
          items: [
            {
              question:
                "12-1 Does the device support user/operator-specific username(s) and password(s) for at least one user?",
              hideUnits: true,
              questionCode: "Q0031-01",
              localQuestionCode: "Q0031-01",
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
                  text: "Not Applicable",
                  code: "NA",
                },
              ],
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question:
                    "12-1.1 Does the device support unique user/operator-specific IDs and passwords for multiple users?",
                  hideUnits: true,
                  questionCode: "Q0031-01-01",
                  localQuestionCode: "Q0031-01-01",
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
                      text: "Not Applicable",
                      code: "NA",
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
              question:
                "12-2 Can the device be configured to authenticate users through an external authentication service (e.g., MS Active Directory, NDS, LDAP, etc.)?",
              hideUnits: true,
              questionCode: "Q0031-02",
              localQuestionCode: "Q0031-02",
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
                  text: "Not Applicable",
                  code: "NA",
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
                "12-3 Can the device be configured to lock out a user after a certain number of unsuccessful logon attempts?",
              hideUnits: true,
              questionCode: "Q0031-03",
              localQuestionCode: "Q0031-03",
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
                  text: "Not Applicable",
                  code: "NA",
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
                "12-4 Can default passwords be changed at/prior to installation?",
              hideUnits: true,
              questionCode: "Q0031-04",
              localQuestionCode: "Q0031-04",
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
                  text: "Not Applicable",
                  code: "NA",
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
              question: "12-5 Are any shared user IDs used in this system?",
              hideUnits: true,
              questionCode: "Q0031-05",
              localQuestionCode: "Q0031-05",
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
                  text: "Not Applicable",
                  code: "NA",
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
                "12-6 Can the device be configured to enforce creation of user account passwords that meet established complexity rules?",
              hideUnits: true,
              questionCode: "Q0031-06",
              localQuestionCode: "Q0031-06",
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
                  text: "Not Applicable",
                  code: "NA",
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
                "12-7 Can the device be configured so that account passwords expire periodically?",
              hideUnits: true,
              questionCode: "Q0031-07",
              localQuestionCode: "Q0031-07",
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
                  text: "Not Applicable",
                  code: "NA",
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
              question: "PAUT notes: ",
              hideUnits: true,
              questionCode: "Q0031-08",
              localQuestionCode: "Q0031-08",
              units: null,
              dataType: "TX",
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
          question: "13 PHYSICAL LOCKS (PLOK)",
          questionCode: "Q0032",
          header: true,
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0032",
          codingInstructions:
            "Physical locks can prevent unauthorized users with physical access to the device from compromising the integrity and confidentiality of private data stored on the device or on removable media.",
          items: [
            {
              question:
                "13-1 Are all device components maintaining private data (other than removable media) physically secure (i.e., cannot remove without tools)?",
              hideUnits: true,
              questionCode: "Q0032-01",
              localQuestionCode: "Q0032-01",
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
                  text: "Not Applicable",
                  code: "NA",
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
              question: "PLOK notes: ",
              hideUnits: true,
              questionCode: "Q0032-08",
              localQuestionCode: "Q0032-08",
              units: null,
              dataType: "TX",
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
          question:
            "14 ROADMAP FOR THIRD PARTY COMPONENTS IN DEVICE LIFE CYCLE (RDMP)",
          questionCode: "Q0033",
          header: true,
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0033",
          codingInstructions:
            "Manufacturer's plans for security support of 3rd party components within device life cycle.",
          items: [
            {
              question:
                "14-1 In the notes section, list the provided or required (separately purchased and/or delivered) operating system(s) - including version number(s).",
              hideUnits: true,
              questionCode: "Q0033-01",
              localQuestionCode: "Q0033-01",
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
                  text: "Not Applicable",
                  code: "NA",
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
                "14-2 Is a list of other third party applications provided by the manufacturer available?",
              hideUnits: true,
              questionCode: "Q0033-02",
              localQuestionCode: "Q0033-02",
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
                  text: "Not Applicable",
                  code: "NA",
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
              question: "RDMP notes: ",
              hideUnits: true,
              questionCode: "Q0033-08",
              localQuestionCode: "Q0033-08",
              units: null,
              dataType: "TX",
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
          question: "15 SYSTEM AND APPLICATION HARDENING (SAHD)",
          questionCode: "Q0035",
          header: true,
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0035",
          codingInstructions:
            "The device's resistance to cyber attacks and malware.",
          items: [
            {
              question:
                "15-1 Does the device employ any hardening measures? Please indicate in the notes the level of conformance to any industry-recognized hardening standards.",
              hideUnits: true,
              questionCode: "Q0035-01",
              localQuestionCode: "Q0035-01",
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
                  text: "Not Applicable",
                  code: "NA",
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
                "15-2 Does the device employ any mechanism (e.g., release-specific hash key, checksums, etc.) to ensure the installed program/update is the manufacturer-authorized program or software update?",
              hideUnits: true,
              questionCode: "Q0035-02",
              localQuestionCode: "Q0035-02",
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
                  text: "Not Applicable",
                  code: "NA",
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
                "15-3 Does the device have external communication capability (e.g., network, modem, etc.)?",
              hideUnits: true,
              questionCode: "Q0035-03",
              localQuestionCode: "Q0035-03",
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
                  text: "Not Applicable",
                  code: "NA",
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
                "15-4 Does the file system allow the implementation of file-level access controls (e.g., New Technology File System (NTFS) for MS Windows platforms)?",
              hideUnits: true,
              questionCode: "Q0035-04",
              localQuestionCode: "Q0035-04",
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
                  text: "Not Applicable",
                  code: "NA",
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
                "15-5 Are all accounts which are not required for the intended use of the device disabled or deleted, for both users and applications?",
              hideUnits: true,
              questionCode: "Q0035-05",
              localQuestionCode: "Q0035-05",
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
                  text: "Not Applicable",
                  code: "NA",
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
                "15-6 Are all shared resources (e.g., file shares) which are not required for the intended use of the device, disabled?",
              hideUnits: true,
              questionCode: "Q0035-06",
              localQuestionCode: "Q0035-06",
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
                  text: "Not Applicable",
                  code: "NA",
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
                "15-7 Are all communication ports which are not required for the intended use of the device closed/disabled?",
              hideUnits: true,
              questionCode: "Q0035-07",
              localQuestionCode: "Q0035-07",
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
                  text: "Not Applicable",
                  code: "NA",
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
                "15-8 Are all services (e.g., telnet, file transfer protocol [FTP], internet information server [IIS], etc.), which are not required for the intended use of the device deleted/disabled?",
              hideUnits: true,
              questionCode: "Q0035-08",
              localQuestionCode: "Q0035-08",
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
                  text: "Not Applicable",
                  code: "NA",
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
                "15-9 Are all applications (COTS applications as well as OS-included applications, e.g., MS Internet Explorer, etc.) which are not required for the intended use of the device deleted/disabled?",
              hideUnits: true,
              questionCode: "Q0035-09",
              localQuestionCode: "Q0035-09",
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
                  text: "Not Applicable",
                  code: "NA",
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
                "15-10 Can the device boot from uncontrolled or removable media (i.e., a source other than an internal drive or memory component)?",
              hideUnits: true,
              questionCode: "Q0035-10",
              localQuestionCode: "Q0035-10",
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
                  text: "Not Applicable",
                  code: "NA",
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
                "15-11 Can software or hardware not authorized by the device manufacturer be installed on the device without the use of tools?",
              hideUnits: true,
              questionCode: "Q0035-11",
              localQuestionCode: "Q0035-11",
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
                  text: "Not Applicable",
                  code: "NA",
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
              question: "SAHD notes: ",
              hideUnits: true,
              questionCode: "Q0035-12",
              localQuestionCode: "Q0035-12",
              units: null,
              dataType: "TX",
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
          question: "16 SECURITY GUIDANCE (SGUD)",
          questionCode: "Q0036",
          header: true,
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0036",
          codingInstructions:
            "The availability of security guidance for operator and administrator of the system and manufacturer sales and service.",
          items: [
            {
              question:
                "16-1 Are security-related features documented for the device user?",
              hideUnits: true,
              questionCode: "Q0036-01",
              localQuestionCode: "Q0036-01",
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
                  text: "Not Applicable",
                  code: "NA",
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
                "16-2 Are instructions available for device/media sanitization (i.e., instructions for how to achieve the permanent deletion of personal or other sensitive data)?",
              hideUnits: true,
              questionCode: "Q0036-02",
              localQuestionCode: "Q0036-02",
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
                  text: "Not Applicable",
                  code: "NA",
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
              question: "SGUD notes: ",
              hideUnits: true,
              questionCode: "Q0036-12",
              localQuestionCode: "Q0036-12",
              units: null,
              dataType: "TX",
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
          question: "17 HEALTH DATA STORAGE CONFIDENTIALITY (STCF)",
          questionCode: "Q0037",
          header: true,
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0037",
          codingInstructions:
            "The ability of the device to ensure unauthorized access does not compromise the integrity and confidentiality of private data stored on device or removable media.",
          items: [
            {
              question: "17-1 Can the device encrypt data at rest?",
              hideUnits: true,
              questionCode: "Q0037-01",
              localQuestionCode: "Q0037-01",
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
                  text: "Not Applicable",
                  code: "NA",
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
              question: "STCF notes: ",
              hideUnits: true,
              questionCode: "Q0037-12",
              localQuestionCode: "Q0037-12",
              units: null,
              dataType: "TX",
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
          question: "18 TRANSMISSION CONFIDENTIALITY (TXCF)",
          questionCode: "Q0038",
          header: true,
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0038",
          codingInstructions:
            "The ability of the device to ensure the confidentiality of transmitted private data.",
          items: [
            {
              question:
                "18-1 Can private data be transmitted only via a point-to-point dedicated cable?",
              hideUnits: true,
              questionCode: "Q0038-01",
              localQuestionCode: "Q0038-01",
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
                  text: "Not Applicable",
                  code: "NA",
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
                "18-2 Is private data encrypted prior to transmission via a network or removable media? (If yes, indicate in the notes which encryption standard is implemented.)",
              hideUnits: true,
              questionCode: "Q0038-02",
              localQuestionCode: "Q0038-02",
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
                  text: "Not Applicable",
                  code: "NA",
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
                "18-3 Is private data transmission restricted to a fixed list of network destinations?",
              hideUnits: true,
              questionCode: "Q0038-03",
              localQuestionCode: "Q0038-03",
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
                  text: "Not Applicable",
                  code: "NA",
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
              question: "TXCF notes: ",
              hideUnits: true,
              questionCode: "Q0038-12",
              localQuestionCode: "Q0038-12",
              units: null,
              dataType: "TX",
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
          question: "19 TRANSMISSION INTEGRITY (TXIG)",
          questionCode: "Q0039",
          header: true,
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0039",
          codingInstructions:
            "The ability of the device to ensure the integrity of transmitted private data.",
          items: [
            {
              question:
                "19-1 Does the device support any mechanism intended to ensure data is not modified during transmission? (If yes, describe in the notes section how this is achieved.)",
              hideUnits: true,
              questionCode: "Q0039-01",
              localQuestionCode: "Q0039-01",
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
                  text: "Not Applicable",
                  code: "NA",
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
              question: "TXIG notes: ",
              hideUnits: true,
              questionCode: "Q0039-12",
              localQuestionCode: "Q0039-12",
              units: null,
              dataType: "TX",
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
          question: "20 OTHER SECURITY CONSIDERATIONS (OTHR)",
          questionCode: "Q0040",
          header: true,
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0040",
          codingInstructions:
            "Additional security considerations/notes regarding medical device security.",
          items: [
            {
              question: "20-1 Can the device be serviced remotely?",
              hideUnits: true,
              questionCode: "Q0040-01",
              localQuestionCode: "Q0040-01",
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
                  text: "Not Applicable",
                  code: "NA",
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
                "20-2 Can the device restrict remote access to/from specified devices or users or network locations (e.g., specific IP addresses)?",
              hideUnits: true,
              questionCode: "Q0040-02",
              localQuestionCode: "Q0040-02",
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
                  text: "Not Applicable",
                  code: "NA",
                },
              ],
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question:
                    "20-2.1 Can the device be configured to require the local user to accept or initiate remote access?",
                  hideUnits: true,
                  questionCode: "Q0040-02-01",
                  localQuestionCode: "Q0040-02-01",
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
                      text: "Not Applicable",
                      code: "NA",
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
              question: "OTHR notes: ",
              hideUnits: true,
              questionCode: "Q0040-12",
              localQuestionCode: "Q0040-12",
              units: null,
              dataType: "TX",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
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
