const generate = require("../lib/generate");
const path = require("path");

const MOCK_TEMPLATE_SRC = path.resolve("./test/fixture/mock_template_src");
const MOCK_TEMPLATE_BUILD = path.resolve("./test/fixture/mock_template_build");

describe("koajs-cli", () => {
  it("should generate file with template", () => {
    generate(
      "test",
      MOCK_TEMPLATE_SRC + "/webpack",
      MOCK_TEMPLATE_BUILD,
      function() {
        console.log("test done");
      }
    );
  });
});
