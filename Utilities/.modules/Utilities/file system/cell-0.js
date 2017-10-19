var path = require('path');
var execSync = require('child_process').execSync;
try {
    require.resolve('mock-require');
    require.resolve('unionfs');
    require.resolve('typescript');
    require.resolve('memfs');
} catch (e) {
    execSync('npm install mock-require memfs typescript unionfs');
}
// TODO: use https://github.com/jhnns/rewire for replacing variables, something like https://github.com/mariocasciaro/object-path?

var mockTypescriptFs = (root, data) => {
    var mock = require('mock-require');
    var memfs = require('memfs');
    var mem = new memfs.Volume;
    var unionfs = require('unionfs');
    var fs = require('fs');

    mem.mountSync(root, data);

    // Create a union of two file systems:
    unionfs
        .use(fs)
        .use(mem)
        .replace(fs);

    var ts = require('typescript');
    var tsMock = Object.assign({}, ts);
    var toMock = {
        readFile: 'readFileSync',
        realpath: 'realpathSync',
        writeFile: 'writeFileSync',
        fileExists: 'existsSync',
        directoryExists: 'existsSync',
        createDirectory: 'mkdirSync',
        getDirectories: 'readdirSync'
    };
    Object.keys(toMock)
        .forEach(k => {
            if (typeof mem[toMock[k]] === 'function') {
                tsMock.sys[k] = function () {
                    // typescript.sys functions return defined on error
                    try {
                        return mem[toMock[k]].apply(mem, arguments);
                    } catch (e) {
                        return;
                    }
                };
            }
        });

    mock('typescript', tsMock);
    return mock;
};
mockTypescriptFs;

// TODO: search github for projects like graceful-fs and then search google for projects that use graceful-fs and see if we can record some filesystem activity
