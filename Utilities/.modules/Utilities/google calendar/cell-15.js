var importer = require('../Core');

$$.async();
importer.import('sync chrome data')
    .then(syncChrome => syncChrome())
    .then(r => $$.sendResult(r))
    .catch(e => $$.sendError(e));