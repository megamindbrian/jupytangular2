var http = require('http');
var os = require('os');
var checkLocalNPM = (host) => {
    var HOST = host || os.hostname() || 'localhost';
    return http.get(
        'http://' + HOST + ':5080',
        (r) => r.statusCode === 200)
        .on('error', (e) => false);
};
(checkLocalNPM);