var google = require('googleapis');
var calendar = google.calendar('v3');
var importer = require('../Core');

var getOauthClient, listEvents, correctCalendarId;
// test Google calendar API?
var runTodaysEvents = () => {
    var options = {}, commands = [];
    var eventId, isError, commandResult;
    return importer.import([
        'list events',
        'import google calendar api',
        'lookup calendar name'
    ])
        .then(r => {
            listEvents = r[0];
            getOauthClient = r[1];
            correctCalendarId = r[2];
            return getOauthClient(options);
        })
        .then(() => correctCalendarId(Object.assign(options, {
            calendarId: 'commands'
        })))
        .then(() => listEvents({
            auth: options.auth,
            calendarId: options.calendarId,
            timeMin: '12 AM today',
            timeMax: 'next hour today'
        }))
        .then(events => {
            // filter processed
            commands = events
                .filter(e => {
                    const matches = events
                        .filter(m => 'Result: ' + e.event.summary === m.event.summary
                            && e.event.start.dateTime === m.event.start.dateTime);
                    return e.event.summary.indexOf('Result:') === -1 && matches.length === 0
                })
                // TODO: change this slice
                .slice(0, 1);
            if (commands.length === 0) throw new Error('No events!');
        })
        // process the command, this should return a function to be called after event
        .then(() => importer.import(commands[0].event.summary))
        // create a new events to store the results
        .then(r => {
            commandResult = r;
            return new Promise((resolve, reject) => {
                isError = false;
                calendar.events.insert(Object.assign({}, {
                    calendarId: options.calendarId,
                    auth: options.auth,
                    resource: {
                        start: commands[0].event.start,
                        end: commands[0].event.end,
                        summary: 'Result: ' + commands[0].event.summary,
                        description: 'starting ' + r.filename + ' - ' + commandResult,
                        colorId: 9
                    }
                }), (err, response) => {
                    if (err) reject(err);
                    try {
                        resolve(response);
                    } catch (e) {
                        reject(e);
                    }
                });
            })
        })
        // store the event in memory for updating by id later
        .then(event => (eventId = event.id))
        // TODO: add parameter input from event content
        // TODO: check for retry count from event content
        // TODO: add time limits for successful commands
        .then(r => commandResult())
        .catch(e => {
            isError = true;
            return Object.getOwnPropertyNames(e).reduce((alt, key) => {
                alt[key] = e[key];
                return alt;
            }, {})
        })
        // update the calendar event with the results
        .then(r => new Promise((resolve, reject) => {
            if (typeof eventId === 'undefined') {
                return resolve(r);
            }
            calendar.events.patch({
                eventId: eventId,
                calendarId: options.calendarId,
                auth: options.auth,
                resource: {
                    description: JSON.stringify(r, null, 4),
                    colorId: isError ? 11 : 10
                }
            }, (err, response) => {
                if (err) reject(err);
                try {
                    resolve(response);
                } catch (e) {
                    reject(e);
                }
            });
        }))
};
module.exports = runTodaysEvents;

// node -e "require('/Users/briancullinan/jupytangular2/Core').import('run todays calendar events').then(runner => runner()).then(e => process.exit(e)).catch(e=>{console.log(e); process.exit(e) });"

// echo "require('/Users/briancullinan/jupytangular2/Core').import('scrape facebook events').then(runner => runner()).then(e=>{console.log(e); process.exit(e) }).catch(e=>{console.log(e); process.exit(e) });" | node