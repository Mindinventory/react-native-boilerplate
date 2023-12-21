#!/usr/bin/env node

console.log("Welcome to Mindinventory React native boilerplate");

const { execSync } = require("child_process");

const installDependencies = () => {
  console.log("\n\n");

  console.log(
    "@mindinventory/react-native-boilerplate initialized with success! 🚀\n"
  );

  console.log("Installing dependencies... 🛠️\n");
  execSync(`yarn`, { stdio: "inherit" });
  console.log("Dependencies installed successfully. 🚀\n");

  console.log("bundle Installing 🛠️\n");
  execSync(`bundle`, { stdio: "inherit" });
  console.log("bundle installed successfully.🚀\n");

  console.log("pod-install Installing 🛠️\n");
  execSync(`npx pod-install`, { stdio: "inherit" });
  console.log("pod-install installed successfully.🚀\n");
};

const renameNpmignoreToGitignore = () => {
  execSync("mv .npmignore .gitignore", { stdio: "inherit" });
};

const main = () => {
  execSync("git init", { stdio: "inherit" });
  installDependencies();
  renameNpmignoreToGitignore();
};

new Promise((resolve) => {
  main();
  resolve();
})
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
  })
  .catch((error) => {
    console.error(`🚨 An error occurred with post init script: ${error}`);
    throw new Error();
  });
