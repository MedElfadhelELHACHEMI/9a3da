import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contentComponent from './content.component';

let contentModule = angular.module('content', [
  uiRouter
])

.component('content', contentComponent)

.name;

export default contentModule;
