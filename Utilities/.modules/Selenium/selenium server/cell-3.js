var express = require('express');
var router = express.Router();
var response = (res, promise) => {
    return promise.then(r => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(r));
    })
}

var findElements = (selector) => {
    return promisifyChrome('debugger.sendCommand', {
        tabId: getTab()
    }, 'Runtime.evaluate', {
        expression: 'new window.BackupPromise(resolve => setTimeout(() => resolve([].slice.call(window.document.querySelectorAll('
        + JSON.stringify(selector) + '), 0)[0]), 500))',
        awaitPromise: true
    })
        .then(r => {
            return promisifyChrome('debugger.sendCommand', {
                tabId: getTab()
            }, 'DOM.requestNode', {
                objectId: r.result.objectId
            })
        })
        .then(r => ({value: {ELEMENT: r.nodeId}}))
        .catch(e => console.log(e))
}

router.post('/session/:sessionId/element', (req, res) =>
    response(res, findElements(req.body.value)));
router.post('/session/:sessionId/elements', (req, res) =>
    response(res, findElements(req.body.value)));

module.exports = {
    findElements,
    router
}
