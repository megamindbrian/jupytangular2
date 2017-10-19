var html = '';
var htmlPrint = '';
var requests = images.map((src) => {
    var filename = src.split('/').pop();
    return new Promise((resolve, reject) => {
        request(src, {encoding: 'binary'}, (err, res, body) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(body)
            }
        });
    }).then(body => {
        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(output, filename),
                body,
                'binary',
                function (err) {
                    if (err) reject(err);
                    else resolve({filename: filename, data: body});
                });
        })
    });
});
$$.async();
Promise.all(requests).then(images => {
    images.forEach((i) => {
        var filename = i.filename.split('/').pop();
        var ext = mime.lookup(i.filename);
        html += '<img src="data:' + ext + ';base64,' + (new Buffer(i.data, 'binary')).toString('base64') + '" />';
        htmlPrint += '<li><img src="/assets/' + filename + '" /></li>\n';
    });
    $$.mime({'text/markdown': 'Usage:\n\n```html\n' + htmlPrint + '\n```\nOutput:\n' + html});
}).catch(e => $$.done(e));