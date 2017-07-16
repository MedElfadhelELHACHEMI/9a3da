import angular from 'angular';
import uiRouter from 'angular-ui-router';
import calltoactionbannerComponent from './calltoactionbanner.component';

let calltoactionbannerModule = angular.module('calltoactionbanner', [
  uiRouter
])

.component('calltoactionbanner', calltoactionbannerComponent)

.name;

export default calltoactionbannerModule;
