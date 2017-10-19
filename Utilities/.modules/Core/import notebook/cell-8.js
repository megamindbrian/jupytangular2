// initialize
var path = require('path');
var requireCode = (code, pathToCode, global) => {
    var Module = require('module').Module;

    // must have a new name for every generation otherwise cache will be returned
    var filepath = path.resolve(process.cwd(), pathToCode);
    var dirname = path.dirname(filepath);

    var cachedModule = Module._cache[filepath];
    if (cachedModule && global.useCache !== false) {
        global.module = cachedModule;
        return cachedModule.exports;
    }

    var mod = new Module(filepath, global.module);
    global.module = mod;
    Module._cache[filepath] = mod;

    mod.filename = filepath;
    mod.paths = Module._nodeModulePaths(dirname);

    mod._compile(code, filepath);
    mod.loaded = true;

    global.exports = mod.exports;
    return mod.exports;
};

// $$.done() for our dumb parser
