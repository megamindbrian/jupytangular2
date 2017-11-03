var importer = require('../Core');
var path = require('path');
var fs = require('fs');

var PROJECT_PATH = PROFILE_PATH + '/Downloads';
var files = glob.sync('Takeout*/Chrome/BrowserHistory.json', {cwd: PROJECT_PATH})
    .map(f => path.join(PROJECT_PATH, f));
files.sort((a, b) => fs.statSync(a).ctime - fs.statSync(b).ctime);
var HISTORY_PATH = files.pop();