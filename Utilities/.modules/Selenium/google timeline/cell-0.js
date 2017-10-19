var importer = require('../Core');

var client, loginGoogle, getAllXPath;
var getClient = () => {
    return importer.import('webdriver client')
        .then(clientFactory => {
            client = clientFactory();
            return importer.import(
                'decrypt password',
                {client: client()});
        })
        .then(getCredentials => importer.import([
            'log in Google',
            'get all elements'
        ], {client, getCredentials}))
        .then(r => {
            loginGoogle = r[0];
            getAllXPath = r[1];
            return client;
        });
};
module.exports = getClient;
