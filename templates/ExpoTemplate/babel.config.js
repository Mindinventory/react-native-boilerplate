module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: './.env',
          safe: true,
          allowUndefined: false,
        },
      ],
      [
        'module-resolver',
        {
          alias: {
            '@app/blueprints': './blueprints',
            '@src/assets': './src/assets',
            '@src/components': './src/components',
            '@src/constants': './src/constants',
            '@src/context': './src/context',
            '@src/hooks': './src/hooks',
            '@src/i18n': './src/i18n',
            '@src/screens': './src/screens',
            '@src/services': './src/services',
            '@src/store': './src/store',
            '@src/utils': './src/utils',
          },
          extensions: ['.js', '.json'],
          root: ['./src'],
        },
      ],
    ],
    presets: ['babel-preset-expo'],
  };
};
