---
sidebar_position: 3
---

# Responsive UI Helpers

This section delves into the world of responsive UI helpers, a set of functions that empower you to craft user interfaces that gracefully adapt to various screen sizes and orientations in your React Native projects. These helpers provide a convenient way to ensure your app delivers a seamless experience across a diverse range of devices, from smartphones to tablets.

This set of helper functions provides a convenient way to create responsive user interfaces in your React Native applications. It helps in scaling and sizing UI elements based on the device's screen dimensions.

### Functions:

    Here's a breakdown of the functions included in this helper module:

    - #### `scaleWidth(val: number): number`:
        - Takes a numerical value as input (e.g., font size, margin).
        - Calculates a scaled value based on the device's screen width relative to a predefined design width.
        - This ensures consistent element sizing in relation to the overall screen width.

    - #### `scaleHeight(val: number): number`:
        - Similar to `scaleWidth`, but scales the value proportionally to the device's screen height and a predefined design height.
        - Use this function to scale elements that should adapt to the screen's vertical space.

    - #### `moderateScale(size: number, factor = 1): number`:
        - Scales a size value (e.g., font size) while applying an optional `factor` for a more moderate scaling effect.
        - This function helps prevent elements from becoming excessively large or small on very small or large screens, respectively.
    - #### `scaledSize(size: number): number`:
        - Scales a size value based on the overall screen scale, considering both width and height.
        - Use this function for elements that should scale proportionally in all directions.
    - #### `screenWidth: number`:
        - Provides the actual width of the device's screen in pixels.
    - #### `screenHeight: number`:
        - Provides the actual height of the device's screen in pixels.

### Usage:

    To utilize these functions for creating a responsive UI, follow these steps:
    1. Import the required functions and variables from the helper module:

        ```tsx
        import {
          scaleWidth,
          scaleHeight,
          moderateScale,
          scaledSize,
          screenWidth,
          screenHeight,
        } from "@src/utils";
        ```
    2. Use the functions in your styles or component logic to achieve responsive sizing:

        ```tsx
        const styles = StyleSheet.create({
            container: {
            width: scaleWidth(300),
            height: scaleHeight(200),
            marginVertical: moderateScale(10),
            fontSize: scaledSize(16),
            },
        });
        ```

        In this example, the width and height of the container will be scaled proportionally based on the device's screen width and height. The moderateScale function is used to provide a moderate scaling effect to the margin, and the scaledSize function is used to scale the font size.
    3. Adjust the predefined design width and height if needed:

        ```tsx
        export const designWidth = 375;
        export const designHeight = 812;
        ```
        Modify these values according to your design specifications to ensure accurate scaling.

### Notes:

    - The `scaleWidth` and `scaleHeight` functions are useful for scaling dimensions, such as width, height, padding, or margin values.
    - The `moderateScale` function can be used to achieve a more subtle scaling effect by providing a factor that controls the degree of scaling.
    - The `scaledSize` function is handy for scaling font sizes or any other numerical values that need to adapt to different screen sizes.

Feel free to customize and extend these functions as per your project requirements to achieve the desired responsive behavior.
