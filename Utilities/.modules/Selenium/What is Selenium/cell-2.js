$$.async();
getSeleniumServer()
    .then(r => $$.sendResult(r))
    .catch(e => $$.sendError(e));
