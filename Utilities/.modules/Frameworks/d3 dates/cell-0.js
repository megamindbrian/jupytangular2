var D3Node = require('d3-node');

var margin = {top: 30, right: 15, bottom: 35, left: 100},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var styles = `<style>
.chart {
	shape-rendering: crispEdges;
}

.mini text {
	font: 9px sans-serif;	
}

.main text {
	font: 12px sans-serif;	
}

.month text {
	text-anchor: start;
}

.todayLine {
	stroke: blue;
	stroke-width: 1.5;
}

.axis line, .axis path {
	stroke: black;
}

.miniItem {
	stroke-width: 12;	
}

.future {
	stroke: gray;
}

.past {
	stroke-opacity: .6;
	fill-opacity: .6;
}

.brush .extent {
	stroke: gray;
	fill: blue;
	fill-opacity: .165;
}
</style>`


var now = new Date();
var d3Swimlane = (events) => {
    var d3n = new D3Node(); // initializes D3 with container element 
    var d3 = d3n.d3;
    var data = events
        , lanes = data.lanes
        , items = data.items;

    var fill = d3.scaleOrdinal(d3.schemeCategory20);

    var miniHeight = lanes.length * 12 + 50
        , mainHeight = height - miniHeight - 50;

    var x = d3.scaleTime()
        .domain([d3.timeSunday(d3.min(items, function (d) {
            return d.start;
        })),
            d3.max(items, function (d) {
                return d.end;
            })])
        .range([0, width]);
    var x1 = d3.scaleTime().range([0, width]);

    var ext = d3.extent(lanes, function (d) {
        return d.id;
    });
    var y1 = d3.scaleLinear()
        .domain([ext[0], ext[1] + 1])
        .range([0, mainHeight]);
    var y2 = d3.scaleLinear()
        .domain([ext[0], ext[1] + 1])
        .range([0, miniHeight]);

    var chart = d3n.createSVG(
        width + margin.right + margin.left,
        height + margin.top + margin.bottom)
        .attr('class', 'chart');

    chart.append('defs').append('clipPath')
        .attr('id', 'clip')
        .append('rect')
        .attr('width', width)
        .attr('height', mainHeight);

    var main = chart.append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        .attr('width', width)
        .attr('height', mainHeight)
        .attr('class', 'main');

    var mini = chart.append('g')
        .attr('transform', 'translate(' + margin.left + ',' + (mainHeight + 70) + ')')
        .attr('width', width)
        .attr('height', miniHeight)
        .attr('class', 'mini');

    // draw the lanes for the main chart
    main.append('g').selectAll('.laneLines')
        .data(lanes)
        .enter().append('line')
        .attr('x1', 0)
        .attr('y1', function (d) {
            return Math.round(y1(d.id)) + 0.5;
        })
        .attr('x2', width)
        .attr('y2', function (d) {
            return Math.round(y1(d.id)) + 0.5;
        })
        .attr('stroke', function (d) {
            return d.label === '' ? 'white' : 'lightgray'
        });

    main.append('g').selectAll('.laneText')
        .data(lanes)
        .enter().append('text')
        .text(function (d) {
            return d.label;
        })
        .attr('x', -10)
        .attr('y', function (d) {
            return y1(d.id + .5);
        })
        .attr('dy', '0.5ex')
        .attr('text-anchor', 'end')
        .attr('class', 'laneText');

    // draw the lanes for the mini chart
    mini.append('g').selectAll('.laneLines')
        .data(lanes)
        .enter().append('line')
        .attr('x1', 0)
        .attr('y1', function (d) {
            return Math.round(y2(d.id)) + 0.5;
        })
        .attr('x2', width)
        .attr('y2', function (d) {
            return Math.round(y2(d.id)) + 0.5;
        })
        .attr('stroke', function (d) {
            return d.label === '' ? 'white' : 'lightgray'
        });

    mini.append('g').selectAll('.laneText')
        .data(lanes)
        .enter().append('text')
        .text(function (d) {
            return d.label;
        })
        .attr('x', -10)
        .attr('y', function (d) {
            return y2(d.id + .5);
        })
        .attr('dy', '0.5ex')
        .attr('text-anchor', 'end')
        .attr('class', 'laneText');

    // draw the x axis
    var xDateAxis = d3.axisBottom(x)
        .tickArguments(d3.timeMondays, (x.domain()[1] - x.domain()[0]) > 15552e6 ? 2 : 1)
        .tickFormat(d3.timeFormat('%d'))
        .tickSize(6, 0, 0);

    var x1DateAxis = d3.axisBottom(x1)
        .tickArguments(d3.timeDays, 1)
        .tickFormat(d3.timeFormat('%a %d'))
        .tickSize(6, 0, 0);

    var xMonthAxis = d3.axisTop(x)
        .tickArguments(d3.timeMonths, 1)
        .tickFormat(d3.timeFormat('%b %Y'))
        .tickSize(15, 0, 0);

    var x1MonthAxis = d3.axisTop(x1)
        .tickArguments(d3.timeMondays, 1)
        .tickFormat(d3.timeFormat('%b - Week %W'))
        .tickSize(15, 0, 0);

    main.append('g')
        .attr('transform', 'translate(0,' + mainHeight + ')')
        .attr('class', 'main axis date')
        .call(x1DateAxis);

    main.append('g')
        .attr('transform', 'translate(0,0.5)')
        .attr('class', 'main axis month')
        .call(x1MonthAxis)
        .selectAll('text')
        .attr('dx', 5)
        .attr('dy', 12);

    mini.append('g')
        .attr('transform', 'translate(0,' + miniHeight + ')')
        .attr('class', 'axis date')
        .call(xDateAxis);

    mini.append('g')
        .attr('transform', 'translate(0,0.5)')
        .attr('class', 'axis month')
        .call(xMonthAxis)
        .selectAll('text')
        .attr('dx', 5)
        .attr('dy', 12);

    // draw a line representing today's date
    main.append('line')
        .attr('y1', 0)
        .attr('y2', mainHeight)
        .attr('class', 'main todayLine')
        .attr('clip-path', 'url(#clip)');

    mini.append('line')
        .attr('x1', x(now) + 0.5)
        .attr('y1', 0)
        .attr('x2', x(now) + 0.5)
        .attr('y2', miniHeight)
        .attr('class', 'todayLine');

    // draw the items
    var itemRects = main.append('g')
        .attr('clip-path', 'url(#clip)');

    mini.append('g').selectAll('miniItems')
        .data(getPaths(items))
        .enter().append('path')
        .attr('class', function (d) {
            return 'miniItem ' + d.class;
        })
        .style('stroke', function (d) {
            return fill(d.lane);
        })
        .style('fill', function (d) {
            return fill(d.lane);
        })
        .attr('d', function (d) {
            return d.path;
        });

    // draw the selection area
    var brush = d3.brushX(x)
        .extent([d3.timeMonday(now), d3.timeSaturday.ceil(now)]);

    mini.append('g')
        .attr('class', 'x brush')
        .call(brush)
        .selectAll('rect')
        .attr('y', 1)
        .attr('height', miniHeight - 1);

    mini.selectAll('rect.background').remove();

    function display() {
        var rects, labels
            , minExtent = d3.timeMonday(now)
            , maxExtent = d3.timeSaturday.ceil(now)
            , visItems = items.filter(function (d) {
            return d.start < maxExtent && d.end > minExtent
        });

        mini.select('.brush').call(brush.extent([minExtent, maxExtent]));

        x1.domain([minExtent, maxExtent]);

        if ((maxExtent - minExtent) > 1468800000) {
            x1DateAxis
                .tickArguments([d3.timeMondays.every(1)])
                .tickFormat(d3.timeFormat('%a %d'))
            x1MonthAxis
                .tickArguments([d3.timeMonday.every(1)])
                .tickFormat(d3.timeFormat('%b - Week %W'))
        }
        else if ((maxExtent - minExtent) > 172800000) {
            x1DateAxis
                .tickArguments([d3.timeDay.every(1)])
                .tickFormat(d3.timeFormat('%a %d'))
            x1MonthAxis
                .tickArguments([d3.timeMonday.every(1)])
                .tickFormat(d3.timeFormat('%b - Week %W'))
        }
        else {
            x1DateAxis
                .tickArguments([d3.timeHour.every(4)])
                .tickFormat(d3.timeFormat('%I %p'))
            x1MonthAxis
                .tickArguments([d3.timeDays.every(1)])
                .tickFormat(d3.timeFormat('%b %e'))
        }


        //x1Offset.range([0, x1(d3.time.day.ceil(now) - x1(d3.time.day.floor(now)))]);

        // shift the today line
        main.select('.main.todayLine')
            .attr('x1', x1(now) + 0.5)
            .attr('x2', x1(now) + 0.5);

        // update the axis
        main.select('.main.axis.date').call(x1DateAxis);
        main.select('.main.axis.month').call(x1MonthAxis)
            .selectAll('text')
            .attr('dx', 5)
            .attr('dy', 12);

        // upate the item rects
        rects = itemRects.selectAll('rect')
            .data(visItems, function (d) {
                return d.id;
            })
            .attr('x', function (d) {
                return x1(d.start);
            })
            .attr('width', function (d) {
                return x1(d.end) - x1(d.start);
            })

        rects.enter().append('rect')
            .attr('x', function (d) {
                return x1(d.start);
            })
            .attr('y', function (d) {
                return y1(d.lane);
            })
            .attr('width', function (d) {
                return x1(d.end) - x1(d.start);
            })
            .attr('height', function (d) {
                return y1(1);
            })
            .attr('class', function (d) {
                return 'mainItem ' + d.class;
            })
            .style('stroke', function (d) {
                return fill(d.lane);
            })
            .style('fill', function (d) {
                return fill(d.lane);
            })

        rects.exit().remove();

        // update the item labels
        labels = itemRects.selectAll('text')
            .data(visItems, function (d) {
                return d.id;
            })
            .attr('x', function (d) {
                return x1(Math.max(d.start, minExtent)) + 2;
            });

        labels.enter().append('text')
            .text((d) => d.desc)
            .attr('x', function (d) {
                return x1(Math.max(d.start, minExtent)) + 2;
            })
            .attr('y', function (d) {
                return y1(d.lane) + .4 * y1(1) + 0.5;
            })
            .attr('text-anchor', 'start')
            .attr('class', 'itemLabel');

        labels.exit().remove();

        return styles + d3n.svgString();
    }

    function moveBrush(origin) {
        var point = x.invert(origin[0])
            , halfExtent = (brush.extent()[1].getTime() - brush.extent()[0].getTime()) / 2
            , start = new Date(point.getTime() - halfExtent)
            , end = new Date(point.getTime() + halfExtent);

        brush.extent([start, end]);
    }

    // generates a single path for each item class in the mini display
    // ugly - but draws mini 2x faster than append lines or line generator
    // is there a better way to do a bunch of lines as a single path with d3?
    function getPaths(items) {
        var paths = {}, d, offset = .5 * y2(1) + 0.5, result = [];
        for (var i = 0; i < items.length; i++) {
            d = items[i];
            const key = d.class + ' ' + d.class + '-' + d.lane;
            if (!paths[key]) paths[key] = {class: key, path: '', lane: d.lane};
            paths[key].path += ['M', x(d.start), (y2(d.lane) + offset), 'H', x(d.end)].join(' ');
        }
        return Object.keys(paths).map(k => paths[k]);
    }

    return display();
}

module.exports = d3Swimlane;
d3Swimlane;