var io = require('socket.io-client');
var importer = require('../Core');

var fuseSearch, interpretObject;
var searchAll = (queries, root = '') => {
    return importer.import('interpret all notebooks.ipynb')
        .then((f) => {
            fuseSearch = f['fuseSearch'];
            interpretObject = f['interpretObject'];
        })
        // use Promise.all to do all of your code searches up front
        .then(r => typeof queries === 'string'
            ? fuseSearch(queries)
            : Promise.all(queries.map(fuseSearch)))
        .then(r => interpretObject(r))
};

var searchHandler = () => {
    var client = io('https://localhost:8000', {
        secure: true,
        rejectUnauthorized: false
    });
    return new Promise(resolve => {
        console.log('Search handler');
        client.on('resolve', (name, search) => {
            console.log('searching...');
            if (name === 'SearchService.prototype.search') {
                client.emit('result', 'SearchService.prototype.search',
                    'Searching notebooks for ' + search);
                // TODO: include gulp notebook search, .bash_sessions,
                //    selenium scripts, stack overflow, github, 
                Promise.all([
                    searchAll(search),
                    importer.import('search notebooks using gulp')
                        .then(searchNotebooks => searchNotebooks(search))
                ])
                    .then(r => client.emit('result', 'SearchService.prototype.results', [].concat(...r)))
                    .catch(e => console.log(e))
            }
        });
        client.emit('handle', 'SearchService', () => resolve());
        client.on('error', e => console.log(e))
    })
};
module.exports = searchHandler;
