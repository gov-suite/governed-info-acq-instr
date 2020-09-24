import {
  EvalFacetConstructor,
  EvalFacetsConstructionContext,
  EvaluationFacets,
} from "../mod.ts";

import { CarinAllianceCodeOfConductFacet } from "./carin-alliance-code-of-conduct.gi.ts";

// deno-lint-ignore no-empty-interface
export interface EthicsAndComplianceFacetsConstructionContext
  extends EvalFacetsConstructionContext {}

export class EthicsAndComplianceFacets extends EvaluationFacets {
  static readonly facets: readonly EvalFacetConstructor[] = [
    CarinAllianceCodeOfConductFacet,
  ];
  readonly carinAllianceCodeOfConduct: CarinAllianceCodeOfConductFacet;

  constructor(ctx: EthicsAndComplianceFacetsConstructionContext) {
    super(
      {
        ...ctx,
        identity: "Ethics And Compliance",
        path: ctx.path.childPath("Ethics-and-Compliance"),
      },
    );
    this.carinAllianceCodeOfConduct = new CarinAllianceCodeOfConductFacet();
    this.instruments.push(this.carinAllianceCodeOfConduct);
  }
}

export default EthicsAndComplianceFacets;
