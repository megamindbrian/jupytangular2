var automock = require('../../universal/src/imports/automock.js');

automock.mockValue({}, {
    stubCreator: function (name) {
        console.log(name);
        return function () {
        }
    }
})