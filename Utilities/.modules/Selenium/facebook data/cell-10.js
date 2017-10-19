var glob = require('glob');
var fs = require('fs');
var path = require('path');
var importer = require('../Core');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var project = PROFILE_PATH + '/Conversations';

var regexToArray = (ex, str, i = 0) => {
    var co = [];
    var m;
    while ((m = ex.exec(str)) && co.push(m[i])) ;
    return co;
};
var getFriends = (file) => {
    var html = fs.readFileSync(file).toString();
    return regexToArray(/href="([^"]*)/ig, html, 1)
        .filter(h => h.indexOf('.js') === -1 && h.indexOf('.css') === -1
            && h.indexOf('friends_tab') > -1)
        .map(m => (/(.*)\?/ig).exec(m)[1])
        .filter((elem, pos, arr) => arr.indexOf(elem) === pos)
};

var scrapeFacebookFriends;
var getFriendsDiff = () => {
    return importer.import('selenium cell')
        .then(runSeleniumCell => runSeleniumCell('scrape facebook friends'))
        .then(r => (scrapeFacebookFriends = r)())
        .then(doc => {
            var date = new Date();
            fs.writeFileSync(project + '/friendlist-' + date.getFullYear()
                + '-' + (date.getMonth() + 1)
                + '-' + date.getDate() + '.htm', doc);
            var friends = glob.sync('**/*friend*', {cwd: project, nodir: true});
            friends.sort((a, b) => new Date(fs.statSync(path.join(project, a)).mtime).getTime() - new Date(fs.statSync(
                path.join(project, b)).mtime).getTime());
            //console.log(friends);
            var urls = getFriends(path.join(project, friends.pop()));
            //console.log(urls);
            var urls2 = getFriends(path.join(project, friends.pop()));
            //console.log(urls2);
            var diff = urls.filter(u => urls2.indexOf(u) === -1)
                .concat(urls2.filter(u => urls.indexOf(u) === -1))
            return diff;
        })
        .catch(e => console.log(e))
}
module.exports = getFriendsDiff;