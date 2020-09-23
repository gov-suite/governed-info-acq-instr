import { fs, nihLhcForms as lform, path, typedDataGen as tdg } from "./deps.ts";

export type URL = string;
export type FsPathOnly = string;
export type AbsoluteFsPath = FsPathOnly;
export type RelativeFsPath = FsPathOnly;
export type FsPathAndFileName = FsPathOnly & string;
export type FileExtension = string;
export type FileGlobPattern = string;
export type AbsoluteFsPathAndFileName = AbsoluteFsPath & string;

export interface Path {
  readonly isPath: true;
  readonly childPath: (path: FsPathOnly) => Path;
  readonly childFilePath: (file: PolyglotFile | string) => RelativeFsPath;
}

export interface FileSystemPath extends Path {
  readonly isFileSystemPath: true;
  readonly fsPath: FsPathOnly;
  readonly exists: boolean;
}

export function isFileSystemPath(o: unknown): o is FileSystemPath {
  return o && typeof o === "object" && "isFileSystemPath" in o;
}

export function fileSystemPath(fsPath: FsPathOnly): FileSystemPath {
  return {
    isPath: true,
    isFileSystemPath: true,
    fsPath: fsPath,
    exists: fs.existsSync(fsPath),
    childPath: (childPath: FsPathOnly): Path => {
      return guessPath(path.join(fsPath, childPath));
    },
    childFilePath: (file: PolyglotFile | string): RelativeFsPath => {
      return path.join(fsPath, typeof file === "string" ? file : file.fileName);
    },
  };
}

export function firstFileSystemPathFound(
  ...fsPaths: FsPathOnly[]
): FileSystemPath | undefined {
  for (const fspo of fsPaths) {
    const fsp = fileSystemPath(fspo);
    if (fsp.exists) return fsp;
  }
  return undefined;
}

export function guessPath(fsPath: FsPathOnly): Path {
  return fileSystemPath(fsPath);
}

export interface PolyglotFile {
  readonly fileName: AbsoluteFsPathAndFileName;
  readonly fileExtn: FileExtension;
  readonly fileExists: boolean;
  readonly relativeTo: (to: FsPathOnly) => RelativeFsPath;
}

export interface JsonFile extends PolyglotFile {
  readonly isJsonFile: true;
  readonly content: () => unknown;
}

export class TypicalJsonFile implements JsonFile {
  readonly isJsonFile = true;

  constructor(readonly fileName: string) {
  }

  content(): unknown {
    if (this.fileExists) {
      return JSON.parse(Deno.readTextFileSync(this.fileName));
    }
    return undefined;
  }

  contentDict(): Record<string, unknown> | undefined {
    const content = this.content();
    if (content) {
      return content as Record<string, unknown>;
    }
    return undefined;
  }

  get fileExists(): boolean {
    return fs.existsSync(this.fileName);
  }

  get fileExtn(): FileExtension {
    return path.extname(this.fileName);
  }

  relativeTo(to: FsPathOnly): RelativeFsPath {
    return path.relative(to, this.fileName);
  }
}

// TODO: change this back after testing
export const lformJsonModuleOptions = await lform
  .defaultLhcFormJsonModuleOptions();

export class NihLhcFormJsonFile extends TypicalJsonFile {
  readonly lhcFormJsonModule: lform.LhcFormJsonModule;

  constructor(readonly fileName: string) {
    super(fileName);
    if (!this.fileExists) {
      throw new Error(`${fileName} does not exist`);
    }
    const moduleName = tdg.forceExtension(".auto.ts", path.basename(fileName));
    this.lhcFormJsonModule = new lform.LhcFormJsonModule({
      ...lformJsonModuleOptions,
      moduleName: moduleName,
      jsonContentFileName: fileName,
    });
  }

  async validate(): Promise<Deno.Diagnostic[] | undefined> {
    return await this.lhcFormJsonModule.validate();
  }
}

export function guessPolyglotFile(fn: AbsoluteFsPathAndFileName): PolyglotFile {
  const extn = path.extname(fn);
  switch (extn) {
    case ".json":
      return new TypicalJsonFile(fn);

    default:
      return {
        fileName: fn,
        fileExists: fs.existsSync(fn),
        fileExtn: extn,
        relativeTo: (to: FsPathOnly): RelativeFsPath => {
          return path.relative(to, fn);
        },
      };
  }
}

export function guessPolyglotFiles(glob: FileGlobPattern): PolyglotFile[] {
  const results: PolyglotFile[] = [];
  for (const we of fs.expandGlobSync(glob)) {
    if (we.isFile) {
      results.push(guessPolyglotFile(we.path));
    }
  }
  return results;
}

export interface DataCollectionInstrument {
  readonly isDataCollectionInstrument: true;
}

export interface HumanSurveyInstrument extends DataCollectionInstrument {
  readonly isHumanSurveyInstrument: true;
}

