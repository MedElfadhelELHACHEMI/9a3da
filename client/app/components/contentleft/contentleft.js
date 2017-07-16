import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contentleftComponent from './contentleft.component';

let contentleftModule = angular.module('contentleft', [
  uiRouter
])

.component('contentleft', contentleftComponent)

.name;

export default contentleftModule;
