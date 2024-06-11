---
sidebar_position: 2
---

# Scripts

The scripts directory contains a collection of Node.js scripts designed to automate various project tasks. These scripts streamline the development process by reducing manual work and ensuring consistency.

### Functionality

Each script within the scripts directory focuses on a specific task, such as:

- ### Generating Screens:

  This Node.js script streamlines React Native screen module creation by generating a folder structure with key files based on a provided folder name.

  **Features:**

  - Includes a custom hook for state and styling management.
  - Appends an export statement to the screens index file for easy project-wide accessibility.

  **Run the Script:**

  ```
  yarn screens screeName
  ```

- ### Icons Script:

  This script generates a TypeScript enum for React Native icons based on image files within the "**../src/assets/icons**" directory. It filters and organizes icon filenames, ensuring compatibility with multiple resolutions, and exports them within the generated enum.

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

- ### Images Script:

  This script creates a TypeScript enum for React Native images, sourcing filenames from the "**../src/assets/images**" directory. It filters and organizes image files, accommodating different resolutions, and exports them as enum properties for easy referencing.

  **Example:**

  Assuming the "../src/assets/images" directory includes files like **"background@2x.jpg"** and "logo.png," running the script generates a TypeScript enum (Images) in "../src/assets/images/index.ts," providing organized references to these images:

  ```
  yarn images
  ```

  ```typescript
  export enum Images {
    BACKGROUND_IMAGE = require("./background.jpg"),
    LOGO_IMAGE = require("./logo.png"),
    // Other images...
  }
  ```

- ### Refresh.sh

  This Bash script performs a cleanup and dependency reinstall for a React Native project. It removes various generated and dependency-related files, clears the node_modules directory, and then reinstalls dependencies using yarn. Additionally, it runs bundle and pod install commands for iOS.

  ```
  yarn refresh
  ```

- ### SvgIcons Script:

  This TypeScript script generates a module for managing SVG icons in a React Native project. It extracts SVG filenames from the "../src/assets/svgIcons" directory, imports them as React components, and creates an enum for easy referencing. Additionally, it provides a mapper object for dynamically accessing SVG icons.

  **Note:** Ensure your project includes a suitable React SVG library for rendering these components.

  **Example:**
  Run this script to create a TypeScript module managing SVG icons in your React Native project:

  ```
  yarn svgs
  ```
