// TODO: create a gulp stream angular component out of it
// TODO: connect with gulp-git https://www.npmjs.com/package/gulp-git
// install https://github.com/Automattic/node-canvas/wiki/installation---osx
// install using brew install pkg-config fontconfig cairo pixman giflib libjpeg libpng
var path = require('path');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var project = PROFILE_PATH + '/Documents/portal';

$$.async()
projectWordCloud(project)
    .then(svg => $$.svg(svg))
    .catch(e => $$.sendError(e));
