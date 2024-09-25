import inquirer from "inquirer"
import path from "path"
import fs from "fs-extra"
import {logError} from './helper.js'

export  const getProjectName = async () =>  {
  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter the project name:",
      validate: (input) => (input ? true : "Project name cannot be empty"),
    },
  ])

  const destPath = path.resolve(process.cwd(), projectName)
  if (await fs.pathExists(destPath)) {    
    logError(`The directory "${projectName}" already exists`)
    return {
      projectName : ''
    }
  }
  return {
    projectName
  }
}

export const getBoilerplateType = async() => {
  return await inquirer.prompt([
    {
      type: "list",
      name: "boilerplate",
      message: "Select the boilerplate to use:",
      choices: ["expo", "bare react native"],
    },
  ]);
}


export const getPackageId = async(projectName) => {
  return await inquirer.prompt([
    {
      type: "input",
      name: "packageId",
      message: "Enter the package ID (e.g., com.myapp):",
      validate: (input) =>
        /^[a-zA-Z]+\.[a-zA-Z]+/.test(input) ? true : "Package ID is not valid",
      default: `com.${projectName.toLowerCase()}`,
    },
  ]);
}