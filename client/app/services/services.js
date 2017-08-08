import angular from 'angular';
import Night from './night.service';
import Drinks from './drinks.service';
import Places from './places.service';
import User from './user.service';
import Comment from './comments.service';
import Rating from './ratings.service';

let serviceModule = angular.module('app.services', [])
  .service('nightService',Night)
  .service('drinksService',Drinks)
  .service('placesService',Places)
  .service('userService',User)
  .service('commentService',Comment)
  .service('ratingsService',Rating)
  .constant('endPoint','https://glacial-sea-87801.herokuapp.com/api')
  .name;

export default serviceModule;

