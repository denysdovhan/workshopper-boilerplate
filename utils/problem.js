const fs = require('fs');
const path = require('path');

const troubleshooting = require('./troubleshooting');

/**
 * Exports a function that will be executed in in corresponding
 * directory of exercise.
 * This function takes a dirname (needed for correct pathes to exercise files)
 * and returns an export object for corresponding exercise.
 * @param  {String} dirname Path to the exercise
 * @return {Object}         Export object (`init`, `run`, `verify` and `fail`)
 */
module.exports = (dirname) => {
  const exports = {};

  /**
   * Initialize an exercise.
   * Resolve pathes for corresponding problem, solution, solution explanation
   * and troubleshooting message
   * @param  {Object} workshopper A workshopper inctance
   */
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

  /**
   * Method for verifying solution.
   *
   * Do whatever you need for verifying your solution: compile files,
   * parse to AST, compare solution and attempt, etc.
   *
   * Use `done` callback for indicating that attempt is correct or not.
   * It takes three parameters:
   *    err — Error that occured
   *    pass — true == The run has worked
   *    message — message to append after the output
   * Here are few examples:
   *    done(true)       -> err=null,  pass=true
   *    done(false)      -> err=null,  pass=false
   *    done()           -> err=null,  pass=null
   *    done(null)       -> err=null,  pass=null
   *    done(true, true) -> err=true,  pass="x"
   *    done(false, "x") -> err=false, pass="x"
   *    done(null, "x")  -> err=null,  pass="x"
   *    done("x", false) -> err="x",   pass=false
   *    done("x", true)  -> err="x",   pass=true (pass should be ignored)
   *
   * @param  {Array}    args   Array with command line arguments
   * @param  {Function} done   Callback for result of checking
   */
  exports.verify = function verify(args, done) {
    const attempt = args[0];

    //
    // Do verifying here ...
    //

    // Do this, if attempt is not correct
    if (false) {
      exports.fail = troubleshooting({
        filename: attempt,
        attempt: fs.readFileSync(`./${attempt}`, 'utf8'),
        solution: fs.readFileSync(this.solutionPath, 'utf8'),
        file: this.troubleshooting,
      });

      return done(false);
    }

    // If everything is OK
    return done(true);
  };

  /**
   * Method for running solution.
   * Do whatever you need to run attempt.
   * Here `done` — is the same callback as for `verify` method
   *
   * @param  {Array}    args Array with command line arguments
   * @param  {Function} done Callback for result of checking (@see `verify`)
   */
  exports.run = function run(args, done) {
    // run the file
    done();
  };

  return exports;
};
