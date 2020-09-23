import { TypicalCampaign } from "../giai.ts";
import type { nihLhcForms } from "./deps.ts";
import {
  NihLhcFormJsonFile,
  TypicalQuestionnaire,
  TypicalQuestionnaireOptions,
} from "./mod.ts";

export interface EvaluationFacetContext {
  readonly isEvaluationFacetContext: true;
}

export interface EvalFacetConstructionContext extends EvaluationFacetContext {
  readonly isEvalFacetConstructionContext: true;
  readonly options?: TypicalQuestionnaireOptions;
}

export interface EvalFacetConstructor {
  new (efcc?: EvalFacetConstructionContext): EvaluationFacet;
}

export class EvaluationFacet extends TypicalQuestionnaire {
  constructor(
    readonly lchForm: nihLhcForms.NihLhcForm,
    efcc?: EvalFacetConstructionContext,
  ) {
    super(new NihLhcFormJsonFile("test.lhc-form.json"));
  }
}

export class EvaluationFacets extends TypicalCampaign {
}
