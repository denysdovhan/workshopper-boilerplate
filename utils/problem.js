const fs = require('fs');
const path = require('path');

const fail = require('./fail');

module.exports = (dirname) => {
  const exports = {};

  exports.init = function init(workshopper) {
    // Get lang code
    const lang = workshopper.i18n.lang();

    this.problem =
      { file: path.join(dirname, `${lang}.md`) };
    this.solutionPath =
      path.resolve(dirname, 'solution', 'solution.js');
    this.solution = [
      { text: fs.readFileSync(this.solutionPath), type: 'plain' },
      { file: path.join(dirname, 'solution', `${lang}.md`) },
    ];
    this.troubleshooting =
      path.join(__dirname, '..', 'i18n', 'troubleshooting', `${lang}.md`);
  };

  exports.verify = function verify(args, done) {
    const filename = args[0];

    // something wen't wrong
    if (false) {
      exports.fail = fail({
        filename,
        attempt: fs.readFileSync(`./${filename}`, 'utf8'),
        solution: fs.readFileSync(this.solutionPath, 'utf8'),
        troubleshooting: this.troubleshooting,
      });

      return done(false);
    }

    // do verifying
    return done(true); // everything is OK
  };

  exports.run = function run(args, done) {
    // run the file
    done();
  };

  return exports;
};
