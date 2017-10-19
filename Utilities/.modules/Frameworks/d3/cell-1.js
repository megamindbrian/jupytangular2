var execSync = require('child_process').execSync;
try {
    require.resolve('d3-cloud');
    require.resolve('canvas');
} catch (e) {
    execSync('npm install "github:gulpjs/gulp.git#4.0" gulp-tap d3-node d3-cloud canvas');
}

var cloud = require('d3-cloud');
var Canvas = require('canvas');

var d3CloudToSVG = (wordCount) => {
    return new Promise(resolve => {
        cloud()
            .canvas(function () {
                return new Canvas(1, 1);
            })
            .size([width, height])
            .words(wordCount)
            .padding(0)
            .rotate(function () {
                return ~~(Math.random() * 120) - 60;
            })
            .font('Impact')
            .fontSize(function (d) {
                return d.size;
            })
            .on('end', function (wordCount) {
                resolve(drawD3Cloud(wordCount));
            })
            .start();
    });
};
d3CloudToSVG;