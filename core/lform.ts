export interface LhcForm {
  type?: string;
  code?: string;
  name?: string;
  dataType?: FormDataType;
  header?: boolean;
  units?: FormUnits | null;
  codeSystem?: FormCodeSystem;
  codingInstructions?: string;
  copyrightNotice?: string | null;
  templateOptions?: FormTemplateOptions;
  items?: FormItem[];
  lformsVersion?: string;
}

export enum FormDataType {
  Bl = "BL",
  Cne = "CNE",
  Cwe = "CWE",
  Dt = "DT",
  Dtm = "DTM",
  Empty = "",
  Int = "INT",
  Nr = "NR",
  Qty = "QTY",
  Real = "REAL",
  Section = "SECTION",
  St = "ST",
  Title = "TITLE",
  Tm = "TM",
  Tx = "TX",
}

export interface FormUnits {
  name: string;
  default?: boolean;
  normalRange?: null;
  absoluteRange?: null;
}

export enum FormCodeSystem {
  Loinc = "LOINC",
}

export interface FormItem {
  questionCode?: string;
  question?: string;
  dataType?: string;
  displayControl?: DisplayControl;
  units?: Unit[] | string | null;
  linkId?: string;
  questionCodeSystem?: string;
  header?: boolean;
  codingInstructions?: null | string;
  copyrightNotice?: string | null;
  questionCardinality?: Cardinality;
  answerCardinality?: Cardinality;
  answers?: ItemAnswer[];
  skipLogic?: SkipLogic;
  editable?: null | string;
  defaultAnswer?: DefaultAnswerClass | string;
  calculationMethod?: null;
  items?: FormItem[];
  codingInstructionsFormat?: string;
  answerCodeSystem?: string;
  layout?: string;
  dataControl?: DataControl[];
  value?: ValueElement;
  prefix?: string;
  extensions?: Record<string, unknown>;
  hideUnits?: boolean;
  noEmptyValue?: boolean;
  localQuestionCode?: string;
}

export interface Cardinality {
  min: string;
  max: string;
}

export interface ItemAnswer {
  code: string;
  text: string;
  other?: boolean;
  label?: string;
  score?: number;
  codeSystem?: string;
  questionCardinality?: Cardinality;
  parentAnswerCode?: string;
}

export interface DataControl {
  source: Source;
  construction: string;
  dataFormat: DataFormatElement | string;
  onAttribute: string;
}

export interface Source {
  sourceType?: string;
  sourceLinkId: string;
}

export interface DefaultAnswerClass {
  text: string;
}

export interface DisplayControl {
  viewMode?: string;
  css?: CSS[];
  answerLayout?: AnswerLayout;
}

export interface AnswerLayout {
  type: string;
  columns: string;
}

export interface CSS {
  name: Name;
  value: string;
}

export enum Name {
  Color = "color",
  MinWidth = "min-width",
  Width = "width",
}

export interface ValueElement {
  text: string;
  code: string;
  other?: boolean;
}

export interface DataFormatElement {
  code: string;
  text: string;
}

export interface FormHeaderItemDisplayControl {
  colCSS: CSS[];
}

export interface SkipLogic {
  conditions: Condition[];
  action: "show";
  logic?: string;
}

export interface Condition {
  source: string;
  trigger: Trigger;
}

export interface Trigger {
  code?: string;
  value?: NotEqual | number;
  exists?: boolean;
  notEqual?: NotEqual;
  minInclusive?: number;
  maxInclusive?: number;
}

export interface NotEqual {
  code: string;
  system?: string;
}

export interface Unit {
  name: string;
  default?: boolean;
}

export interface FormTemplateOptions {
  showFormHeader?: boolean;
  showFormOptionPanel?: boolean;
  formHeaderItems?: FormHeaderItem[];
  hideFormControls?: boolean;
  hideUnits?: boolean;
  obrHeader?: boolean;
  hideHeader?: boolean;
  allowHTMLInInstructions?: boolean;
  allowMultipleEmptyRepeatingItems?: boolean;
  showColumnHeaders?: boolean;
}

export interface FormHeaderItem {
  question: string;
  questionCode: string;
  dataType: string;
  answers: DataFormatElement[] | string;
  answerCardinality?: Cardinality;
  displayControl: FormHeaderItemDisplayControl;
  defaultAnswer?: string;
}
