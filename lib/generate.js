const fs = require("fs");
const nj = require("nunjucks");
const path = require("path");
const debug = require("debug")("upibc:generate");

function generate(name, src, dest, done) {
  const tpl = fs.readFileSync(src + "/README.md", "utf-8");
  const compiledData = nj.renderString(tpl, { template: src, project: name });
  fs.writeFileSync(dest + "/READEME.md", compiledData);
  done();
  return compiledData;
}

module.exports = generate;
