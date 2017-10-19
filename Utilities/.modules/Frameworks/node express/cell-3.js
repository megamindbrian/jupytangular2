$$.async();
var images = [];
new Promise((resolve, reject) => {
    request('http://' + host + ':' + port, (err, res, body) => {
        if (err) {
            reject(err)
        }
        else {
            resolve(body)
        }
    });
}).then((body) => {
    var nodeList = (new JSDOM(body)).window.document.querySelectorAll(query);
    return Array.prototype.slice.call(nodeList, 0)
        .map(i => i.getAttribute('src'));
}).then(sources => {
    images = sources;
    $$.done(sources);
}).catch(e => $$.done(e));