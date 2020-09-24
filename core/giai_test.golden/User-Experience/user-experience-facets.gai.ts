import {
  EvalFacetConstructor,
  EvalFacetsConstructionContext,
  EvaluationFacets,
} from "../mod.ts";

import { NodeHealthUserExperienceMeasuresFacet } from "./node-health-user-experience-measures-facet.gai.ts";

// deno-lint-ignore no-empty-interface
export interface UserExperienceFacetsConstructionContext
  extends EvalFacetsConstructionContext {}

export class UserExperienceFacets extends EvaluationFacets {
  static readonly facets: readonly EvalFacetConstructor[] = [
    NodeHealthUserExperienceMeasuresFacet,
  ];
  readonly nodeHealthUserExperienceMeasuresFacet:
    NodeHealthUserExperienceMeasuresFacet;

  constructor(ctx: UserExperienceFacetsConstructionContext) {
    super(
      {
        ...ctx,
        identity: "User Experience",
        path: ctx.path.childPath("User-Experience"),
      },
    );
    this.nodeHealthUserExperienceMeasuresFacet =
      new NodeHealthUserExperienceMeasuresFacet();
    this.instruments.push(this.nodeHealthUserExperienceMeasuresFacet);
  }
}

export default UserExperienceFacets;
