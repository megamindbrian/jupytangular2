// subtract the events from the previous one
var filterDistant = (events, days = 28) => {
    var contributing = [];
    events.sort((a, b) => a.start - b.start);
    events.forEach((e, i) => {
        if (i == 0) {
            return;
        }
        var diff = (e.start.getTime() - events[i - 1].start.getTime())
            / 1000 / 60 / 60 / 24;
        // if it is greater than 1 months it can't help our graph
        if (diff < days && diff > 0) {
            contributing[contributing.length] = {
                days: diff,
                start: e.start,
                event: e.event,
                i: contributing.length
            };
        }
    });
    return contributing;
};
module.exports = filterDistant;
filterDistant;

    