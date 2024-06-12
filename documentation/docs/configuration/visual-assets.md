---
sidebar_position: 5
---

# Customize the visual assets

This boilerplate provides a convenient set of scripts to generate images and icons. You can find these scripts in the `scripts` directory. Follow the instructions below to generate your assets:

### Generating Images:

1. Place your source images in the `src/assets/images` directory.
2. Run the following command to automatically import the images into the assets/images/index.ts file:

   ```bash
   npm run images
   ```

3. Get your images in app from components
   For example:

   ```tsx
   import { AppImage, Images } from "@src/components"
   ```

   use it in component as

   get local static Images from same assets

   ```tsx
   import { Images } from "@src/assets"
   ```

   For Placing static image from local assets

   ```tsx
   <AppImage source="{Images.PLACEHOLDER_IMAGE}" style="{styles.newsImage}" />
   ```

   To get from url or any base64

   ```tsx
   <AppImage source={"url || any"} style={styles.newsImage} />
   ```

### Generating Icons:

1. Place your source icon image in the `src/assets/icons` directory.
2. Run the following command to automatically import the icons into the assets/icons/index.ts file:

   ```bash
   npm run icons
   ```

3. Get your icon in app from components
   For example:

   ```tsx
   import { Icon, SvgIcon } from "@src/components"
   ```

   get local static Icons and SVGIcons from same assets

   ```tsx
   import { Icons, SVGIcons } from "@src/assets"
   ```

   use it in component as

   ```tsx
   <Icon icon="{Icons.DEBUG_ICONS}" style="{styles.debugIcon}" />
   ```

   ```tsx
   <SvgIcon
     pathFill="{color.primaryColor}"
     icon="{SVGIcons.SETTING}"
     {...scaled(25)}
   />
   ```

### Linking fonts:

- [React-Native-Asset](https://github.com/unimonkiez/react-native-asset)

  1. Place your fonts in the `src/assets/fonts` directory.
  2. Run the following command to automatically link on native side.

     ```bash
     npx react-native-asset
     ```

  3. For linking of custom that not in google fonts required extra steps in iOS.

  - add those fonts first in fontBook app then use that name used given in fontBook.
