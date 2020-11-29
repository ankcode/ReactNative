module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@app/navigation': './app/navigation',
          '@app/screens': './app/screens',
          '@app/components': './app/components',
          '@app/api': './app/api',
          '@app/config': './app/config',
          '@app/hooks': './app/hooks',
          '@app/assets': './assets',
        },
      },
    ],
  ],
};
