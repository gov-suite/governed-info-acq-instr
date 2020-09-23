import { EvalFacetConstructor, EvaluationFacets, Path } from "../mod.ts";

import { NodeHealthUserExperienceMeasuresFacet } from "./node-health-user-experience-measures-facet.gai.ts";

export class UserExperienceFacets extends EvaluationFacets {
  static readonly facets: readonly EvalFacetConstructor[] = [
    NodeHealthUserExperienceMeasuresFacet,
  ];

  constructor(homePath: Path) {
    super("User Experience", homePath.childPath("User-Experience"));
    UserExperienceFacets.facets.forEach((f) =>
      this.questionnaires.push(new f())
    );
  }
}

export default UserExperienceFacets;
