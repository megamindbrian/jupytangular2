var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var tap = require('gulp-tap');
var importer = require('../Core');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var project = typeof project === 'undefined' ? path.join(PROFILE_PATH, 'Documents/portal') : project;

var relatives = [];
var packages = [];
var missing = {};
var missingPackages = [];

gulp.task('get relative imports', function () {
    return gulp.src(['src/**/*.ts', '!**/*.spec.ts'], {cwd: project})
        .pipe(tap(function (file) {
            var content = file.contents.toString();
            var re = /from\s+["'](.*?)['"]/ig;
            var m;
            while ((m = re.exec(content))) {
                if (m[1].match(/^\./)) {
                    relatives[relatives.length] = file.path + '/' + m[1];
                    var res = path.resolve(path.join(path.dirname(file.path), m[1]));
                    if (!fs.existsSync(res) && !fs.existsSync(res + '.ts')) {
                        var key = path.basename(m[1]);
                        if (typeof missing[key] !== 'undefined') {
                            missing[key][missing[key].length] = file.path + '/' + m[1];
                        } else {
                            missing[key] = [file.path + '/' + m[1]];
                        }
                    }
                } else {
                    packages[packages.length] = file.path + '/' + m[1];
                    try {
                        module.paths.unshift(project + '/node_modules');
                        require.resolve(m[1]);
                    } catch (e) {
                        if (missingPackages.indexOf(m[1]) === -1) {
                            missingPackages[missingPackages.length] = file.path + '/' + m[1];
                        }
                    } finally {
                        module.paths.shift();
                    }
                }
            }
        }));
});

var getRelativeImports = (p) => {
    relatives = [];
    packages = [];
    missing = {};
    missingPackages = [];
    project = p;
    return importer.import('gulp task to a Promise', {gulp})
        .then(gulpPromise => gulpPromise(['get relative imports']))
        .then(r => ({relatives, packages, missing, missingPackages}));
};
module.exports = getRelativeImports;