var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var project = PROFILE_PATH + '/universal';
if (!fs.existsSync(project)) {
    fs.mkdirSync(project);
}

var rateLimit = 900000;

var outputSlowly = (r, out) => {
    var counter = 0;
    return new Promise(resolve => {
        var interval;
        var scriptPieces = Math.ceil(r.scripts.length / rateLimit);
        console.log(scriptPieces + ' pieces');
        interval = setInterval(() => {
            if (counter < scriptPieces) {
                out(r.scripts.substr(counter * rateLimit, rateLimit), counter, scriptPieces);
            } else {
                clearInterval(interval);
                resolve(r.compress);
            }
            counter++;
        }, 1100);
    });
};

var compress = (code) => {
    console.log('Compressing...');
    return importer.import('lzw compress')
        .then(lzw => ({compress: r[0].code, scripts: lzw.compressToBase64(code.scripts + code.chunks)}));
};

$$.async();
try {
    displAngular(project, '/search')
        .then(r => {
            $$.html(r.html, true);
            return compress(r);
        })
        .then(r => {
            console.log('App will be available in ');
            return outputSlowly(r, (c, i, t) => {
                console.log((t - i) + ' - ' + c.substr(0, 10));
                $$.html(`<script>
if(!doc.app) { doc.app=''; }
doc.app+=` + JSON.stringify(c) + `;
</script>`, true);
            });
        })
        .then(compress => $$.html(`<script>
eval(decodeURI(` + JSON.stringify(encodeURI(compress)) + `));
doc.document.write(LZString.decompressFromBase64(doc.app));
doc.document.close();
</script>`, true))
        .then(() => importer.import('search notebook provider'))
        .then(searchProvider => searchProvider())
        .then(() => $$.sendResult())
        .catch(e => $$.sendError(e));
} catch (e) {
    $$.sendError(e);
}
