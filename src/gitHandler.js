const { exec } = require('child_process');
var util = require('util')
const {loading} = require("./helper");

const execAsync = util.promisify(exec)

async function gitInitialize() {
  await execAsync("git init", { stdio: "inherit" });
  await execAsync("git add .");
  await execAsync(`git commit -m 'Initial commit'`);
  let installingLeftHook = await loading('🛠️\u00A0Installing LeftHook...')
  await execAsync(`npx lefthook install`);
  installingLeftHook.succeed("LeftHook installed successfully");
}

module.exports = {
  gitInitialize
};