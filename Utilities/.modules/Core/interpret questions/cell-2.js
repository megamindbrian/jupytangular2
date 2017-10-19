// TODO: use the m flag option for regexp?
var re = new RegExp('(^|\\n).*?\\?(\\s+|$)', 'ig');
var re2 = new RegExp('(^|\\n)//.*\\?(\\s+|$)', 'ig')

var accumulateMarkdown = (cells) => {
    var counter = 0, prev = [];
    return cells.reduce((md, c) => {
        counter++;
        var source = c.source.join('');
        if (c.cell_type === 'markdown') {
            prev.push(source);
            return md;
        } else if (c.cell_type !== 'code') {
            return md;
        }
        // TODO: improve the counter
        var cell = {code: source, markdown: prev, from: counter - 1, to: counter, language: c.language};
        prev = [];
        md.push(cell);
        return md;
    }, []);
};

// How to convert a string to an Array of RegEx matches
var regexToArray = (ex, str, i = 0) => {
    var co = [];
    var m;
    while ((m = ex.exec(str)) && co.push(m[i])) ;
    return co;
};

module.exports = accumulateMarkdown;