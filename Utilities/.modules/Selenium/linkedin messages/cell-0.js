var notRobot = () => {
    return client.click('')
}

var enterLinkedIn = () => {
    console.log('LinkedIn: Sign in required');
    var credentials = getCredentials('linkedin.com');
    return client.isExisting('a[href*="uas/login"]')
        .then(is => is ? client.click('a[href*="uas/login"]') : Promise.resolve([]))
        .then(() => client.click('input[name*="session_key"]'))
        .keys(credentials.username)
        .pause(1000)
        .then(() => console.log('LinkedIn: Require password'))
        .click('input[name*="session_password"]')
        .keys(credentials.password)
        .submitForm('.login-form, [type="submit"]')
        .pause(2000)
        .isExisting('.cp-challenge-form')
        .then(is => {
            if (is) {
                throw new Error('captcha');
            }
        });
}

var loginLinkedIn = () => {
    return client
        .alertText()
        .then(t => t.indexOf('leave') > -1 ? client.alertAccept() : '')
        .catch(e => {
        })
        .getUrl().then(url => {
            var loggedIn = url.indexOf('linkedin') > -1 && url.indexOf('login') == -1 && url !== 'https://www.linkedin.com'
            return loggedIn
                ? client
                    .pause(1000)
                    .isExisting('iframe.authentication-iframe').then(is => is
                        ? client.element('iframe.authentication-iframe')
                            .then(el => client.frame(el.value))
                            .then(() => enterLinkedIn())
                            .frame()
                        : Promise.resolve([]))
                : client.url('https://www.linkedin.com/')
                    .pause(1000)
                    .isExisting('*=Forgot password?').then(is => is
                        ? enterLinkedIn()
                        : Promise.resolve([]));
        })
};
module.exports = loginLinkedIn;
loginLinkedIn;