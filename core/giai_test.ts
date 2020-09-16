import { testingAsserts as ta } from "./deps-test.ts";
import testConfig from "./giai_test.golden/medigy-evaluation-facets.conf.ts";
import { isFileSystemPath } from "./mod.ts";

Deno.test("./giai_test.golden/medigy-evaluation-facets.conf.ts", async () => {
  if (testConfig.campaigns) {
    for (const c of testConfig.campaigns) {
      ta.assert(
        isFileSystemPath(c.homePath),
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
