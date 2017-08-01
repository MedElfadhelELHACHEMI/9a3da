import angular from 'angular';
import uiRouter from 'angular-ui-router';
import drinkslistComponent from './drinkslist.component';

let drinkslistModule = angular.module('drinkslist', [
  uiRouter
])

.component('drinkslist', drinkslistComponent)

.name;

export default drinkslistModule;
