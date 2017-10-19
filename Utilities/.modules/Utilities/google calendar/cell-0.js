var googleAuth = require('google-auth-library');
var importer = require('../Core');

// Authorize a client with the loaded credentials, then call the
// Google Calendar API.
var oauth2Client;
var getOauthClient = (options = {}) => {
    return importer.import('google authorize.ipynb')
        .then(r => r.authorize(options.scopes || [
            'https://www.googleapis.com/auth/calendar']))
        .then(c => {
            var auth = new googleAuth();
            oauth2Client = new auth.OAuth2(
                c.clientId_, c.clientSecret_, c.redirectUri_);
            oauth2Client.credentials = c.credentials;
            return oauth2Client;
        })
        .then(auth => (options.auth = auth))
};
module.exports = getOauthClient;
getOauthClient;
