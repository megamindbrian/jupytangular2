var google = require('googleapis');
var chrono = require('chrono-node');
    var startDate = chrono.parseDate(event.start.dateTime);
    var day = new Date(Math.floor(startDate.getTime() / 60 / 1000 / 60 / 24) * 24 * 60 * 60 * 1000);
    var dayEnd = new Date(day);
    dayEnd.setDate(dayEnd.getDate() + 1);
    var todaysEvents;
    if(typeof eventCache[options.calendarId] === 'undefined') {
        eventCache[options.calendarId] = {};
    }
    if(typeof eventCache[options.calendarId][day.getTime()] !== 'undefined') {
        todaysEvents = Promise.resolve(eventCache[options.calendarId][day.getTime()])
    } else {
        console.log(day);
        todaysEvents = importer.import([
            'list events',
            'convert date iso'
        ])
            .then(r => r.listEvents({
                auth: options.auth,
                calendarId: options.calendarId,
                timeMin: r.ISODateString(day),
                timeMax: r.ISODateString(dayEnd)
            }))
    }
    return todaysEvents
            eventCache[options.calendarId][day.getTime()] = m;
                                    && new Date(match.event.start.dateTime).getTime() === new Date(event.start.dateTime).getTime());
                        try {
                            return JSON.parse(match.event.description)
                        } catch (e) {
                            return [];
                        }
                    }));
                var newDescription = JSON.stringify(unique, null, 4);
                if(matches[0].event.description !== newDescription) {
                }
                actionsArray.push(googlePromise(