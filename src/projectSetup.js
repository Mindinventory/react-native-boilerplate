import fs from "fs-extra"
import { loading } from "./helper.js"

export const expoProjectSetup = async({srcPath, destPath, packageJsonPath, appJsonPath, projectName, packageId, makePreBuildConfig}) => {
  let initLoading = loading('Setting up environment...').start()
  await fs.copy(srcPath, destPath)
  if (await fs.pathExists(packageJsonPath)) {
    const packageJson = await fs.readJson(packageJsonPath)
    packageJson.name = projectName
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 })
  }

  if (await fs.pathExists(appJsonPath)) {
    const appJson = await fs.readJson(appJsonPath)
    appJson.expo.name = projectName
    appJson.expo.slug = projectName
    if (makePreBuildConfig) {
      appJson.expo.ios.bundleIdentifier = packageId
      appJson.expo.android.package = packageId
    }
    await fs.writeJson(appJsonPath, appJson, { spaces: 2 })       
  }
  process.chdir(destPath)
  initLoading.info()
}