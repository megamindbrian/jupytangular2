var execSync = require('child_process').execSync;
try {
    require.resolve('d3-node');
} catch (e) {
    execSync('npm install "d3-node');
}

var D3Node = require('d3-node');

var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

function drawD3Cloud(wordCount) {
    var d3n = new D3Node(); // initializes D3 with container element 
    var d3 = d3n.d3;
    var fill = d3.scaleOrdinal(d3.schemeCategory20);

    d3n.createSVG(
        width + margin.left + margin.right,
        height + margin.top + margin.bottom)
        .append('g')
        .attr(
            'transform',
            'translate(' + (margin.left + width / 2) + ',' + (margin.top + height / 2) + ')')
        .selectAll('text')
        .data(wordCount)
        .enter().append('text')
        .style('font-size', function (d) {
            return d.size + 'px';
        })
        .style('font-family', 'Impact')
        .style('fill', function (d, i) {
            return fill(i);
        })
        .attr('text-anchor', 'middle')
        .attr('transform', function (d) {
            return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
        })
        .text(function (d) {
            return d.text;
        });

    return d3n.svgString();
};
drawD3Cloud;