const path = require('path')
const fs = require('fs-extra')
const {logError} = require('./helper.js') 

async function getProjectName() {
  const inquirer = (await import('inquirer')).default;
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

async function getBoilerplateType() {
  const inquirer = (await import('inquirer')).default;
  return await inquirer.prompt([
    {
      type: "list",
      name: "boilerplate",
      message: "Select the boilerplate to use:",
      choices: ["expo", "bare react native"],
    },
  ]);
}


async function getPackageId(projectName) {
  const inquirer = (await import('inquirer')).default;
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

async function getConfirmationForGitInit() {
  const inquirer = (await import('inquirer')).default;
  return await inquirer.prompt([
    {
      type: "confirm",
      name: "gitInit",
      message: "Initialize git repository?",      
      default: true
    },
  ]);
}

module.exports = {
  getProjectName,
  getBoilerplateType,
  getPackageId,
  getConfirmationForGitInit
};