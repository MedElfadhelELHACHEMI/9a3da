import angular from 'angular';
import Night from './night.service';
import Drinks from './drinks.service';

let serviceModule = angular.module('app.services', [])
  .service('nightService',Night)
  .service('drinksService',Drinks)
  .constant('endPoint','https://glacial-sea-87801.herokuapp.com/api')
  .name;

export default serviceModule;

