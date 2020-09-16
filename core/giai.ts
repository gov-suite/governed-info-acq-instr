import { fs, path } from "./deps.ts";

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
  readonly childFilePath: (file: PolyglotFile) => RelativeFsPath;
}

export interface FileSystemPath extends Path {
  readonly isFileSystemPath: true;
  readonly fsPath: FsPathOnly;
}

export function isFileSystemPath(o: unknown): o is FileSystemPath {
  return o && typeof o === "object" && "isFileSystemPath" in o;
}

export function guessPath(fsPath: FsPathOnly): Path {
  const result: FileSystemPath = {
    isPath: true,
    isFileSystemPath: true,
    fsPath: fsPath,
    childPath: (childPath: FsPathOnly): Path => {
      return guessPath(path.join(fsPath, childPath));
    },
    childFilePath: (file: PolyglotFile): RelativeFsPath => {
      return path.join(fsPath, file.fileName);
    },
  };
  return result;
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

export class NihLhcFormJsonFile extends TypicalJsonFile {
  get isValid(): boolean {
    return this.fileExists;
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
    branchPattern: string;
  };

export class TypicalQuestionnaire implements Questionnaire {
  readonly isDataCollectionInstrument = true;
  readonly isHumanSurveyInstrument = true;
  readonly isNihLhcFormInstrument = true;
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
    this.displayName = options?.displayName || "<get from LHC Form File>";
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
    super(
      new NihLhcFormJsonFile(campaign.homePath.childFilePath(nihLhcFormFile)),
      options,
    );
  }
}

export interface InfoAcqConfiguration {
  readonly isInfoAcqConfiguration: true;
  readonly questionnaires?: Questionnaire[];
  readonly campaigns?: Campaign[];
}