<!-- @format -->

# React Native Boilerplate

[![npm version](https://img.shields.io/npm/v/@mindinventory/react-native-boilerplate.svg)](<[https://www.npmjs.org/package/@mindinventory/react-native-boilerplate](https://www.npmjs.com/package/@mindinventory/react-native-boilerplate)>)
![@mindinventory/React Native Boilerplate Top Language](https://img.shields.io/github/languages/top/Mindinventory/react-native-boilerplate)
![@mindinventory/React Native Boilerplate TypeScript](https://badgen.net/npm/types/tslib)
![@mindinventory/React Native Boilerplate License](https://img.shields.io/github/license/Mindinventory/react-native-boilerplate)

The Boilerplate contains all the basic packages, common components and, prebuilt code architecture. It will save developer's project setup time.

<a href="https://www.mindinventory.com/?utm_source=gthb&utm_medium=repo&utm_campaign=react-native-boilerplate" target="__blank" ><img src="https://github.com/Mindinventory/react-native-boilerplate/blob/master/document/Banner.png"></a>

# Using Boilerplate

## Introduction

This repository serves as a boilerplate for React Native projects, providing a solid foundation to kickstart your development process. It includes a collection of scripts to generate images and icons, making it easier to customize your app's visual assets.

Create a new project using the boilerplate :

```
npx react-native init APP_NAME --template @mindinventory/react-native-boilerplate
```

## Tech Stack

| Library                   | Category             | Version | Description                                    |
| ------------------------- | -------------------- | ------- | ---------------------------------------------- |
| React Native              | Mobile Framework     | v0.71   | The best cross-platform mobile framework       |
| React                     | UI Framework         | v18     | The most popular UI framework in the world     |
| TypeScript                | Language             | v4      | Static typechecking                            |
| React Navigation          | Navigation           | v6      | Performant and consistent navigation framework |
| React Native Localization | Internationalization | v13     | i18n support (including RTL!)                  |
| Redux                     | State Management     | v5      | Observable state tree                          |
| Redux-toolkit             | Redux integration    | v3      | New redux library with some function helpers   |
| RN Reanimated             | Animations           | v2      | Beautiful and performant animations            |
| MMKV                      | Persistence          | v1      | State persistence                              |
| axios                     | REST client          | v1      | Communicate with back-end                      |
| Hermes                    | JS engine            |         | Fine-tuned JS engine for RN                    |

## Features

Built in implemented features.

- Typescript.
- Light/Dark mode.
- Localization.
- Navigation.
- Network request (API implementation).
- Context API.
- Default common components.
- Custom hook.
- Supported for responsive UI.
- Local storage.
- Attractive code architecture.

## Customize the visual assets:

This boilerplate provides a convenient set of scripts to generate images and icons. You can find these scripts in the `scripts` directory. Follow the instructions below to generate your assets:

- **Generating Images:**

  1.  Place your source images in the `src/assets/images` directory.
  2.  Run the following command to automatically import the images into the assets/images/index.ts file:
      ```
      npm run generate:images
      ```
  3.  Get your images in app from context
      For example:

      ```javascript
      getIcons: return JSX.Element;
      const { getImages } = useAppContext();
      ```

      use it in component as

  ```JSX
  <TouchableOpacity>
    {getImages(`imageSource || Images.PLACEHOLDER_IMAGE`, { resizeMode: 'contain', style:styles.debugIcon, })}
  </TouchableOpacity>
  ```

- **Generating Icons:**

  1.  Place your source icon image in the `src/assets/icons` directory.
  2.  Run the following command to automatically import the icons into the assets/icons/index.ts file:
      ```
      npm run generate:icons
      ```
  3.  Get your icon in app from context
      For example:

      ```javascript
      getIcons: return JSX.Element;
      const { getIcons } = useAppContext();
      ```

      use it in component as

  ```js
  <TouchableOpacity>
    {getIcons(Icons.DEBUG_ICONS, {
      resizeMode: "contain",
      style: styles.debugIcon,
    })}
  </TouchableOpacity>
  ```

  - **Linking fonts:**

  1.  Place your fonts in the `src/assets/fonts` directory.
  2.  Run the following command to automatically link fonts on native side assets/icons/index.ts file:
      ```
      npm run generate:icons
      ```
  3.  Get your icon in app from context
      For example:

      ```js
      getIcons: return JSX.Element;
      const { getIcons } = useAppContext();
      ```

      use it in component as

  ```js
  <TouchableOpacity>
    {getIcons(Icons.DEBUG_ICONS, {
      resizeMode: "contain",
      style: styles.debugIcon,
    })}
  </TouchableOpacity>
  ```

## Environment Setup

This boilerplate uses the `react-native-config` library for environment variable setup. It allows you to define environment-specific variables in `.env` files and access them in your code.

1. Create `.env` files:

   - `.env.development` for development environment variables
   - `.env.staging` for staging environment variables
   - `.env.production` for production environment variables

   Note: You can create additional `.env` files for other environments as needed.

2. Define environment-specific variables in the `.env` files:

   ```
   API_BASE_URL=https://api.example.com
   API_KEY=your-api-key
   ```

   Customize the variables based on your project's requirements.

3. Access environment variables in your code:
   Declare env keys in `constants/config` file
   ```typescript
   export type ConfigTypes = {
     ENV: string;
     API_URL: string;
   };
   ```

## Services(API) handling

Config your api in `src/services/apiHandler.ts` in this file set your all api handling request `get | post | put | delete` or any methods in it. Set your api base url in axios instances. Handle response status as per required.

- **Api Mapper with DTOs:**
  API Mapper with DTOs is a utility that simplifies the process of making API requests and mapping the response data to Data Transfer Objects (DTOs) in a React Native application.

- **Usage:**

Declare

1. Create DTOs
   Create the DTOs (Data Transfer Objects) that represent the structure of the API response data. Each DTO should define the properties that match the response data fields.

For example, let's create a UserDTO to represent user data:

```typescript
export interface UserResponseDTO {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: DatumDTO[];
  support: SupportDTO;
}

export interface DatumDTO {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface SupportDTO {
  url: string;
  text: string;
}
```

2. Define API Endpoints
   Define the API endpoints in your React Native application in `src/services/appServicesEndPoints.ts`. These endpoints should include the URL, HTTP method, and any required headers or parameters.

3. Call api as per serviceAdapter methods in `src/services/appServices.ts`.
   Create a function in class:

   ```typescript
   getNews = async (): Promise<NewsResult[]> => {
     return new Promise((resolve, reject) => {
       serviceAdapter<NewsResponseDTO, undefined>(
         API_METHODS.GET,
         ServicesEndPoints.NEWS
       )
         .then((res) => {
           resolve(new getNewsListResponseAdapter().service(res));
         })
         .catch((error) => {
           reject(error);
         });
     });
   };
   ```

4. Map your response in `src/services/commercial/adapters/response` with your api name like for newList `getNewsListResponseAdapter.ts`

5. Call your api mapper DTOs to in services as show in 3rd point.

## Start the development server:

```
npm start
```

## Customization

Feel free to customize the React Native Boilerplate to fit your project's specific needs. Here are some areas you might consider modifying:

- **App Configuration:** Update the app's configuration files, such as `app.json` and `metro.config.js`, to match your desired settings.

- **Directory Structure:** Adjust the project's directory structure to better organize your codebase.

- **Styling and Theming:** Modify the existing styles and themes or add your own to create a unique visual identity for your app.

- **Additional Scripts:** Extend the `scripts` directory with your own scripts to automate repetitive tasks specific to your project.

## Contribution

Contributions to this boilerplate are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the repository.

# LICENSE!

react-native-boilerplate is [MIT-licensed](https://github.com/Mindinventory/react-native-boilerplate/blob/master/LICENSE).

# Let us know!

If you use our open-source libraries in your project, please make sure to credit us and Give a star to www.mindinventory.com

<p><h4>Please feel free to use this component and Let us know if you are interested to building Apps or Designing Products.</h4>
<a href="https://www.mindinventory.com/contact-us.php?utm_source=gthb&utm_medium=repo&utm_campaign=circular-cards-stack-view" target="__blank">
<img src="https://github.com/Sammindinventory/MindInventory/blob/main/hirebutton.png" width="203" height="43"  alt="app development">
</a>
