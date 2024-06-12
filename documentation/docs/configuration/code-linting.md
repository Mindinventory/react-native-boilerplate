---
sidebar_position: 4
---

# Code linting

This React Native boilerplate utilizes ESLint, a popular linting tool, to enforce consistent and high-quality code across your project. ESLint helps identify and fix common code issues, ensuring your codebase adheres to best practices and coding standards.

### The ESLint configuration in this boilerplate includes the following features and plugins:

- `@commitlint/cli`: Enforces conventional commit messages.
- `@commitlint/config-conventional`: Provides commit message linting rules following conventional commit format.
- `eslint-plugin-import`: Provides rules for linting ES6 import/export syntax.
- `eslint-plugin-import-order-autofix`: Sorts import statements automatically.
- `eslint-plugin-no-inline-styles`: Detects and discourages the use of inline styles in React Native.
- `eslint-plugin-prettier`: Integrates Prettier code formatting rules into ESLint.
- `eslint-plugin-react-hooks`: Enforces rules for React Hooks.
- `eslint-plugin-react-native`: Provides rules specific to React Native development.
- `eslint-plugin-sort-keys-fix`: Sorts object keys in alphabetical order.

configuration of this lint is added in `.eslintrc.js` file.

The provided ESLint configuration offers a solid foundation for your React Native project. However, you might want to fine-tune it to fit your specific coding style and project requirements. Here's how you can customize the configuration in the `.eslintrc.js` file:

### Modifying Rules:

The configuration file uses a JSON format to define rules and their severity levels. You can adjust these severity levels to your preference:

- `"error"`: Triggers a linting error, halting the build process.
- `"warn"`: Issues a warning message during linting.
- `"off"`: Disables the rule completely.

### Adding New Rules:

Explore the documentation of the included plugins (and potentially new ones) to discover relevant rules you might want to enable. Remember to install any additional plugins required for the new rules.

Here's an example of customizing a rule:

```tsx
// In your .eslintrc.js file

"rules": {
  "no-inline-styles": "warn" // Changed from "error" to allow inline styles with warnings
}
```
