const { exec } = require('child_process');

var util = require('util')
const { loading, logger } = require("./helper.js");
const execAsync = util.promisify(exec)

async function setupInitialdependency({makePreBuildConfig}) {
  let installDepenLoading = await loading('🛠️\u00A0dependency installing...')
  installDepenLoading.start()
  await execAsync("yarn",{stdio: 'inherit'});
  await execAsync("npx expo install --fix ",{stdio: 'inherit'});
  if (makePreBuildConfig) {
    await execAsync(`npx expo install expo-dev-client`)  
  }
  installDepenLoading.succeed('dependency install successfully...')
  if (makePreBuildConfig) {
    logger('⚙️' + '  ' + 'Configuring project...')
    logger('⏱️' + '  ' + 'Please wait. May this process will take minutes...')
    console.log("\n")
    let preBuildLoading = await loading('⚙️' + '  ' + 'Configuring project...')
    preBuildLoading.start()
    await execAsync(`npx expo prebuild --clean`)
    preBuildLoading.succeed('Configured project successfully!! ...')
  }
}

module.exports = {
  setupInitialdependency
};