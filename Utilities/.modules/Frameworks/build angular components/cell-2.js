//ng(path.dirname(project), ['new', '--skip-git', '--skip-install', 'new-portal'])
//    .then(() => ng(project, [
//    'generate', 'module', '--spec', '--flat', 'AppServer']))
/*
//.then(() => npm(project, ['install'], {'save': true, bin-links': false, verbose: true, prefix: project}))
//.then(() => npm(project, ['install', '@angular/material', '@angular/cdk'], {'save': true, bin-links': false, verbose: true, prefix: project}))
//.then(() => npm(project, ['list'], {prefix: project}))
//.then(() => npm(project, ['prefix'], {prefix: project}))
//convertNgUniversal(project)
//    .then(() => ng(project, ['build', '--aot', '--prod']))
//.then(() => webpackAngularProject(project))
.then(r => {
    process.chdir(project);
    var server = require(path.join(project, '.server', 'server.js'));
    console.log(server);
})
*/

// TODO:
// build the project in memory
// make the sockify server send us logs
// accept logins and encrypt in to password file?
// send mock responses to display all interfaces?  e.g. logging in displays redirect and error "you are already logged in" on login page at the same time