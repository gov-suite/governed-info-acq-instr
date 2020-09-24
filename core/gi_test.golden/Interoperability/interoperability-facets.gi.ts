import {
  EvalFacetConstructor,
  EvalFacetsConstructionContext,
  EvaluationFacets,
} from "../mod.ts";

import { MedigyTerminologyFacet } from "./medigy-terminology-facet.gi.ts";
import { OncIsaAllergyAndIntolerancesFacet } from "./onc-isa-allergy-and-intolerances-facet.gi.ts";
import { OncIsaEmergencyMedicalServicesFacet } from "./onc-isa-emergency-medical-services-facet.gi.ts";
import { OncIsaEncounterDiagnosisFacet } from "./onc-isa-encounter-diagnosis-facet.gi.ts";
import { OncIsaGeneralFacet } from "./onc-isa-general-facet.gi.ts";

// deno-lint-ignore no-empty-interface
export interface InteroperabilityFacetsConstructionContext
  extends EvalFacetsConstructionContext {}

export class InteroperabilityFacets extends EvaluationFacets {
  static readonly facets: readonly EvalFacetConstructor[] = [
    MedigyTerminologyFacet,
    OncIsaAllergyAndIntolerancesFacet,
    OncIsaEmergencyMedicalServicesFacet,
    OncIsaEncounterDiagnosisFacet,
    OncIsaGeneralFacet,
  ];
  readonly medigyTerminologyFacet: MedigyTerminologyFacet;
  readonly oncIsaAllergyAndIntolerancesFacet: OncIsaAllergyAndIntolerancesFacet;
  readonly oncIsaEmergencyMedicalServicesFacet:
    OncIsaEmergencyMedicalServicesFacet;
  readonly oncIsaEncounterDiagnosisFacet: OncIsaEncounterDiagnosisFacet;
  readonly oncIsaGeneralFacet: OncIsaGeneralFacet;

  constructor(ctx: InteroperabilityFacetsConstructionContext) {
    super(
      {
        ...ctx,
        identity: "Interoperability",
        path: ctx.path.childPath("Interoperability"),
      },
    );
    this.medigyTerminologyFacet = new MedigyTerminologyFacet();
    this.oncIsaAllergyAndIntolerancesFacet =
      new OncIsaAllergyAndIntolerancesFacet();
    this.oncIsaEmergencyMedicalServicesFacet =
      new OncIsaEmergencyMedicalServicesFacet();
    this.oncIsaEncounterDiagnosisFacet = new OncIsaEncounterDiagnosisFacet();
    this.oncIsaGeneralFacet = new OncIsaGeneralFacet();
    this.instruments.push(this.medigyTerminologyFacet);
    this.instruments.push(this.oncIsaAllergyAndIntolerancesFacet);
    this.instruments.push(this.oncIsaEmergencyMedicalServicesFacet);
    this.instruments.push(this.oncIsaEncounterDiagnosisFacet);
    this.instruments.push(this.oncIsaGeneralFacet);
  }
}

export default InteroperabilityFacets;
