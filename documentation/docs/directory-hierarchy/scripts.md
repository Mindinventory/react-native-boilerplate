---
sidebar_position: 2
---

# Scripts

The scripts directory contains a collection of Node.js scripts designed to automate various project tasks. These scripts streamline the development process by reducing manual work and ensuring consistency.

### Functionality

Each script within the scripts directory focuses on a specific task, such as:

- **Generating Screens:** This Node.js script streamlines React Native screen module creation by generating a folder structure with key files based on a provided folder name.

  **Features:**

  - Includes a custom hook for state and styling management.
  - Appends an export statement to the screens index file for easy project-wide accessibility.

  **Run the Script:**

  ```
    yarn screens screeName
  ```

- **Icons Script:** This script generates a TypeScript enum for React Native icons based on image files within the "**../src/assets/icons**" directory. It filters and organizes icon filenames, ensuring compatibility with multiple resolutions, and exports them within the generated enum.

      **Example:**

      Suppose the "../src/assets/icons" directory contains icon files like "home@2x.png" and "home@3x.png." Running the script creates a TypeScript enum (Icons) in "../src/assets/icons/index.ts," providing organized references to these icons:

      ```
      yarn icons
      ```

      ```jsx
      export enum Icons {

        HOME_ICONS = require("./home.png"),
        // Other icons...
      }

      ```
