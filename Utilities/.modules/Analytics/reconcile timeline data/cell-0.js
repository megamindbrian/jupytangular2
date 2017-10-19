var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var path = require('path');
var fs = require('fs');
var TIMELINE_DIR = path.join(process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE, 'Timeline');

var getTimelineCache = (newDate) => {
    var newKey = newDate.getDate()
        + months[newDate.getMonth()]
        + (newDate.getFullYear() + '').substr(2, 2);
    try {
        var locations = JSON.parse(fs.readFileSync(path.join(TIMELINE_DIR, 'location-' + dateKey + '.json')));
    } catch (e) {
        if (e.code !== 'EEXIST') {
            throw e;
        }
    }
    try {
        var timeline = JSON.parse(fs.readFileSync(path.join(TIMELINE_DIR, 'timeline-' + dateKey + '.json')));

    } catch (e) {
        if (e.code !== 'EEXIST') {
            throw e;
        }
    }
    return {locations: locations, timeline: timeline};
};
module.exports = getTimelineCache;