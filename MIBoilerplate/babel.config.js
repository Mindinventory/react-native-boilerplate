module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          'app-assets': './app/assets/index.ts',
          'app-screens': './app/screens/index.ts',
          'app-navigation': './app/navigation/index.ts',
          'app-constants': './app/constants/index.ts',
          'app-components': './app/components/index.ts',
          'app-services': './app/services/index.ts',
          'app-utils': './app/utils/index.ts',
          'app-contexts': './app/contexts/index.ts',
        },
      },
    ],
  ],
};
