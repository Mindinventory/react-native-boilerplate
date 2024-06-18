---
sidebar_position: 1
---

# Blueprints

Let's discuss about the Blueprints directory. And understand how to utilize its components.

**blueprints:** Contains the app elements that Customize as per app development required. Blueprints are foundational documents or sets of instructions that outline the essential components and structure of an app. The blueprint contains all the necessary elements required to customize and develop the app as per specific requirements.

```
├── blueprints
│ ├── Text
│ ├── Image
│ └── Indicator
│ └── Button
│ └── TextInput
│ └── ...
```

- ### Text:

  Text element(typography) for app consist presets of all font family and font-size that we have to use in app.
  For Example:

  ```tsx
  import { Text } from "@app/blueprints";
  ...

  <Text preset="h1">{contents("newsList", "breakingNews")}</Text>
  ```

- ### Image:

  React Native's Image component handles image caching like browsers for the most part using `react-native-fast-image` library.
  For Example:

  ```tsx
  import { Image } from "@app/blueprints";
  ...

  <Image source={sourcePath} {...props} />
  ```

- ### Indicator:

  Show loader in app with customize way. use it form context of app.
  For Example:

  ```tsx
  const { loader } = useAppContext()

  //to show Indicator
  loader.current.show()
  //to hide Indicator
  loader.current.hide()
  //get Indicator status
  loader.current.isLoading
  ```

- ### Button:

  Animated scalability adds an extra layer of interactivity to your buttons with TouchableOpacity
  For Example:

  ```tsx
  import { Button } from "@app/blueprints";
  ...

  <Button
    buttonContainerStyle={{ marginTop: scaleHeight(15) }}
    title="Go back"
    {...TouchableOpacityProps}
  />
  ```

- ### TextInput:

  Material UI all input variant added.
  For Example:

  ```tsx
  import { Input } from "@app/blueprints";
  ...
  
  <Input variant="standard" {...TextInputProps} />
  ```
