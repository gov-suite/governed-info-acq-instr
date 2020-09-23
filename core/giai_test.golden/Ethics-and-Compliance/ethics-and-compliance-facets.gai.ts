import { EvalFacetConstructor, EvaluationFacets, Path } from "../mod.ts";

import { CarinAllianceCodeOfConductFacet } from "./carin-alliance-code-of-conduct.gai.ts";

export class EthicsAndComplianceFacets extends EvaluationFacets {
  static readonly facets: readonly EvalFacetConstructor[] = [
    CarinAllianceCodeOfConductFacet,
  ];

  constructor(homePath: Path) {
    super("Ethics And Compliance", homePath.childPath("Ethics-and-Compliance"));
    EthicsAndComplianceFacets.facets.forEach((f) =>
      this.questionnaires.push(new f())
    );
  }
}

export default EthicsAndComplianceFacets;
