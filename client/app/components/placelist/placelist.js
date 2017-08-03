import angular from 'angular';
import uiRouter from 'angular-ui-router';
import placelistComponent from './placelist.component';

let placelistModule = angular.module('placelist', [
  uiRouter
])

.component('placelist', placelistComponent)

.name;

export default placelistModule;
