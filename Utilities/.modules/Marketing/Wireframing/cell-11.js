$$.async();
const url = 'act.com';
const options = {zoom: .5, width: 680, 'crop-h': 400, 'javascript-delay': 1000};
const encode = require('base64-stream').encode();
const spawn = require('child_process').spawn;
const myOptions = []
    .concat.apply(['-q', '-f', 'jpeg'], Object.keys(options || {}).map(k => ['--' + k, options[k]]));
const wk = spawn('xvfb-run', ['-a', '-s', '-screen 0 640x480x16', 'wkhtmltoimage', ...myOptions, url, '-']);
console.log(['-a', '-s', '-screen 0 640x480x16', 'wkhtmltoimage', ...myOptions, url, '-'].join(' '));
var out = '';
wk.stderr.on('data', (d) => console.log(d));
wk.stdout.pipe(encode).on('data', d => out += d.toString()).on('finish', () => $TS.jpg(out));