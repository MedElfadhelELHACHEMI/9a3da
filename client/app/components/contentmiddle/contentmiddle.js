import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contentmiddleComponent from './contentmiddle.component';

let contentmiddleModule = angular.module('contentmiddle', [
  uiRouter
])

.component('contentmiddle', contentmiddleComponent)

.name;

export default contentmiddleModule;
