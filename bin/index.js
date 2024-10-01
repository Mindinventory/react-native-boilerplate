#!/usr/bin/env node
const path = require('path')
const { fileURLToPath, URL } = require('node:url');
const kleur = require('kleur')
const  {getProjectName, getBoilerplateType, getPackageId, getConfirmationForGitInit} = require('../src/prompts.js')  
const {expoProjectSetup} = require('../src/projectSetup.js')
const {setupInitialdependency} = require('../src/dependencyHandler.js')
const {gitInitialize} = require('../src/gitHandler.js')
const { textBanners } = require('../src/helper.js')

const { green } = kleur

// const __filename = fileURLToPath(import.meta.url)
// const __filenameNew = fileURLToPath(new URL('.', './index.js'));

// const __dirnameNew = path.dirname(__filenameNew)
const __filenameNew = path.resolve(__dirname, 'index.js');  // Resolves index.js in the current directory
const __dirnameNew = path.dirname(__filenameNew);
console.log('__dirnameNew: ', __dirnameNew);

const boilerplates = 'ExpoTemplate'

async function main() {
  const { projectName } = await getProjectName()
  if (!projectName) {
    return
  }
  const destPath = path.resolve(process.cwd(), projectName)

  const packageJsonPath = path.join(destPath, "package.json")
  const appJsonPath = path.join(destPath, "app.json")

  const { boilerplate } = await getBoilerplateType()
  
  let packageId = null
  if (boilerplate === "bare react native") {
    const response = await getPackageId(projectName)
    packageId = response.packageId
  }
  const { gitInit } = await getConfirmationForGitInit()

  const srcPath = path.resolve(
    __dirnameNew,
    "../templates",
    boilerplates
  )

  try {
    await textBanners()    
    if (boilerplate === "expo") {
      await expoProjectSetup({srcPath, destPath, packageJsonPath, appJsonPath, projectName, packageId, makePreBuildConfig: false})
      await setupInitialdependency({makePreBuildConfig: false})
      if (gitInit) {        
        await gitInitialize()
      }

      console.log("\n")
      console.log(
        green().bold("🚀\u00A0Project created successfully.")
      )
    } else {
      if (projectName && packageId) {
        await expoProjectSetup({srcPath, destPath, packageJsonPath, appJsonPath, projectName, packageId, makePreBuildConfig: true})    
        await setupInitialdependency({makePreBuildConfig: true})
        if (gitInit) {          
          await gitInitialize()
        }
  
        console.log("\n")
        console.log(
          green().bold("🚀\u00A0Project created successfully.")
        )        
      } else {
        return
      }
    }
  } catch (err) {
    console.error("❌ Error setting up boilerplate:", err)
  }
}

main()