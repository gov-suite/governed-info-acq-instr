import type * as attr from "./attribute.ts";
import type { nihLhcForms as lform } from "./deps.ts";
import * as loc from "./location.ts";
import type * as store from "./store.ts";

export interface Instrument {
  readonly isInstrument: true;
}

export interface HumanSurveyInstrument extends Instrument {
  readonly isHumanSurveyInstrument: true;
}

export interface NihLhcFormInstrument
  extends attr.Identifiable, store.GitStorable {
  readonly nihLhcForm: lform.NihLhcForm;
}

export type CampaignName = string;

export interface Campaign extends attr.Identifiable, attr.Sortable {
  readonly instruments: Instrument[];
}

export interface CampaignInstrument extends Instrument {
  readonly campaign: Campaign;
}

export interface TypicalInstrumentOptions
  extends
    Partial<attr.Identifiable>,
    Partial<CampaignInstrument>,
    Partial<store.GitStorable>,
    Partial<attr.Sortable> {
  readonly nihlhcForm: lform.NihLhcForm;
}

export class TypicalInstrument
  implements HumanSurveyInstrument, NihLhcFormInstrument, attr.Sortable {
  readonly isInstrument = true;
  readonly isHumanSurveyInstrument = true;
  readonly identity: attr.Identity;
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
    readonly identity: attr.Identity,
    readonly init?: (self: TypicalCampaign) => void,
    readonly options?: Omit<Partial<Campaign>, "identity">,
  ) {
    this.instruments = options?.instruments || [];
    this.sortOrder = options?.sortOrder || 0;
    if (init) init(this);
  }
}
