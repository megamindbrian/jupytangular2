var importer = require('../Core');

$$.async()
importer.import('selenium cell')
    .then(runSeleniumCell => runSeleniumCell('test avidbrain'))
    .then(testLogin => testLogin())
    .then(r => $$.sendResult(r))
    .catch(e => $$.sendError(e));