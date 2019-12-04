// from https://stackoverflow.com/questions/10179114/execute-powershell-script-from-node-js/10181488

var spawn = require("child_process").spawn,child;
child = spawn("powershell.exe",["Resolve-Path", "upgrade.ps1"]);

child.stdout.on("data",function(data){
    console.log("Powershell Data: " + data);
});

child.stderr.on("data",function(data){
    console.log("Powershell Errors: " + data);
});

child.on("exit",function(){
    console.log("Powershell Script finished");
});

child.stdin.end(); //end input