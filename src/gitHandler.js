const { exec } = require('child_process');
var util = require('util')

const execAsync = util.promisify(exec)

async function gitInitialize() {
  await execAsync("git init", { stdio: "inherit" });
  await execAsync("git add .");
  await execAsync(`git commit -m 'Initial commit'`);
}

module.exports = {
  gitInitialize
};