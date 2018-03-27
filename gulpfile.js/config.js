const os = require('os');
const path = require('path');
const package = require('../package.json');

// browserify transforms
const requireGlobify = require('require-globify');

// postcss plugins
const autoprefixer = require('autoprefixer');
const babelify = require('babelify');

// configuration for gulp tasks
module.exports = {
  browserSync: {
    opts: {
      server: 'dist'
    }
  },
  browserify: {
    src: 'src/js/script.js',
    bundle: 'script.js',
    dist: 'dist/js',
    watch: 'src/js',
    resave: 'src/js/script.js',
    opts: {
      cache: {},
      packageCache: {},
      debug: true,
      transform: [
      requireGlobify,
      babelify
      ]
    }
  },
  clean: {
    target: 'dist'
  },
  videos: {
    src: 'src/videos/**/*',
    dist: 'dist/videos'
  },
  fonts: {
    src: 'src/fonts/**/*',
    dist: 'dist/fonts'
  },
  images: {
    src: 'src/img/**/*',
    dist: 'dist/img'
  },
  lint: {
    format: ['*', 'gulpfile.js/**/*', 'src/**/*', '!src/svgstore/**/*'],
    js: ['gulpfile.js/**/*.js', 'src/js/**/*.js'],
    sass: 'src/sass/**/*.scss'
  },
  nunjucks: {
    src: 'src/html/**/[^_]*.html',
    dist: 'dist',
    watch: 'src/html/**/*.html',
    opts: {
      path: 'src/html'
    }
  },
  json: {
    src: 'src/json/**/*.json',
    dist: 'dist/json'
  },
  sass: {
    src: 'src/sass/**/*.scss',
    dist: 'dist/css',
    postcss: [autoprefixer({browsers: ['> .1%']})],
    cssnano: {
      safe: true,
      discardComments: {removeAll: true}
    }
  },
  svgstore: {
    src: 'src/svgstore/**/*.svg',
    dist: 'dist/img',
    template: 'src/svgstore/util/_template.mustache',
    sass: '_svgstore.scss',
    out: 'src/sass/util',
    opts: {
      inlineSvg: true
    },
    imagemin: {
      svgoPlugins: [
      {removeTitle: true}
      ]
    }
  }
};
