---
sidebar_position: 3
---

# src

Let's talk about the src directory and explore how to make the best use of it.

The **src** directory is the beating heart of your React application. It's where all the essential code that brings your app to life resides. Here, we'll explore the key components that make up this crucial directory and how they work together:

```
├── src
│ ├── assets
│ ├── components
│ ├── constants
│ ├── context
│ ├── hooks
│ ├── i18n
│ ├── navigation
│ ├── screens
│ ├── services
│ ├── store
│ ├── utils
└── MainApp.tsx
```

### Building Blocks:

- #### Components:

  These are the reusable building blocks that form your user interface (UI). Imagine LEGO bricks - you can create complex structures by combining these smaller components. A **components** folder is a common way to organize these reusable UI elements.

- #### Assets:

  Think of these as the visual flourishes that bring your app to life. Images, icons, and fonts are all stored in the **assets** folder, readily accessible to be used within your components.

- #### Utilities:
  Ever need a helping hand with common tasks? The **utils** folder is your go-to spot for reusable functions and helpers that streamline your development process.

### Managing Application Data:

- #### Store (Redux):

  If your application involves complex data management, Redux comes into play. The **store** folder holds the Redux store, along with actions, reducers, selectors, and state observers. These work together to efficiently manage and update your application's state.

- #### Constants:

  These are fixed values that you might use throughout your application. Storing them in a central **constants** folder keeps your code clean and prevents typos or inconsistencies.

- #### Context:
  Need to share data across various components without prop drilling? The **context** folder provides a mechanism to manage application-wide data such as styles, themes, localization, and more.

### Navigation and Functionality:

- #### Navigation:

  How users move between different screens in your app is crucial. The **navigation** folder holds the setup and configuration for your chosen navigation library, ensuring a smooth user experience.

  ```
    ├── src
    │ ├── navigation
    │ ├──├── appNavigation  (stack of all screens in this)
    │ ├──├── appNavigation.type (include all screen names and params in this)
    │ ├──├── ...
    └── ...
  ```

- #### Screens:

  Each individual screen or page of your application likely has its own dedicated file within the **screens** folder. This promotes code organization and makes it easier to manage complex layouts.

  ```
    ├── src
    │ ├── screens
    │ ├──├── newsList
    │ ├──├──├── newsList.style.ts
    │ ├──├──├── newListScreen.tsx
    │ ├──├──├── useNewsList.ts
    │ ├──├── login
    │ ├──├──├── login.style.ts
    │ ├──├──├── loginScreen.tsx
    │ ├──├──├── useLogin.ts
    │ ├── ...
    └── ...
  ```

- #### Services:

  Handling interactions with APIs and external data sources falls under the domain of the **services** folder. Here, you'll find the logic and communication code for fetching and managing data from outside your application.

  ```
  ├── src
  │ ├── services
  │ ├──├──commercial
  │ ├──├──├──response
  │ ├──├──├──├── getLoginResponseAdapter.ts
  │ ├──├──├──├── getNesListResponseAdapter.ts
  │ ├──├──├──├── ...
  │ ├── dtos
  │ ├──├── LoginResponseDTO.ts
  │ ├──├── NewsListResponseDTO.ts
  │ ├──├── ...
  │ ├── models
  │ ├──├── login.ts
  │ ├──├── news.ts
  │ ├──├── ...
  │ ├── apiHandler
  │ ├── apiServices
  │ ├── apiServices.type
  │ ├── apiServicesEndPoints
  │ ├── ...
  └── ...
  ```

### Localization and Internationalization:

- #### i18n:
  If you want your app to speak to a global audience, the **i18n** folder is where you'll store localization files for i18next, a popular library for handling internationalization.

### Let's explore a few more hidden gems within the src directory:

This phrasing piques curiosity and suggests there are additional interesting things to discover within the **src** directory

```
├── src
│ ├── assets
│ ├──├── fonts (all fonts in this)
│ ├──├── icons (app icons)
│ ├──├── svgIcons (svg app icons)
│ ├──├── images (local images used in app)
│ ├──├── ...
│ ├── components
│ ├──├── ... app reusable components
│ ├──├── index (export all in this)
│ ├──├── ...
│ ├── context
│ ├──├── storage (app local storage)
│ ├──├── ...
│ ├── i18n
│ ├──├── locales
│ ├──├──├── en.json
│ ├──├──├── ...
│ ├──├── index.ts
│ ├──├── ...
│ ├── utils
│ ├──├── color (include themes color of app)
│ ├──├── dimensions (for responsive UI helper fucntions)
│ ├──├── helper (include app helper function)
│ ├──├── ...
└── ...
```
