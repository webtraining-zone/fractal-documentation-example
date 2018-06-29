'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot'); // require the Mandelbrot theme module

/* Set the title of the project */
fractal.set('project.title', 'Custom Components');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

/* Specify a directory of static assets */
fractal.web.set('static.path', __dirname + '/src/static');

/* Set the static HTML build destination */
fractal.web.set('builder.dest', __dirname + '/dist');

//
// Theme Config
// create a new instance with custom config options
//
const customTheme = mandelbrot({
  skin: 'navy',
  styles: [
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
    'default',
    '/css/theme-styles.css',
  ],
  // any other theme configuration values here
});

// specify a directory to hold the theme override templates
customTheme.addLoadPath(__dirname + '/src/theme-overrides');

fractal.web.theme(customTheme); // tell Fractal to use the configured theme by default