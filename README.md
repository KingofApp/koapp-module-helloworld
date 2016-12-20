# Simple Hello world module






This is a very simple example to get the module building basics.

We use the following [Koa elements](https://github.com/KingofApp/docs/tree/master/themes#list-of-elements):
* koa-list

The module structure:
```json
{
  "name": "Hello World",
  "identifier": "helloworld",
  "type": "A",
  "icon": "code",
  "view": "modules/helloworld/index.html",
  "files": ["modules/helloworld/controller.js"],
  "scope": {
    "value": "Name"
  }
}
```

The koa-list will simply display `Hello ` and the `scope.value` variable obtained from the scope :

```html
<koa-item>Hello {{helloworld.modulescope.value}}</koa-item>
```

The modules controller is used to declare itself inside the application, not much going on:
```javascript
(function() {
  'use strict';

  angular
    .module('helloworld', [])
    .controller('helloWorldController', loadFunction);

  loadFunction.$inject = ['$scope', 'structureService', '$location'];

  function loadFunction($scope, structureService, $location) {
    //Register upper level modules
    structureService.registerModule($location, $scope, 'helloworld');
  }

}());
```
