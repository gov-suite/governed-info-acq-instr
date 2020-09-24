import { testingAsserts as ta } from "./deps-test.ts";
import { path } from "./deps.ts";
import * as ef from "./gi_test.golden/evaluation-facets.ts";
import * as mod from "./mod.ts";

// find relative path to the test data directory (so that tests can be run from anywhere)
const homePath = mod.fileSystemPath(
  path.relative(
    Deno.cwd(),
    `${path.dirname(import.meta.url)}/gi_test.golden`
      .substr("file://".length),
  ),
);

Deno.test(`Test data directory '${homePath.fsPath}' exists`, async () => {
  ta.assert(
    homePath.exists,
    `Test data directory '${homePath.fsPath}' not found.`,
  );
});

Deno.test(`Ethics and Compliance Facets`, async () => {
  const facets = new ef.EthicsAndComplianceFacets({ path: homePath });
  ta.assertEquals(1, facets.instruments.length);
});

Deno.test(`Expectations Facets`, async () => {
  const facets = new ef.ExpectationsFacets({ path: homePath });
  ta.assertEquals(1, facets.instruments.length);
});

Deno.test(`Interoperability Facets`, async () => {
  const facets = new ef.InteroperabilityFacets({ path: homePath });
  ta.assertEquals(5, facets.instruments.length);
});

Deno.test(`Information Assurance Facets`, async () => {
  const facets = new ef.InformationAssuranceFacets({ path: homePath });
  ta.assertEquals(11, facets.instruments.length);
});

Deno.test(`Quality Facets`, async () => {
  const facets = new ef.QualityFacets({ path: homePath });
  ta.assertEquals(1, facets.instruments.length);
});

Deno.test(`Security Facets`, async () => {
  const facets = new ef.SecurityFacets({ path: homePath });
  ta.assertEquals(2, facets.instruments.length);
});

Deno.test(`User Experience Facets`, async () => {
  const facets = new ef.UserExperienceFacets({ path: homePath });
  ta.assertEquals(1, facets.instruments.length);
});
