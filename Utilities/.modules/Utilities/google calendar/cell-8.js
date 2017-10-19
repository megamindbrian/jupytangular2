var importer = require('../Core');

var options = {};
var listEvents, getOauthClient, sumEvents, d3PieChart;

var calendarSearchToPieChart = (searches) => {
    return importer.import([
        'list events',
        'import google calendar api',
        'sum a list of events',
        'd3 pie chart'
    ])
        .then(r => {
            listEvents = r[0];
            getOauthClient = r[1];
            sumEvents = r[2];
            d3PieChart = r[3];
            return getOauthClient(options);
        })
        .then(() => {
            return importer.runAllPromises(searches
                .map(s => (resolve) => listEvents({
                    auth: options.auth,
                    q: s
                })
                    .then(r => {
                        //console.log(s);
                        //console.log(r.map(e => e.event.summary));
                        resolve({label: s, value: sumEvents(r)})
                    })
                    .catch(e => console.log(e))))
        })
        .then(r => d3PieChart(r))
        .catch(e => console.log(e))
}

$$.async();
calendarSearchToPieChart([
    'study sauce',
    'portal',
    'renewal',
    'work on sos',
    'jupyter',
    'jupytangular',
    'unit tests',
    'selenium',
    'angular',
    'mind spree',
    '"c#"',
    'docker'
])
    .then(r => $$.svg(r))
    .catch(e => $$.sendError(e))
