import angular from 'angular';
import uiRouter from 'angular-ui-router';
import createComponent from './create.component';
let createModule = angular.module('create', [
  uiRouter
])
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('create', {
        url: '/create',
        component: 'create'
      });
  })
  .component('create', createComponent)

  .directive('dropzone', function () {
    return function (scope, element, attrs) {
      let config, dropzone;

      config = scope[attrs.dropzone];

      // create a Dropzone for the element with the given options
      dropzone = new window.Dropzone(element[0], config.options);

      // bind the given event handlers
      angular.forEach(config.eventHandlers, function (handler, event) {
        dropzone.on(event, handler);
      });
    };
  })

.name;

export default createModule;
