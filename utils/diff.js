/* eslint-disable */

const chalk = require('chalk');
const diff = require('diff');

/**
 * Make a colorful diff between attempt and solution
 * @param  {String} attempt
 * @param  {String} solution
 * @return {String}
 */
module.exports = (attempt, solution) => {
  // Compare solution and attempt results
  const parts = diff.diffWordsWithSpace(attempt, solution);
  // return diff
  return parts.map(part =>
    part.added   ? chalk.inverse.green(part.value) :
    part.removed ? chalk.inverse.red(part.value) : part.value
  ).join('');
};
