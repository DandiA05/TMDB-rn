module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv'
      }
    ],
    ['transform-remove-console', { exclude: ['error', 'warn', 'log'] }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./app'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json'
        ],
        alias: {
          '@app': './app',
          '@services': './app/services',
          '@router': './app/services/router',
          '@utils': './app/utils',
          '@adapters': './app/utils/adapters',
          '@helper': './app/utils/helper',
          '@components': './app/components',
          '@addons': './app/components/addons',
          '@atoms': './app/components/atoms',
          '@molecules': './app/components/molecules',
          '@organism': './app/components/organism',
          '@screens': './app/screens',
          '@pages': './app/screens/pages',
          '@templates': './app/screens/templates',
          '@config': './app/config',
          '@kernel': './app/kernel',
          '@store': './app/store',
          '@storage': './app/store/storage',
          '@actions': './app/store/actions',
          '@reducers': './app/store/reducers',
          '@middleware': './app/services/middleware',
          '@satellite': './app/services/satellite',
          '@assets': './app/assets',
          '@images': './app/assets/images',
          '@styles': './app/assets/styles'
        }
      }
    ]
  ]
}
