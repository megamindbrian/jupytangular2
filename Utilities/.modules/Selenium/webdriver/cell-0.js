var webdriverio = require('webdriverio');
var sync = require('wdio-sync')
var fs = require('fs');
var importer = require('../Core');
var path = require('path');

var TOKEN_DIR = path.join(process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE, '.credentials');
var SESSIONS_PATH = path.join(TOKEN_DIR, 'sessions.txt');

var createWebdriverClient = (host, port) => {
    var webdriverServer = {
        sync: true,
        debug: true,
        host: host || 'localhost',
        port: port || 4444,
        baseUrl: 'https://webdriver.io',
        pageLoadStrategy: 'eager',
        connectionRetryTimeout: 10000,
        desiredCapabilities: {
            browserName: 'chrome',
            chromeOptions: {
                prefs: {
                    'download.default_directory': '/data/downloads',
                    'profile.default_content_setting_values.notifications': 2
                },
                args: [
                    // TODO: https://superuser.com/questions/461035/disable-google-chrome-session-restore-functionality
                    'user-data-dir=/usr/profile',
                    'start-fullscreen',
                    'no-sandbox',
                    'disable-session-crashed-bubble',
                    'disable-infobars',
                    'disable-geolocation',
                    'disable-notifications',
                    'show-saved-copy',
                    'silent-debugger-extension-api'
                    //'kiosk'
                ]
            }
        }
    };

    console.log('Initializing webdriver on ' + webdriverServer.host);
    var client = webdriverio.remote(webdriverServer);
    sync.wrapCommands(client, [], []);
    client.$ = (...config) => client.element.apply(client, config)
    client.$$ = (...config) => client.elements.apply(client, config).value
    client.on('error', function (e) {
        console.log(e);
        this.endAll();
    });
    client.on('end', function () {
        console.log('Daemon: Closing browser');
    });
    client.on('result', function (result) {
        //console.log(result);
    });
    return client
        .then(() => {
            var sessions;
            try {
                sessions = fs.readFileSync(SESSIONS_PATH)
                    .toString().split('\n');
            } catch (e) {
                sessions = [];
            }
            // validate and close each session
            return importer.runAllPromises(sessions.map(s => (resolve) => {
                client.requestHandler.sessionID = s
                client.session()
                    .then(s => resolve(s.sessionId))
                    .catch(e => resolve(null));
            }))
                .then(r => r
                    .filter(sess => typeof sess !== 'undefined' && sess !== null)
                    .filter((elem, pos, arr) => arr.indexOf(elem) === pos));
        })
        // save current session
        .then(validSessions => {
            if (validSessions.length == 0) {
                // save new session
                client.requestHandler.sessionID = null;
                // TODO: fix this, doesn't work on second init, keeps opening new windows
                return client.init();
            } else {
                // set to first valid
                client.requestHandler.sessionID = validSessions[0];
            }
        })
        .then(r => {
            fs.writeFileSync(
                SESSIONS_PATH,
                client.requestHandler.sessionID + '\n')
            return client.windowHandles();
        })
        .then(r => {
            if (r.value.length == 0) {
                return client.newWindow();
            }
        })
        /*
        .then(() => client.requestHandler.create({
            path: '/status',
            method: 'GET'
        }))
        */
        .catch(e => console.log(e))
};
module.exports = createWebdriverClient;
createWebdriverClient;
