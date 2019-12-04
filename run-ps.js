const {exec} = require("child_process")
var child = exec('powershell .\upgrade.ps1')
var result = '';

child.stdout.on('data', function(data) {
    result += data;
});

child.on('close', function() {
    console.log('done');
    console.log(result);
});