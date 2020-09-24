import type { nihLhcForms as lform } from "./deps.ts";
import type * as store from "./store.ts";
import * as loc from "./location.ts";

export interface Instrument {
  readonly isInstrument: true;
}

export interface HumanSurveyInstrument extends Instrument {
  readonly isHumanSurveyInstrument: true;
}

export type Identity = string;

export interface Identifiable {
  readonly identity: Identity;
}

export type TextTemplate = string;

export interface Invitable {
  readonly invitation: TextTemplate;
}

export interface Sortable {
  readonly sortOrder: number;
}

export interface NihLhcFormInstrument extends Identifiable, store.GitStorable {
  readonly nihLhcForm: lform.NihLhcForm;
}

export interface NihLhcFormResponse
  extends Identifiable, store.GitStorable, store.AttachmentsSupplier {
  readonly instrument: NihLhcFormInstrument;
}

export type CampaignName = string;

export interface Campaign extends Identifiable, Sortable {
  readonly instruments: Instrument[];
}

export interface CampaignInstrument extends Instrument {
  readonly campaign: Campaign;
}

export interface TypicalInstrumentOptions
  extends
    Partial<Identifiable>,
    Partial<CampaignInstrument>,
    Partial<store.GitStorable>,
    Partial<Sortable> {
  readonly nihlhcForm: lform.NihLhcForm;
}

export class TypicalInstrument
  implements HumanSurveyInstrument, NihLhcFormInstrument, Sortable {
  readonly isInstrument = true;
  readonly isHumanSurveyInstrument = true;
  readonly identity: Identity;
  readonly nihLhcForm: lform.NihLhcForm;
  readonly store: store.GitStore;
  readonly sortOrder: number;

  constructor(
    { nihlhcForm, identity, store, sortOrder }: TypicalInstrumentOptions,
  ) {
    this.nihLhcForm = nihlhcForm;
    this.identity = identity || nihlhcForm.name || "UntitledInstrument";
    this.store = store ||
      {
        isStore: true,
        isFileSystemStore: true,
        isGitStore: true,
        homePath: loc.guessPath("TODO"),
      };
    this.sortOrder = sortOrder || 0;
  }
}

export class TypicalCampaign implements Campaign {
  readonly instruments: Instrument[];
  readonly sortOrder: number;

  constructor(
    readonly identity: Identity,
    readonly init?: (self: TypicalCampaign) => void,
    readonly options?: Omit<Partial<Campaign>, "identity">,
  ) {
    this.instruments = options?.instruments || [];
    this.sortOrder = options?.sortOrder || 0;
    if (init) init(this);
  }
}
