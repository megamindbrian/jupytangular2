var importer = require('../Core');

$$.async();
importer.import('order google takeout')
    .then(googleTakeout => googleTakeout('location|\\+1'))
    .then(r => $$.sendResult(r))
    .catch(e => $$.sendError(e));
