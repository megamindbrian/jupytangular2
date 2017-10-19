var fs = require('fs');
var importer = require('../Core');
var glob = require('glob');
var path = require('path');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var project = PROFILE_PATH + '/Conversations';

var readLinkedInThread;
var readThread = (thread) => {
    var threadId = thread.replace(/^\/|\/$/ig, '').split('/').pop();
    var file = glob.sync('**/' + threadId + '-*.json', {cwd: project})[0];
    var messages;
    try {
        messages = require(file)
    }
    catch (e) {
        messages = []
    }
    return readLinkedInThread(thread, messages)
        .then(t => {
            var filename = project + '/'
                + t.thread.replace(/^\/|\/$/ig, '').split('/').pop()
                + '-' + t.participants
                    .map(p => p.name).join('')
                    .replace(/[^a-z]/ig, '_') + '.json';
            fs.writeFileSync(filename, JSON.stringify(t, null, 4));
            return t;
        });
};

var listThreads = () => {
    var threads = [];
    return readLinkedInProfileInfo()
    // show my profile info
        .then(() => listLinkedInThreads(threads))
        // list all message threads
        .then(r => fs.writeFileSync(
            project + '/threads.json',
            JSON.stringify(r, null, 4)))
        .catch(e => console.log(e))
};

var runSeleniumCell;
var loginLinkedIn, readLinkedInProfileInfo, listLinkedInThreads;
var scrapeLinkedInThreads = () => {
    var threads, fresh;

    return importer.import([
        'selenium cell'
    ])
        .then(r => {
            runSeleniumCell = r[0];
            return runSeleniumCell([
                'log in linkedin',
                'list LinkedIn threads',
                'scrape LinkedIn profile'
            ]);
        })
        .then(r => {
            loginLinkedIn = r[0];
            listLinkedInThreads = r[1];
            readLinkedInProfileInfo = r[2];
            return loginLinkedIn();
        })
        .then(() => {
            try {
                threads = JSON.parse(fs.readFileSync(project + '/threads.json'));
            }
            catch (e) {
                threads = [];
            }
            return runSeleniumCell('messages LinkedIn thread');
        })
        // scrape each thread
        .then(func => {
            readLinkedInThread = func;
            var threadCount = threads.length;
            var ids = threads.map(t => t.replace(/^\/|\/$/ig, '').split('/').pop());
            var files = glob.sync('**/@(' + ids.join('|') + ')-*.json', {
                cwd: project
            });
            fresh = threads.filter(t => {
                var threadId = t.replace(/^\/|\/$/ig, '').split('/').pop();
                var file = files.filter(f => f.indexOf(threadId) > -1)[0];
                return !(typeof file !== 'undefined'
                    && fs.existsSync(path.join(project, file)));
            });
            const percent = Math.round((threadCount - fresh.length) / threadCount * 100);
            console.log((threadCount - fresh.length) + ' / ' + threadCount + ' : '
                + percent
                + '%');
            console.log(fresh.slice(0, 10));
            return percent === 100 ? listThreads() : [];
        })
        .then(() => importer.runAllPromises(fresh.slice(0, 10)
            .map(t => ((resolve) => readThread(t).then((r) => resolve(r))))))
};
module.exports = scrapeLinkedInThreads;