import { EvalFacetConstructor, EvaluationFacets, Path } from "../mod.ts";

import { AmericanMedicalAssociationXcertiaFacet } from "./american-medical-association-xcertia.gai.ts";
import { MedigyPrivacyGuidelinesFacet } from "./medigy-privacy-guidelines-evaluation-facet.gai.ts";

export class SecurityFacets extends EvaluationFacets {
  static readonly facets: readonly EvalFacetConstructor[] = [
    AmericanMedicalAssociationXcertiaFacet,
    MedigyPrivacyGuidelinesFacet,
  ];

  constructor(homePath: Path) {
    super("Security", homePath.childPath("Security"));
    SecurityFacets.facets.forEach((f) => this.questionnaires.push(new f()));
  }
}

export default SecurityFacets;
