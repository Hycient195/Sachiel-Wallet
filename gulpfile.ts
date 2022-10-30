const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));


const buildStyles = () =>{
  return src(['sass_precompiled/*.scss', 'pages/**/*.scss'])
    .pipe(sass())
    .pipe(dest('styles'))
}

const watchStyles = () =>{
  watch(['sass_precompiled/*.scss', '*.html', 'pages/**/*.scss', "components/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchStyles);