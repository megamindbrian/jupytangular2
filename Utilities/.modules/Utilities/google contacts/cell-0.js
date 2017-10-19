var google = require('googleapis');
var people = google.people('v1');
var importer = require('../Core');

var options = {
    scopes: [
        'https://www.googleapis.com/auth/contacts'
    ]
};

var findMatch = (arr, contact) => {
    return arr.filter(c => typeof c.names !== 'undefined'
        && c.names[0].displayName
            .match(new RegExp(contact.displayName, 'ig')));
}

var googlePromise = (func) => {
    return new Promise((resolve, reject) => func((err, response) => {
        if (err) reject(err);
        try {
        } catch (e) {
            reject(e);
        }
        setTimeout(() => resolve(response), 100);
    })).catch(e => console.log(e));
};

var contactCache = [];
var listContacts = (contact, done = false) => {
    // return matching contacts or empty if there are no more pages
    return googlePromise(
        people.people.connections.list.bind(people.people.connections, {
            resourceName: 'people/me',
            personFields: 'emailAddresses,names,birthdays,phoneNumbers',
            auth: options.auth,
            pageToken: options.pageToken
        }))
        .then(r => {
            options.pageToken = r.nextPageToken;
            done = !options.pageToken;
            return r.connections;
        })
        .then(r => {
            for (var c of r) {
                contactCache.push(c);
            }
            if (done) {
                return findMatch(contactCache, contact);
            }
            return listContacts(contact, done);
        })
        .catch(e => console.log(e))
};

var updateContact = (contact) => {
    return importer.import('import google calendar api')
        .then(getOauthClient => getOauthClient(options))
        .then(() => {
            if (contactCache.length > 0) {
                return findMatch(contactCache, contact);
            }
            options.nextPageToken = null;
            contactCache = [];
            return listContacts(contact);
        })
        .catch(e => console.log(e))
};

module.exports = updateContact;