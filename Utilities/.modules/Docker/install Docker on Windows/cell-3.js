$$.async();
var elevateExecLoc = path.join(process.cwd(), 'elevate', 'bin', 'x86', 'Release', 'elevate.exe');
var firewallCmd = 'New-NetFirewallRule -DisplayName \\"docker engine\\" -Direction Inbound -Action Allow -Protocol tcp -LocalPort 2375';
var networkCmd = 'Set-NetConnectionProfile -InterfaceAlias \\"vEthernet (DockerNAT)\\" -NetworkCategory Private';
var exec = require('child_process').exec;
var install = exec(elevateExecLoc + ' msiexec /i ' + dockerLoc + ' /qn /L*V! ' + logLoc, () => {
    var firewall = exec(elevateExecLoc + ' powershell -c "' + firewallCmd + ' ; ' + networkCmd + '"', () => {
        $$.done('installed Docker');
    });
    install.stdout.on('data', (d) => console.log(d));
    install.stderr.on('data', (d) => console.log(d));
});
install.stdout.on('data', (d) => console.log(d));
install.stderr.on('data', (d) => console.log(d));

 #@FOR /
f
'tokens=*' % i
IN('docker-machine env default')
DO
@%
i