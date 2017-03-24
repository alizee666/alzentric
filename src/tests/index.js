import { readdirSync, lstatSync, existsSync } from 'fs';
import { join } from 'path';

// Allows sass mounting
require.extensions['.scss'] = () => {};

const SRC = 'src';
const SPEC_FILE = 'spec.js';
const TEST_DIRS = [
  'modules',
  'containers',
  'elements',
  'components',
  'containers',
  'utils',
];

function importTests(dir) {
  readdirSync(join(SRC, dir))
    .map(file => join(dir, file))
    .map((path) => {
      if (lstatSync(join(SRC, path)).isDirectory()) {
        importTests(path);
      }
      return path;
    })
    .filter(path =>
      lstatSync(join(SRC, path)).isDirectory() &&
      existsSync(join(SRC, path, SPEC_FILE)),
    )
    .forEach(path => require(join(path, SPEC_FILE))); // eslint-disable-line import/no-dynamic-require
}

TEST_DIRS.forEach(importTests);
