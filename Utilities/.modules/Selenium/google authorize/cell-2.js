var importer = require('../Core');

var approveSelenium = (authUrl) => {
    return client
        .url(authUrl)
        .loginGoogle()
        .waitForVisible('#scope0 + button', 3000)
        .moveToObject('#scope0')
        .moveToObject('#submit_approve_access')
        .waitForVisible('#submit_approve_access content', 3000)
        .click('#submit_approve_access content')
        .waitForVisible('#code', 3000)
        .getValue('#code');
};

var client, getCredentials;
var authorizeSelenium = (authUrl) => {
    console.log('Authorizing: ' + authUrl);
    return importer.import('selenium docker')
        .then(seleniumDocker => importer.import('set up selenium server', {seleniumDocker}))
        .then(getSeleniumServer => getSeleniumServer('act-selenium'))
        .then(() => importer.import('webdriver client'))
        .then(createClient => {
            client = createClient('localhost', 4444);
            return importer.import('decrypt password', client);
        })
        .then(r => {
            getCredentials = r;
            return importer.import('log in Google', {client, getCredentials});
        })
        .then(() => approveSelenium(authUrl))
        .catch(e => console.log(e))
};
if (typeof client !== 'undefined'
    && typeof client.authorizeSelenium === 'undefined') {
    client.addCommand('authorizeSelenium', authorizeSelenium);
}
module.exports = authorizeSelenium;