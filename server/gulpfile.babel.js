import tape from 'gulp-tape';
import tapSpec from 'tap-spec';
import gulp from 'gulp';
import { linterTasks } from 'grommet-toolbox';
import nodemon from 'gulp-nodemon';

const path = require('path');
const argv = require('yargs').argv;

const root = path.resolve('.');

const runSequence = require('run-sequence').use(gulp);

// testTasks(gulp);
linterTasks(gulp);

gulp.task('test', () => {
  process.env.NODE_ENV = 'test';
  return gulp.src('test/*.spec.js')
    .pipe(tape({
      reporter: tapSpec(),
      bail: true,
    }))
    .on('error', (error) => {
      console.error(error.message); // eslint-disable-line no-console
      process.exit(1);
    });
});

gulp.task('test:watcher', () => {
  gulp.watch(['test/*.spec.js'], ['test']);
});

gulp.task('test:watch', (cb) => {
  runSequence('test', 'test:watcher', cb);
});

gulp.task('dev', () => {
  nodemon({
    script: 'index.js',
    args: process.argv.slice(3),
  });
});

gulp.task('test:single', () => {
  process.env.NODE_ENV = 'test';
  if (argv.path) {
    return gulp.src(`${root}/${argv.path}`)
      .pipe(tape({
        reporter: tapSpec(),
      }));
  }
});
