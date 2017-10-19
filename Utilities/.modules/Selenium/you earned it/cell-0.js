var importer = require('../Core');

var loginYouEarnedIt = () => {
    var credentials = getCredentials('swiftpage.youearnedit.com');
    return client
        .click('input[name="user[login]"]')
        .keys(credentials.username)
        .pause(1000)
        .click('input[name="user[password]"]')
        .keys(credentials.password)
        .pause(1000)
        .submitForm('form[action]')
        .pause(2000)
}

var doHighFive = (el) => {
    return client.elementIdClick(el)
        .pause(1000)
        .isVisible('//div[contains(@class, "button")][contains(., "Continue")]')
        .then(is => is
            ? client.click('//div[contains(@class, "button")][contains(., "Continue")]')
            : Promise.resolve([]))
    // TODO: check for multiple dialog?
}

var highFive = () => {
    return client.url('https://swiftpage.youearnedit.com/posts')
        .pause(2000)
        .isExisting('form[action*="sign_in"]')
        .then(is => is ? loginYouEarnedIt() : Promise.resolve([]))
        .elements('//span[not(contains(@class, "disabled"))]/i[contains(@class, "High-Five")]')
        .then(els => {
            return importer.runAllPromises(els.value
                .map(el => resolve => doHighFive(el.ELEMENT)
                    .then(() => resolve())
                    .catch(e => {
                        console.log(e);
                        resolve();
                    })));
        })
    // TODO: repeat or just first page?
};
module.exports = highFive;
highFive;
