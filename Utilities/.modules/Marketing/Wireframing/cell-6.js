var exec = require('child_process').exec;
child = exec('cd sosmethod && npm install -f');
child.stderr.pipe(process.stderr);
child.stdout.pipe(process.stdout);
0