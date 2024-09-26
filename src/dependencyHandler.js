import { exec } from "child_process"
import util from "util"
import { loading } from "./helper.js";
const execAsync = util.promisify(exec)

export const setupInitialdependency = async({makePreBuildConfig}) => {
  let installDepenLoading = loading('🛠️\u00A0dependency installing...').start()
  await execAsync("yarn",{stdio: 'inherit'});
  if (makePreBuildConfig) {
    await execAsync(`npx expo install expo-dev-client`)  
  }
  installDepenLoading.succeed('dependency install successfully...')
  if (makePreBuildConfig) {
    let preBuildLoading = loading('⚙️\u00A0Configuring project...').start()
    await execAsync(`npx expo prebuild --clean`)
    preBuildLoading.succeed('Configured project successfully!! ...')
  }
}