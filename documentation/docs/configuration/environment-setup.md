---
sidebar_position: 1
---

# Environment Setup

### Environment Variable Setup with react-native-config

This boilerplate leverages the `react-native-config` library for managing environment variables. This approach enables you to define environment-specific variables and access them seamlessly within your React Native code.

1.  ### Creating Environment Files

    The boilerplate utilizes separate `.env` files to store environment variables for different environments:

    - `.env.development`: Stores variables specific to your development environment.
    - `.env.staging`: Stores variables specific to your staging environment.
    - `.env.production`: Stores variables specific to your production environment.

    **Note:** You can create additional `.env` files for other environments as your project demands. Remember to exclude all `.env` files from version control to safeguard sensitive information.

2.  ### Defining Environment Variables

    Within each `.env` file, define environment variables relevant to your project. Here's an illustrative example:

    ```
    API_BASE_URL=https://api.example.com
    API_KEY=your-api-key
    ```

    Replace these placeholders with your actual API base URL and API key. Make sure to customize the variables according to your project's specific requirements.

3.  ### Accessing Environment Variables in Code

    To access environment variables within your React Native code, follow these steps:

    - #### Declare Environment Keys:

             Create a dedicated file, typically named `constants/config.js` or similar, to declare environment keys. This file serves as a central location to define the names of your environment variables for better maintainability.

             ```tsx title="JavaScript"
             export type ConfigTypes = {
               ENV: string;
               API_URL: string;
             };
             ```

             In this example, `ConfigTypes` is an interface that defines two keys: `ENV` (to identify the current environment) and `API_URL` (to store the API base URL).

This approach promotes clean and maintainable code by separating environment variable configuration from your core application logic. You can reference the `ConfigTypes` interface throughout your project to ensure consistent access to environment variables.
