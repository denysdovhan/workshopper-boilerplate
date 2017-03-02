const workshopper = require('workshopper-adventure');
const path = require('path');

/**
 * Create an instance of workshopper.
 * @type {Object}
 */
const learnyousmth = workshopper({
  appDir: __dirname,
  languages: ['en'],
  header: require('workshopper-adventure/default/header'),
  footer: [{
    file: path.join(__dirname, 'i18n', 'footer', '{lang}.md'),
  }],
});

/**
 * Add array of exercises.
 *
 * These strings will automaticaly converted to slugs, like this:
 *    HELLO WORLD -> hello_world
 *
 * If you want to add new exercise, just add here a new name of exercise
 * and create new folder for corresponding exercise.
 *    @example exercises/hello_world
 */
learnyousmth.addAll([
  'HELLO WORLD',
]);

module.exports = learnyousmth;
