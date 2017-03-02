const workshopper = require('workshopper-adventure');
const path = require('path');

const learnyousmth = workshopper({
  appDir: __dirname,
  languages: ['en', 'zh-cn'],
  header: require('workshopper-adventure/default/header'),
  footer: [{
    file: path.join(__dirname, 'i18n', 'footer', '{lang}.md'),
  }],
});

learnyousmth.addAll([
  'HELLO WORLD',
]);

module.exports = learnyousmth;
