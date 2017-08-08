import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ratingComponent from './rating.component';

let ratingModule = angular.module('rating', [
  uiRouter
])

.component('rating', ratingComponent)

.name;

export default ratingModule;