export interface NihLhcFormInstrument {
  readonly isNihLhcFormInstrument: true;
  readonly nihLhcFormFile: NihLhcFormJsonFile;
  readonly nihLhcForm: lform.NihLhcForm;
  readonly respStore: NihLhcFormResponseStore;
}

export interface NihLhcFormResponseStore {
  readonly isNihLhcFormResponseStore: true;
  readonly homePath: Path;
  readonly gitBranchPattern: GitBranchPattern;
  readonly attachmentsPath: Path;
}

export interface NihLhcFormResponse {
  readonly isNihLhcFormResponse: true;
  readonly instrument: NihLhcFormInstrument;
  readonly store: NihLhcFormResponseStore;
}

export type TextTemplate = string;
export type QuestionnaireName = string;
export type GitBranchPattern = string;

export interface Questionnaire
  extends HumanSurveyInstrument, NihLhcFormInstrument {
  readonly displayName: QuestionnaireName;
  readonly shareInfo: TextTemplate;
  readonly invitationInfo: TextTemplate;
  readonly attachmentsDest?: Path;
  readonly questionnaireOrder: number;
  readonly questionnaireDisplayStatus: boolean;
}

export type CampaignName = string;

export interface Campaign {
  readonly name: CampaignName;
  readonly homePath: Path;
  readonly questionnaires: Questionnaire[];
  readonly campaignOrder: number;
  readonly campaignDisplayStatus: boolean;
}

export interface CampaignQuestionnaire extends Questionnaire {
  readonly campaign: Campaign;
}

export class TypicalCampaign implements Campaign {
  readonly questionnaires: Questionnaire[];
  readonly campaignOrder: number;
  readonly campaignDisplayStatus: boolean;

  constructor(
    readonly name: CampaignName,
    readonly homePath: Path,
    readonly init?: (self: TypicalCampaign) => void,
    readonly options?: Omit<Partial<Campaign>, "name" | "homePath">,
  ) {
    this.questionnaires = options?.questionnaires || [];
    this.campaignOrder = options?.campaignOrder || 0;
    this.campaignDisplayStatus = options?.campaignDisplayStatus ||
      true;
    if (init) init(this);
  }
}

export type TypicalQuestionnaireOptions =
  & Omit<Partial<Questionnaire>, "nihLhcFormFile">
  & {
    branchPattern?: string;
  };

export class TypicalQuestionnaire implements Questionnaire {
  readonly isDataCollectionInstrument = true;
  readonly isHumanSurveyInstrument = true;
  readonly isNihLhcFormInstrument = true;
  readonly nihLhcForm: lform.NihLhcForm;
  readonly displayName: QuestionnaireName;
  readonly shareInfo: TextTemplate;
  readonly invitationInfo: TextTemplate;
  readonly respStore: NihLhcFormResponseStore;
  readonly attachmentsDest?: Path;
  readonly questionnaireOrder: number;
  readonly questionnaireDisplayStatus: boolean;

  constructor(
    readonly nihLhcFormFile: NihLhcFormJsonFile,
    options?: TypicalQuestionnaireOptions,
  ) {
    try {
      const json = Deno.readFileSync(nihLhcFormFile.fileName);
      this.nihLhcForm = JSON.parse(new TextDecoder().decode(json));
    } catch (err) {
      console.error(`Unable to parse '${nihLhcFormFile.fileName}': ${err}`);
      this.nihLhcForm = {};
    }
    this.displayName = options?.displayName || this.nihLhcForm.name ||
      "UNTITLED";
    this.shareInfo = options?.shareInfo || "<get from LHC Form File>";
    this.invitationInfo = options?.displayName || "<get from LHC Form File>";
    this.respStore = options?.respStore ||
      {
        isNihLhcFormResponseStore: true,
        homePath: guessPath(path.dirname(nihLhcFormFile.fileName)),
        attachmentsPath: guessPath(path.dirname(nihLhcFormFile.fileName)),
        gitBranchPattern: options?.branchPattern || "<get from LHC form file>",
      };
    this.attachmentsDest = options?.attachmentsDest ||
      guessPath(nihLhcFormFile.fileName);
    this.questionnaireOrder = options?.questionnaireOrder || 0;
    this.questionnaireDisplayStatus = options?.questionnaireDisplayStatus ||
      true;
  }
}

export class TypicalCampaignQuestionnaire extends TypicalQuestionnaire
  implements CampaignQuestionnaire {
  constructor(
    readonly campaign: Campaign,
    nihLhcFormFile: NihLhcFormJsonFile,
    options?: TypicalQuestionnaireOptions,
  ) {
    super(nihLhcFormFile, options);
  }
}

export interface InfoAcqConfiguration {
  readonly isInfoAcqConfiguration: true;
  readonly questionnaires?: Questionnaire[];
  readonly campaigns?: Campaign[];
}
