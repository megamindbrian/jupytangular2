var glob = require('glob');
var findSimilarFile = (base, project) => {
    return new Promise((resolve, reject) => {
        var searchStrings = '**/' + base + '.ts';
        console.log('Search for ' + searchStrings);
        glob(searchStrings, {ignore: ['**/node_modules/**'], cwd: project}, function (err, matches) {
            var isEmpty = matches.length == 0;
            if (err) {
                return reject(err);
            } else if (isEmpty) {
                console.log('No matches for ' + searchStrings)
                return resolve();
            }

            // TODO: try to build and make sure it works before patching
            resolve(matches[0].replace('.ts', ''));
        });
    });
};
module.exports = findSimilarFile;
findSimilarFile;
