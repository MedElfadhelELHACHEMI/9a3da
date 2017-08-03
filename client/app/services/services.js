import angular from 'angular';
import Night from './night.service';
import Drinks from './drinks.service';
import Places from './places.service';

let serviceModule = angular.module('app.services', [])
  .service('nightService',Night)
  .service('drinksService',Drinks)
  .service('placesService',Places)
  .constant('endPoint','https://glacial-sea-87801.herokuapp.com/api')
  .name;

export default serviceModule;

