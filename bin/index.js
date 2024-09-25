#!/usr/bin/env node
import path from "path"
import { fileURLToPath } from "url"
import kleur from "kleur"
import  {getProjectName, getBoilerplateType, getPackageId}  from "./src/prompts.js"
import {expoProjectSetup} from './src/projectSetup.js'
import {setupInitialdependency} from './src/dependencyHandler.js'
import {gitInitialize} from './src/gitHandler.js'
import { textBanners } from "./src/helper.js"

const { green } = kleur

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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

  const srcPath = path.resolve(
    __dirname,
    "templates",
    boilerplates
  )

  try {
    textBanners()    
    if (boilerplate === "expo") {
      await expoProjectSetup({srcPath, destPath, packageJsonPath, appJsonPath, projectName, packageId, makePreBuildConfig: false})
      await setupInitialdependency({makePreBuildConfig: false})
      await gitInitialize()

      console.log("\n")
      console.log(
        green().bold("Project created successfully.")
      )
    } else {
      if (projectName && packageId) {
        await expoProjectSetup({srcPath, destPath, packageJsonPath, appJsonPath, projectName, packageId, makePreBuildConfig: true})    
        await setupInitialdependency({makePreBuildConfig: true})
        await gitInitialize()
  
        console.log("\n")
        console.log(
          green().bold("Project created successfully.")
        )        
      } else {
        return
      }
    }
  } catch (err) {
    console.error("Error setting up boilerplate:", err)
  }
}

main()