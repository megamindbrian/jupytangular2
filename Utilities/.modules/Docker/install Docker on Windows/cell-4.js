var npmCmd = 'npm install --global --production --unsafe-perm nativescript windows-build-tools';
var firewall = exec(elevateExecLoc + ' powershell -c "' + npmCmd + ' ; ' + networkCmd + '"', () => {
    $$.done('npm build tools installed');
});