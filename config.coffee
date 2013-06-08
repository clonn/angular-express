exports.config =
  # See http://brunch.io/#documentation for docs.
  paths:
    public: 'public'
  files:
    javascripts:
      joinTo:
        'js/app.js': /^app/
        'js/vendor.js': /^vendor/
        'test/scenarios.js': /^test(\/|\\)e2e/
      order:
        before: [
          'vendor/console-polyfill/index.js'
          'vendor/jquery/jquery.js'
          'vendor/angular/angular.js'
          'vendor/angular-resource/angular-resource.js'
          'vendor/angular-cookies/angular-cookies.js'
          'vendor/angular-sanitize/angular-sanitize.js'
          'vendor/bootstrap/docs/assets/js/bootstrap.js'
        ]

    stylesheets:
      joinTo:
        'css/app.css': /^(app|vendor)/
      order:
        before: [
          'app/styles/app.less'
        ]

    templates:
      joinTo: 
        'js/dontUseMe' : /^app/ # dirty hack for Jade compiling.

  server: 
    path: 'server.coffee'
    port: 3333
    base: '/'
    app: 'express'
    debug: 'brunch:server'
    persistent: true
    interval: 100
    watched: ['express']
    ignore: /(^[.#]|(?:~)$)/
    source: /.*\.coffee$/
    linter:
        enabled: on
        coffeelint:
            pattern: /.*\.coffee$/
            options:
                indentation:
                    value: 2
                    level: "error"



