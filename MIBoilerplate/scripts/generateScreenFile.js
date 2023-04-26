/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

// get folder name from terminal argument
const folderName = process.argv[2];
if (!folderName) {
  console.error('Please provide a folder name');
  process.exit(1);
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// create the folder
fs.mkdir(`../src/screens/${folderName}`, err => {
  if (err) throw err;
  console.log(`Folder ${folderName} created successfully`);

  const fileName = folderName.toLocaleLowerCase();

  const useHookFileName = capitalizeFirstLetter(fileName);

  // create hook js hookFile.ts
  const hookFile = `import { useAppContext } from '@src/context';

const use${useHookFileName} = () => {
  const { navigation, styles } = useAppContext();

  // add your code here

  return {
    navigation,
    styles: styles.homeStyle,
  };
};

export default use${useHookFileName};
`;

  fs.writeFileSync(
    path.join(`../src/screens/${fileName}`, `use${useHookFileName}.ts`),
    hookFile,
    errHook => {
      if (errHook) throw errHook;
      console.log(`use${fileName}.ts file created successfully`);
    }
  );

  // create styleFile.ts
  const styleFile = `import { StyleSheet } from 'react-native';

import { Palette } from '@src/utils';

export const ${fileName}Styles = ({}: Palette) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
  });
`;
  fs.writeFileSync(
    path.join(`../src/screens/${fileName}`, `${fileName}.style.ts`),
    styleFile,
    errStyles => {
      if (errStyles) throw errStyles;
      console.log(`${fileName}.style.ts file created successfully`);
    }
  );

  // create defaultScreen.tsx
  const defaultScreen = `import React from 'react';
import { View } from 'react-native';

import { Text } from '@app/blueprints';

import use${useHookFileName} from './use${useHookFileName}';

const ${useHookFileName}Screen = () => {
  const { styles } = use${useHookFileName}();

  return (
    <View style={styles.container}>
      <Text preset="h1">${useHookFileName} Screen</Text>
    </View>
  );
};

export default React.memo(${useHookFileName}Screen);
`;

  fs.writeFileSync(
    path.join(`../src/screens/${fileName}`, `${fileName}Screen.tsx`),
    defaultScreen,
    errScreen => {
      if (errScreen) throw errScreen;
      console.log('homeScreen.ts file created successfully');
    }
  );

  const exportToIndex = `export { default as ${useHookFileName}Screen } from './${folderName}/${fileName}Screen';\n`;

  fs.appendFile(`../src/screens/index.ts`, exportToIndex, errScreen => {
    if (errScreen) throw errScreen;
    console.log(`${useHookFileName} file created successfully`);
  });
});
