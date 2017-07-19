import angular from 'angular';
import uiRouter from 'angular-ui-router';
import nightoutComponent from './nightout.component';

let nightoutModule = angular.module('nightout', [
  uiRouter
])
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('nightout', {
        url: '/9a3da/:id',
        component: 'nightout'
      });
  })

.component('nightout', nightoutComponent)

.name;

export default nightoutModule;
