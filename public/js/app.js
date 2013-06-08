(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, localRequire(name), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var require = function(name) {
    var path = expand(name, '.');

    if (has(cache, path)) return cache[path];
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex];
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.brunch = true;
})();

window.require.register("app", function(exports, require, module) {
  'use strict';
  var App;

  App = angular.module('app', ['ngCookies', 'ngResource', 'app.controllers', 'app.directives', 'app.filters', 'app.services', 'partials']);

  App.config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider, config) {
      $routeProvider.when('/todo', {
        templateUrl: '/partials/todo.html'
      }).when('/view1', {
        templateUrl: '/partials/partial1.html'
      }).when('/view2', {
        templateUrl: '/partials/partial2.html'
      }).otherwise({
        redirectTo: '/todo'
      });
      return $locationProvider.html5Mode(false);
    }
  ]);
  
});
window.require.register("scripts/controllers", function(exports, require, module) {
  'use strict';
  /* Controllers
  */
  angular.module('app.controllers', []).controller('AppCtrl', [
    '$scope', '$location', '$resource', '$rootScope', function($scope, $location, $resource, $rootScope) {
      $scope.$location = $location;
      $scope.$watch('$location.path()', function(path) {
        return $scope.activeNavId = path || '/';
      });
      return $scope.getClass = function(id) {
        if ($scope.activeNavId.substring(0, id.length) === id) {
          return 'active';
        } else {
          return '';
        }
      };
    }
  ]).controller('MyCtrl1', [
    '$scope', function($scope) {
      return $scope.onePlusOne = 2;
    }
  ]).controller('MyCtrl2', [
    '$scope', function($scope) {
      return $scope;
    }
  ]).controller('TodoCtrl', [
    '$scope', function($scope) {
      $scope.todos = [
        {
          text: "learn angular",
          done: true
        }, {
          text: "build an angular app",
          done: false
        }
      ];
      $scope.addTodo = function() {
        $scope.todos.push({
          text: $scope.todoText,
          done: false
        });
        return $scope.todoText = "";
      };
      $scope.remaining = function() {
        var count;

        count = 0;
        angular.forEach($scope.todos, function(todo) {
          return count += (todo.done ? 0 : 1);
        });
        return count;
      };
      return $scope.archive = function() {
        var oldTodos;

        oldTodos = $scope.todos;
        $scope.todos = [];
        return angular.forEach(oldTodos, function(todo) {
          if (!todo.done) {
            return $scope.todos.push(todo);
          }
        });
      };
    }
  ]);
  
});
window.require.register("scripts/directives", function(exports, require, module) {
  'use strict';
  /* Directives
  */
  angular.module('app.directives', ['app.services']).directive('appVersion', [
    'version', function(version) {
      return function(scope, elm, attrs) {
        return elm.text(version);
      };
    }
  ]);
  
});
window.require.register("scripts/filters", function(exports, require, module) {
  'use strict';
  /* Filters
  */
  angular.module('app.filters', []).filter('interpolate', [
    'version', function(version) {
      return function(text) {
        return String(text).replace(/\%VERSION\%/mg, version);
      };
    }
  ]);
  
});
window.require.register("scripts/services", function(exports, require, module) {
  'use strict';
  /* Sevices
  */
  angular.module('app.services', []).factory('version', function() {
    return "0.1";
  });
  
});
