exports.config =
  # See docs at http://brunch.readthedocs.org/en/latest/config.html.
  conventions:
    ignored: /(^vendor\\.*\.less)|(^vendor\/.*\.less)|(^|\/)node_modules\/|(^|\/)_/
    assets: /^app\/assets\//
  modules:
    definition: false
    wrapper: false
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
          'vendor/jquery/jquery.js'
          'vendor/angular/angular.js'
          'vendor/angular-resource/angular-resource.js'
          'vendor/angular-cookies/angular-cookies.js'
          'vendor/angular-sanitize/angular-sanitize.js'
        ]
        afer: [
          'vendor/foundation/mega-drop.js'
        ]

    stylesheets:
      joinTo:
        'css/app.css': /^(app|vendor)/
      order:
        before: [
          'vendor/foundation/css/foundation.css'
          'vendor/foundation/css/normalize.css'
          'vendor/foundation/css/mega-drop.css'
          'vendor/foundation/css/foundation.top-bar.css'
        ]
        after: [
          'vendor/foundation/css/presentation.css'
        ]

    templates:
      joinTo: 
        'js/dontUseMe' : /^app/ # dirty hack for Jade compiling.

  plugins:
    jade:
      pretty: yes # Adds pretty-indentation whitespaces to output (false by default)
    jade_angular:
      modules_folder: 'partials'
      locals: {}

    bower:
      extend:
        "bootstrap" : 'vendor/bootstrap/docs/assets/js/bootstrap.js'
        "angular-mocks": []
        "styles": []
      asserts:
        "img" : /bootstrap(\\|\/)img/
        "font": /font-awesome(\\|\/)font/

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
    # linter:
    #     enabled: on
    #     coffeelint:
    #         pattern: /.*\.coffee$/
    #         options:
    #             indentation:
    #                 value: 2
    #                 level: "error"



