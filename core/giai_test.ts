import { assert } from "https://deno.land/std@0.69.0/_util/assert.ts";
import { testingAsserts as ta } from "./deps-test.ts";
import * as mef from "./giai_test.golden/medigy-evaluation-facets.conf.ts";
import * as mod from "./mod.ts";

const pathName = "giai_test.golden";
const homePath = mod.firstFileSystemPathFound(
  `./${pathName}`,
  `./core/${pathName}`,
  `./governed-info-acq-instr/core/${pathName}`,
);

Deno.test("./giai_test.golden/medigy-evaluation-facets.conf.ts", async () => {
  assert(
    homePath,
    "The test should be run from either core or one of its parents.",
  );

  const config = new mef.MedigyEvaluationFacets(homePath);
  if (config.campaigns) {
    for (const c of config.campaigns) {
      ta.assert(
        mod.isFileSystemPath(c.homePath),
        `${c.homePath} is not a file system path, not sure how to handle.`,
      );
      for (const aq of c.questionnaires) {
        ta.assert(
          aq.nihLhcFormFile.fileExists,
          `LHC Form JSON '${aq.nihLhcFormFile.fileName}' should exist`,
        );
      }
    }
  }
});
