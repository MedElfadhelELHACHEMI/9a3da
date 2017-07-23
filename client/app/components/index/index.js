import angular from 'angular';
import uiRouter from 'angular-ui-router';
import indexComponent from './index.component';

let indexModule = angular.module('index', [
  uiRouter
])

.component('index', indexComponent)

.name;

export default indexModule;
