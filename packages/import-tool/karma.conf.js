// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/import-tool'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // browsers: ['Chrome'],
    browsers: ['Chrome_no_sandbox'],
    customLaunchers: {
      Chrome_no_sandbox: {
        base: 'Chrome',
        flags: [
          '--disable-setuid-sandbox',
          '--disable-gpu',

          // ######################################
          // # Flags for headless-chrome-alpine
          // ######################################
          // # Disable sandbox mode
          // # TODO get this running without it
          "--no-sandbox",
          // # Run in headless mode
          "--headless",
          // # Hide scrollbars on generated images/PDFs
          "--hide-scrollbars",
          // # Expose port 9222 for remote debugging
          "--remote-debugging-port=9222",
          // ######################################
          // # Flags from https://github.com/GoogleChrome/chrome-launcher/blob/master/src/flags.ts
          // ######################################
          // # Disable built-in Google Translate service
          "--disable-features=TranslateUI",
          // # Disable all chrome extensions
          "--disable-extensions",
          // # Disable some extensions that aren't affected by --disable-extensions
          "--disable-component-extensions-with-background-pages",
          // # Disable various background network services, including extension updating,
          // #   safe browsing service, upgrade detector, translate, UMA
          "--disable-background-networking",
          // # Disable syncing to a Google account
          "--disable-sync",
          // # Disable reporting to UMA, but allows for collection
          "--metrics-recording-only",
          // # Disable installation of default apps on first run
          "--disable-default-apps",
          // # Mute any audio
          "--mute-audio",
          // # Disable the default browser check, do not prompt to set it as such
          "--no-default-browser-check",
          // # Skip first run wizards
          "--no-first-run",
          // # Disable backgrounding renders for occluded windows
          "--disable-backgrounding-occluded-windows",
          // # Disable renderer process backgrounding
          "--disable-renderer-backgrounding",
          // # Disable task throttling of timer tasks from background pages.
          "--disable-background-timer-throttling",
          // # Disable background tracing (aka slow reports & deep reports) to avoid 'Tracing already started'
          "--force-fieldtrials=*BackgroundTracing/default/",
        ],
      },
    },
    singleRun: false,
    restartOnFileChange: true
  });
};
