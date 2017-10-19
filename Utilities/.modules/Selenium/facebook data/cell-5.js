var importer = require('../Core');
var fs = require('fs');

$$.async();
var loginFacebook, listFacebookThreads, readFacebookThread, likeAllPosts;
importer.import(['selenium cell'])
    .then(runSeleniumCell => runSeleniumCell([
        'log in facebook',
        'list facebook threads',
        'messages from facebook',
        'like all facebook posts'
    ]))
    .then(r => {
        loginFacebook = r[0];
        listFacebookThreads = r[1];
        readFacebookThread = r[2];
        likeAllPosts = r[3];
        return loginFacebook();
    })
    //.then(() => listFacebookThreads())
    //.then(threads => {
    //    try { threads = JSON.parse(fs.readFileSync(project + '/facebook-threads.json')); }
    //    catch (e) { threads = []; }
    //    return importer.runAllPromises(threads.slice(450, 600)
    //        .map(t => ((resolve) => readFacebookThread(t).then((r) => resolve(r)))));
    //})
    .then(r => importer.runAllPromises([
        'https://www.facebook.com/ragunr'
    ].map(p => (resolve) => likeAllPosts(p, true).then(r => resolve(r)))))

    /*

    https://www.facebook.com/dadsrawesome/videos/1165913990203850/
    https://www.facebook.com/galacticempireofficial/videos/800461353413445/
        */

    .then(r => $$.sendResult(r))
    .catch(e => $$.sendError(e))
