$$.async();
compareTimeline(new Date('2016/9/22'))
    .then(r => $$.sendResult(r))
    .catch(e => $$.sendError(e));
