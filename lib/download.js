const ora = require("ora");
const rm = require("rimraf");
const download = require("download-git-repo");
const exists = require("fs").existsSync;

function downloadTemplate(template, tmp, cb) {
  const spinner = ora("downloading templates...");
  spinner.start();
  download(`koajs-templates/${template}`, tmp, err => {
    spinner.stop();
    cb(err);
  });
}

module.exports = downloadTemplate;