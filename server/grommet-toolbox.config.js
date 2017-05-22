import path from 'path';

export default {
  jsAssets: [
    'mocks/**/*.js',
    'routes/**/*.js',
    'test/**/*.js',
    'websocket/**/*.js', '*.js',
  ],
  testPaths: ['test/*.spec.js'],
  mainJs: 'index.js',
  eslintConfigPath: path.resolve(__dirname, '../.eslintrc'),
};
