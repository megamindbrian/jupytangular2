var importer = require('../Core');
// Unfollow everyone on facebook?

// https://www.facebook.com/me/following
var loginFacebook, unfollowFacebook;
$$.async();
importer.import('selenium cell')
    .then(runSeleniumCell => runSeleniumCell([
        'log in facebook',
        'unfollow everyone facebook'
    ]))
    .then(r => {
        loginFacebook = r[0];
        unfollowFacebook = r[1];
        return loginFacebook();
    })
    .then(() => unfollowFacebook())
    .then(r => $$.sendResult(r))
    .catch(e => $$.sendError(e));
