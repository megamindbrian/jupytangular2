// TODO: interpret markdown leading up to code results and find the resulting function in the list
// for now, the boring solution is to assume all markdown output is a question?

// How to store code markdown results for later use?
if (typeof cellCache === 'undefined') {
    var cellCache = [];
}
if (typeof cacheIds === 'undefined') {
    var cacheIds = {};
}
var cacheCells = ((cells, notebook) => {
    var filename = path.basename(notebook);
    var newCache = accumulateMarkdown(cells);
    newCache.forEach((c, i) => {
        if (typeof cacheIds[filename + '[' + i + ']'] !== 'undefined') {
            return;
        }
        var questions = regexToArray(re, c.markdown)
            .concat(regexToArray(re, c.source)
                .map(r => r.replace(/how to|?/ig, '')));
        cacheIds[filename + '[' + i + ']'] = Object.assign({}, c, {
            id: filename + '[' + i + ']',
            filename: notebook,
            questions: questions,
            notebook: filename,
            function: global[filename + '[' + i + ']']
        });
        questions.forEach((q) => cellCache.push({
            id: filename + '[' + i + ']',
            question: q
        }));
    });
    return cellCache;
});
module.exports = cacheCells;
