var importer = require('../Core');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var PROJECT_PATH = PROFILE_PATH + '/Timeline';

var loadLocations, averageDestinations, reconcileTimeline,
    runSeleniumCell, geoLocations, readAllPages, getGoogleTimeline,
    cancelled = false;

$$.async();
importer.import([
    'load locations export data',
    'average latitude longitude',
    'reconcile timeline calendar',
    'selenium cell'
])
    .then(r => {
        loadLocations = r[0];
        averageDestinations = r[1];
        reconcileTimeline = r[2];
        runSeleniumCell = r[3];
    })
    .then(() => {
        return loadLocations('/Users/briancullinan/Downloads/Takeout 7/Location History/Location History.json');
    })
    .then(geo => {
        geoLocations = geo;
        return runSeleniumCell([
            'log in google',
            'read google timeline',
            'scrape google timeline'
        ]);
    })
    .then(r => {
        readAllPages = r[1];
        getGoogleTimeline = r[2];
    })
    .then(() => getGoogleTimeline())
    .then(() => importer.runAllPromises(readAllPages().map(promise => resolve => {
        if (cancelled) return resolve();
        return new Promise(promise)
            .catch(e => console.log(e))
            .then(timelineLocations => {
                if (timelineLocations.length === 0) return;
                var date = timelineLocations[0].timeline;
                if (typeof geoLocations[date] === 'undefined') return;
                /*
                if(!fs.existsSync(PROJECT_PATH + '/timeline-' + date + '_.json')) {
                    return;
                }
                var timelineData = JSON.parse(
                    fs.readFileSync(PROJECT_PATH + '/timeline-' + date + '_.json')
                    .toString());
                */
                console.log(date);
                var d = averageDestinations(geoLocations[date], timelineLocations);
                if (d.length === 0) {
                    return;
                }
                return reconcileTimeline(d, date);
            })
            .then(r => {
                if (typeof r !== 'undefined' && r.length > 0) cancelled = true;
                resolve(r);
            })
            .catch(e => console.log(e))
    })))
    .then(r => $$.sendResult(r.filter(o => typeof o !== 'undefined')))
    .catch(e => $$.sendError(e));
