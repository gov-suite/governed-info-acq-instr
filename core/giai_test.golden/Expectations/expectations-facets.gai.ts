import { EvalFacetConstructor, EvaluationFacets, Path } from "../mod.ts";

import { MedigyObjectivesAndKeyResultsFacet } from "./medigy-objectives-and-key-results-facet.gai.ts";

export class ExpectationsFacets extends EvaluationFacets {
  static readonly facets: readonly EvalFacetConstructor[] = [
    MedigyObjectivesAndKeyResultsFacet,
  ];

  constructor(homePath: Path) {
    super("Expectations", homePath.childPath("Expectations"));
    ExpectationsFacets.facets.forEach((f) => this.questionnaires.push(new f()));
  }
}

export default ExpectationsFacets;
