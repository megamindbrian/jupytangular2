$$.async()
runSeleniumCell('test docker selenium')
    .then(r => $$.sendResult(r))
    .catch(e => $$.sendError(e));