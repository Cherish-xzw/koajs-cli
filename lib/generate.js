const debug = require("debug")("koajs-cli:generate");
const fs = require("fs");
const hbs = require("handlebars");
const path = require("path");
const Metalsmith = require("metalsmith");

function generate(name, src, dest, done) {
  const metalsmith = Metalsmith(path.join(src, "template"));
  metalsmith.use(renderTemplateFiles({ data: { name } }));
  metalsmith
    .clean(false)
    .source(".")
    .destination(dest)
    .build((err, files) => {
      done(err);
    });
}

function renderTemplateFiles(options) {
  return function(files, metalsmith, done) {
    setImmediate(done);
    Object.keys(files).forEach(file => {
      debug("render file: %s", file);
      const str = files[file].contents.toString();
      // do not attempt to render files that do not have mustaches
      if (!/{{([^{}]+)}}/g.test(str)) {
        return ;
      }
      const compiledData = hbs.compile(str)(options.data);
      files[file].contents = compiledData;
    });
  };
}

module.exports = generate;
