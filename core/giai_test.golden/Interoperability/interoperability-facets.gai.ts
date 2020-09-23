import { EvalFacetConstructor, EvaluationFacets, Path } from "../mod.ts";

import { MedigyTerminologyFacet } from "./medigy-terminology-facet.gai.ts";
import { OncIsaAllergyAndIntolerancesFacet } from "./onc-isa-allergy-and-intolerances-facet.gai.ts";
import { OncIsaEmergencyMedicalServicesFacet } from "./onc-isa-emergency-medical-services-facet.gai.ts";
import { OncIsaEncounterDiagnosisFacet } from "./onc-isa-encounter-diagnosis-facet.gai.ts";
import { OncIsaGeneralFacet } from "./onc-isa-general-facet.gai.ts";

export class InteroperabilityFacets extends EvaluationFacets {
  static readonly facets: readonly EvalFacetConstructor[] = [
    MedigyTerminologyFacet,
    OncIsaAllergyAndIntolerancesFacet,
    OncIsaEmergencyMedicalServicesFacet,
    OncIsaEncounterDiagnosisFacet,
    OncIsaGeneralFacet,
  ];

  constructor(homePath: Path) {
    super("Interoperability", homePath.childPath("Interoperability"));
    InteroperabilityFacets.facets.forEach((f) =>
      this.questionnaires.push(new f())
    );
  }
}

export default InteroperabilityFacets;
