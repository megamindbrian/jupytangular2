var importer = require('../Core')
var bodyParser = require('body-parser');
var io = require('socket.io-client');
var express = require('express');
var client = io('https://localhost:8000', {
    secure: true,
    rejectUnauthorized: false
});

var promisifyChrome = (...args) => {
    return new Promise((resolve, reject) => {
        var subscriber;
        subscriber = client.on('result', function (name, err, data) {
            // TODO: not just verify the service,
            //   also verify the tab id matches
            if (name === 'BrowserService.prototype.chrome') {
                subscriber.off();
                if (err !== null) {
                    return reject(err);
                }
                return resolve.apply(this, JSON.parse(data));
            }
        });
        client.emit.apply(client, [
            'call',
            'BrowserService.prototype.chrome',
            ...args
        ]);
    });
};

var tabId;
var seleniumServer = () => {
    const selenium = express();
    const server = require('http').createServer(selenium);
    selenium.use(bodyParser.json());    // to support JSON-encoded bodies
    selenium.use(bodyParser.urlencoded({// to support URL-encoded bodies
        extended: true
    }));
    // TODO: import the rest of the modules in this script
    return importer.getCells(__dirname + '/selenium server.ipynb')
        .then(cells => {
            for (const c of cells.slice(1)) /* exclude this cell */ {
                const mod = importer.runInNewContext(c.source.join(''), {
                    __filename: __dirname + '/selenium server.ipynb',
                    promisifyChrome,
                    getTab: () => tabId,
                    setTab: (id) => (tabId = id)
                }, {}, false);
                if (typeof mod !== 'undefined' && typeof mod.router !== 'undefined') {
                    selenium.use('/wd/hub', mod.router);
                }
            }
            return server.listen(4444);
        });
};
module.exports = seleniumServer;