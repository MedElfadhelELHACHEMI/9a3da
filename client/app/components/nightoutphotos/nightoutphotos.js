import angular from 'angular';
import uiRouter from 'angular-ui-router';
import nightoutphotosComponent from './nightoutphotos.component';

let nightoutphotosModule = angular.module('nightoutphotos', [
  uiRouter
])

.component('nightoutphotos', nightoutphotosComponent)

.name;

export default nightoutphotosModule;
