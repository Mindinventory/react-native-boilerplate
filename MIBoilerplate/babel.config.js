module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@app/blueprints': './blueprints',
          '@src/constants': './src/constants',
          '@src/context': './src/context',
          '@src/hooks': './src/hooks',
          '@src/i18n': './src/i18n',
          '@src/screens': './src/screens',
          '@src/utils': './src/utils',
        },
        extensions: ['.js', '.json'],
        // alias: {
        //   'app-assets': './app/assets/index.ts',
        //   'app-components': './app/components/index.ts',
        //   'app-constants': './app/constants/index.ts',
        //   'app-contexts': './app/contexts/index.ts',
        //   'app-navigation': './app/navigation/index.ts',
        //   'app-screens': './app/screens/index.ts',
        //   'app-services': './app/services/index.ts',
        //   'app-utils': './app/utils/index.ts',
        // },
        // root: ['./src'],
        root: ['./src'],
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
