# boostrap-less-themes

Provides theme files for use with Bootstrap less

## Install

```
bower install git://github.com/angular-brunch/bootstrap-less-themes.git
```
or add as a dependency in your `bower.json` file:
```json
{
   ...
   "dependencies": {
      ...
      "bootstrap-less-themes": "git://github.com/scotch/bootstrap-less-themes.git",
   }
}
```

## Example usage

`app.less`

```
// CSS Reset
@import "/bower_components/bootstrap/less/reset.less";

// Theme variables
// Uncomment the theme you would like to use. Themes may include
// override.less files as well, so be sure to add the themes
// override.less file to the bottom of this file.

// Bootstrap default
// @import "/bower_components/bootstrap-less-themes/themes/default/variables.less";

// Sapling default
@import "/bower_components/bootstrap-less-themes/themes/sapling/variables.less";

// Core variables and mixins
@import "/bower_components/bootstrap/less/mixins.less";

// Grid system and page structure
@import "/bower_components/bootstrap/less/scaffolding.less";
@import "/bower_components/bootstrap/less/grid.less";
@import "/bower_components/bootstrap/less/layouts.less";

// Base CSS
@import "/bower_components/bootstrap/less/type.less";
@import "/bower_components/bootstrap/less/code.less";
@import "/bower_components/bootstrap/less/forms.less";
@import "/bower_components/bootstrap/less/tables.less";

// bower_components: common
@import "/bower_components/bootstrap/less/sprites.less";

@import "/bower_components/font-awesome/less/font-awesome.less";

@import "/bower_components/bootstrap/less/dropdowns.less";
@import "/bower_components/bootstrap/less/wells.less";
@import "/bower_components/bootstrap/less/component-animations.less";
@import "/bower_components/bootstrap/less/close.less";

// bower_components: Buttons & Alerts
@import "/bower_components/bootstrap/less/buttons.less";
@import "/bower_components/bootstrap/less/button-groups.less";
@import "/bower_components/bootstrap/less/alerts.less"; // Note: alerts share common CSS with buttons and thus have styles in buttons.less

// bower_components: Nav
@import "/bower_components/bootstrap/less/navs.less";
@import "/bower_components/bootstrap/less/navbar.less";
@import "/bower_components/bootstrap/less/breadcrumbs.less";
@import "/bower_components/bootstrap/less/pagination.less";
@import "/bower_components/bootstrap/less/pager.less";

// bower_components: Popovers
@import "/bower_components/bootstrap/less/modals.less";
@import "/bower_components/bootstrap/less/tooltip.less";
@import "/bower_components/bootstrap/less/popovers.less";

// bower_components: Misc
@import "/bower_components/bootstrap/less/thumbnails.less";
@import "/bower_components/bootstrap/less/media.less";
@import "/bower_components/bootstrap/less/labels-badges.less";
@import "/bower_components/bootstrap/less/progress-bars.less";
@import "/bower_components/bootstrap/less/accordion.less";
@import "/bower_components/bootstrap/less/carousel.less";
@import "/bower_components/bootstrap/less/hero-unit.less";

// Componets: Footer
@import "/bower_components/bootstrap-less-themes/themes/sapling/sticky-footer.less";

// Responsive
@import "/bower_components/bootstrap/less/responsive-utilities.less";
@import "/bower_components/bootstrap/less/responsive-1200px-min.less";
@import "/bower_components/bootstrap/less/responsive-768px-979px.less";
@import "/bower_components/bootstrap/less/responsive-767px-max.less";
@import "/bower_components/bootstrap/less/responsive-navbar.less";

// AngularJS
@import "/bower_components/bootstrap-less-themes/themes/angular/forms.less";

// Utility classes
@import "/bower_components/bootstrap/less/utilities.less"; // Has to be last to override when necessary

// Theme Overrides

// Bootstrap default
// @import "/bower_components/bootstrap-less-themes/themes/default/overrides.less";

// Sapling default
@import "/bower_components/bootstrap-less-themes/themes/isapling/overrides.less";

```

## Copyright and license

Copyright 2013 Kyle Finley

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this work except in compliance with the License.
You may obtain a copy of the License in the LICENSE file, or at:

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
