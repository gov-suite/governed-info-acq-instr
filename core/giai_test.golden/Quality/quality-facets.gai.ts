import { EvalFacetConstructor, EvaluationFacets, Path } from "../mod.ts";

import { MedigyQualityFacet } from "./medigy-quality-evaluation-facet.gai.ts";

export class QualityFacets extends EvaluationFacets {
  static readonly facets: readonly EvalFacetConstructor[] = [
    MedigyQualityFacet,
  ];

  constructor(homePath: Path) {
    super("Quality", homePath.childPath("Quality"));
    QualityFacets.facets.forEach((f) => this.questionnaires.push(new f()));
  }
}

export default QualityFacets;
