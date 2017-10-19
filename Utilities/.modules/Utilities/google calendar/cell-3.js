var importer = require('../Core');

$$.async();
var filterDistant, getOauthClient, listEvents, graphDates;
importer.import([
    'import google calendar api',
    'how to list events',
    'number of days between events',
    'display recurrence line graph'
])
    .then(r => {
        getOauthClient = r[0];
        listEvents = r[1];
        filterDistant = r[2];
        graphDates = r[3];
    })
    .then(() => listEvents({
        q: 'period',
        calendarId: 'p4685f6at8ccctenocjlqgnqss@group.calendar.google.com'
    }))
    .then(r => $$.svg(graphDates(filterDistant(r))))
    .catch(e => $$.sendError(e));
