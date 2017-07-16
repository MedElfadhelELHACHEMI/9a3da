import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contentrightComponent from './contentright.component';

let contentrightModule = angular.module('contentright', [
  uiRouter
])

.component('contentright', contentrightComponent)

.name;

export default contentrightModule;
