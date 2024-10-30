const fs = require('fs-extra')
const {loading} = require('./helper.js')

async function expoProjectSetup({srcPath, destPath, packageJsonPath, appJsonPath, projectName, packageId, makePreBuildConfig}) {
  let initLoading = await loading('🧰\u00A0Setting up environment...')
  initLoading.start()
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

module.exports = {
  expoProjectSetup
};