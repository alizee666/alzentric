
import gulp from 'gulp';
import toolbox from 'grommet-toolbox';
import { argv } from 'yargs';

import gulpTest from './gulpTest';

// TEMP fix to enable babel-resolver for grommet gulp tests
if (/test|dist/.test(argv._[0])) {
  process.env.BABEL_ENV = 'gulptest';
}

toolbox(gulp);

gulpTest(gulp);
