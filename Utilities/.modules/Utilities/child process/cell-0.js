var exec = require('child_process').exec;
// read cmd template and execute each line?
var corePath = path.resolve(path.join(__dirname, '..', 'Core'));
var importer = require(corePath);

var execCmd = (script, vars = {}, options = {}) => {
    // add some run commands to the bash script
    var bashToExec = (code) => code.split(/\s*(\n\s*)+/ig)
        .map(l => '{EXEC} ' + l)
        .join('\n').replace(/\\\s*\n\{EXEC\}\s*/ig, '\\\n ');

    return importer.runAllPromises(
        bashToExec(script).split(/\s*\{EXEC\}\s*/ig)
            .filter(r => r.trim() !== '')
            .map(r => new Promise((resolve, reject) => {
                exec(r, (err, result) => {
                    if (err) {
                        return resolve(err.toString());
                    }
                    resolve(result.toString());
                });
            })));
};

(execCmd);