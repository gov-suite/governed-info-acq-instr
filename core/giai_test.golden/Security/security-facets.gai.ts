import {
  EvalFacetConstructor,
  EvalFacetsConstructionContext,
  EvaluationFacets,
} from "../mod.ts";

import { AmericanMedicalAssociationXcertiaFacet } from "./american-medical-association-xcertia.gai.ts";
import { MedigyPrivacyGuidelinesFacet } from "./medigy-privacy-guidelines-evaluation-facet.gai.ts";

// deno-lint-ignore no-empty-interface
export interface SecurityFacetsConstructionContext
  extends EvalFacetsConstructionContext {}

export class SecurityFacets extends EvaluationFacets {
  static readonly facets: readonly EvalFacetConstructor[] = [
    AmericanMedicalAssociationXcertiaFacet,
    MedigyPrivacyGuidelinesFacet,
  ];
  readonly americanMedicalAssociationXcertia:
    AmericanMedicalAssociationXcertiaFacet;
  readonly medigyPrivacyGuidelinesEvaluationFacet: MedigyPrivacyGuidelinesFacet;

  constructor(ctx: SecurityFacetsConstructionContext) {
    super(
      { ...ctx, identity: "Security", path: ctx.path.childPath("Security") },
    );
    this.americanMedicalAssociationXcertia =
      new AmericanMedicalAssociationXcertiaFacet();
    this.medigyPrivacyGuidelinesEvaluationFacet =
      new MedigyPrivacyGuidelinesFacet();
    this.instruments.push(this.americanMedicalAssociationXcertia);
    this.instruments.push(this.medigyPrivacyGuidelinesEvaluationFacet);
  }
}

export default SecurityFacets;
