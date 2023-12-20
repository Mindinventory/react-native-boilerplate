#!/usr/bin/env node

console.log("Welcome to Mindinventory React native boilerplate");

const { execSync } = require("child_process");

const renameNpmignoreToGitignore = () => {
  execSync("mv .npmignore .gitignore", { stdio: "inherit" });
};

const main = () => {
  execSync("git init", { stdio: "inherit" });
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
