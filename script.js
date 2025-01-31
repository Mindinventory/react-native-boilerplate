#!/usr/bin/env node

console.log("Welcome to Mindinventory React native boilerplate");

const { execSync } = require("child_process");

const installDependencies = () => {
  console.log("\n\n");

  console.log(
    "@mindinventory/react-native-boilerplate initialized with success! 🚀\n"
  );

  console.log("Installing dependencies... 🛠️\n");
  console.log("dependencies Installation started... 🛠️\n");
  execSync(`yarn`, { stdio: "inherit" });
  console.log("Dependencies installed successfully. 🚀\n");

  // console.log("bundle Installing 🛠️\n");
  // execSync(`bundle`, { stdio: "inherit" });
  // console.log("bundle installed successfully.🚀\n");

  console.log("pod-install Installing 🛠️\n");
  execSync(`npx pod-install`, { stdio: "inherit" });
  console.log("pod-install installed successfully.🚀\n");
};
const fs = require("fs");

const initializeGit = () => {
  const gitignoreContent = `
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
  `;

  fs.writeFileSync(".gitignore", gitignoreContent);
  console.log(".gitignore file created successfully. 🚀\n");
  try {
    execSync("git add .", { stdio: "inherit", shell: true });
    execSync(`git commit -m 'Initial commit'`, {
      stdio: "inherit",
      shell: true,
    });

    console.log("Installing lefthook... 🛠️\n");
    execSync(`npx lefthook install`, { stdio: "inherit" });
    console.log("lefthook installed successfully. 🚀\n");
  } catch (error) {
    console.error(`🚨 An error occurred while initializing git: ${error}`);
  }
};

const main = async () => {
  try {
    installDependencies();
    execSync("git init", { stdio: "inherit" });
    initializeGit();
  } catch (error) {
    console.error(`🚨 Critical error: ${error}`);
    process.exit(1);
  }
};

main()
  .then(() => {
    console.log(
      "- 🎉  Congrats! Your project is ready with @mindinventory/react-native-boilerplate! 🎉\n"
    );

    console.log(
      "- 📚 If you need to read more about this boilerplate : https://github.com/Mindinventory/react-native-boilerplate/blob/master/README.md\n"
    );
    console.log(
      "- 🤕 If you have some troubles : https://github.com/Mindinventory/react-native-boilerplate/issues\n"
    );
    console.log(
      "- ⭐ If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives :) https://github.com/Mindinventory/react-native-boilerplate\n"
    );
    console.log("completed :::::::: Mindinventory React native boilerplate 🚀");
  })
  .catch((error) => {
    console.error(`🚨 An error occurred with post init script: ${error}`);
    throw new Error();
  });
