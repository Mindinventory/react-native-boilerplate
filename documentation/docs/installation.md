---
sidebar_position: 2
---

# Installation

## Prerequisite:

The first step to getting started is to set up your development environment according to the [React Native guide](https://reactnative.dev/docs/environment-setup). Just follow the installation instructions and you'll be ready to begin coding!

## Create New Project

To start a new React Native project, use the **init** command from the CLI and choose the desired template by running the following command:

```jsx title=">_ terminal"
npx react-native init APP_NAME --template @mindinventory/react-native-boilerplate
```

or

```jsx title=">_ terminal"
npx @react-native-community/cli@latest init APP_NAME --template @mindinventory/react-native-boilerplate
```

<br />
:::note
- Both commands will initialize a new React Native project with boilerplate code.
- The `npx react-native init` command uses the globally available react-native package to create a new React Native project.
- The `@react-native-community/cli` command is actively maintained, and CLI is recommended for creating React Native projects. It offers more features, bug fixes, and improvements.
:::



## Get the project up and running

Once you've installed everything needed, follow these steps to launch the project:

- To start the Metro bundler, run `yarn start` in a separate terminal window.
- Use `yarn <platform>` to start the app on your chosen platform (e.g., `yarn android` or `yarn ios`). Remember to either run a simulator or connect a real device for testing.
