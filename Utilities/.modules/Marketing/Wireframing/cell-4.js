var exec = require('child_process').exec;
child = exec('npm install nodegit');
child.stderr.pipe(process.stderr);
child.stdout.pipe(process.stdout);
0