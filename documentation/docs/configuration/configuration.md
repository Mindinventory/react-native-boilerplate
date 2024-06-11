---
sidebar_position: 6
---

# Configuration

The boilerplate comes with a few configuration files that you can customize to fit your project's needs:

This project utilizes several configuration files to streamline development and enforce code quality. These files allow you to customize the project's behavior and ensure consistent coding practices across your team.

### Boilerplate Configuration Files:

- `.env`: Environment-specific configuration (e.g., API URLs, keys).
- `.husky`: Husky improves your commits and more.
- `.prettierrc`: Configuration for Prettier code formatting.
- `.eslintrc`: Configuration for ESLint code linting.
- `tsconfig.json`: TypeScript compiler configuration.

Here's a breakdown of each configuration file and its purpose:

#### .env:

This file stores environment-specific configurations, such as API URLs, secret keys, and other sensitive information. It's recommended to keep this file excluded from version control systems to avoid exposing sensitive data.

#### .husky:

Husky is a tool that helps enforce Git hooks. These hooks can be used to perform various tasks before or after Git events, such as running tests or formatting code before committing changes.

#### .prettierrc:

This file configures Prettier, a code formatter that automatically enforces consistent code style. Prettier helps maintain a clean and readable codebase by ensuring consistent indentation, spacing, and formatting.

#### .eslintrc:

This file configures ESLint, a static code analysis tool. ESLint helps identify potential errors, stylistic issues, and coding best practices violations in your codebase. By adhering to ESLint's rules, you can improve code quality and maintainability.

#### tsconfig.json (if applicable):

For projects using TypeScript, this file configures the TypeScript compiler. It specifies compiler options like target language version, module system, and strictness settings.

### Customizing the Configuration

These configuration files serve as a starting point, and you can customize them to fit your project's specific needs. Refer to the official documentation for each tool (Husky, Prettier, ESLint, and TypeScript) for detailed information on available options and configuration possibilities.

### Remember:

- Always keep `.env` files excluded from version control.
- Update configuration files as your project evolves to maintain optimal development practices.
