var importer = require('../Core');

$$.async();
var sumEvents, listEvents, ISODateString;
importer.import('import google calendar api')
    .then(getOauthClient => importer.import([
        'how to list events',
        'sum a list of events',
        'convert date to ISO'
    ], {getOauthClient}))
    .then(r => {
        listEvents = r[0];
        sumEvents = r[1];
        ISODateString = r[2];
    })
    .then(() => listEvents({
        timeMin: ISODateString(new Date('2016/09/22')),
        timeMax: ISODateString(new Date('2017/09/22')),
        q: 'study sauce'
    }))
    .then(r => $$.sendResult(sumEvents(r)))
    .catch(e => $$.sendError(e));
