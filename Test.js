const cp = require("child_process"); 
const questionApp = cp.spawn("node", ["Server.js"]); 
questionApp.stdout.on("data", data=> { 
console.log(`from the question app: ${data}`); 
}); 
process.stdin.on("data", data=> { 
questionApp.stdin.write(`${data}\n\n`); 
}); 
questionApp.on("close", () => { 
console.log(`questionApp process exited`); 
process.exit(); 
}); 