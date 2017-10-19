$$.async();
fs.unlink('test.file')
    .catch(e => console.log(e))
    .then(() => fs.writeFile('test.file', 'some output'))
    .then(() => fs.readFile('test.file'))
    .then(r => r.toString())
    .then(r => $$.sendResult(r))
    .then(() => fs.___close())
    .catch(e => $$.sendError(e));
