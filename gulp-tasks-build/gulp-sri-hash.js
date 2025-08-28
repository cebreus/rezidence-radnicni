const gulp = require('gulp');
const minify = require('gulp-htmlmin');
const sri = require('gulp-sri-hash');

/**
 * @description Add sri integrity hashes into link tags in html
 * @param {string} input path to HTML files
 * @param {string} output path to save HTML files
 * @param {object} params
 * @returns {*} HTML files with integrity hashes
 */

const sriHash = (input, output, params = {}) => {
  return (
    gulp
      .src(input)
      .pipe(sri())
      // Duplicate from `./gulp-html-build.js` because 'sri' converts `defer` to `defer=""`
      // Minify HTML - fix HTML structure like missng closing tags
      .pipe(
        minify({
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
        })
      )
      .pipe(gulp.dest(output))
      .on('end', () => {
        params.cb();
      })
  );
};

module.exports = sriHash;
