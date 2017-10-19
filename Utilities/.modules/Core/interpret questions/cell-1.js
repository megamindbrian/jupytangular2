var path = require('path');
var getCells = require('../Core').getCells;
var cacheCells = (cells, notebook) => {
}; // defined below
// interpret notebooks by importing them in to cache
var cacheNotebook = (notebook) => {
    return getCells(notebook, ['*', 'markdown', 'code'])
        .then(cells => cacheCells(cells, notebook));
};
module.exports = cacheNotebook;