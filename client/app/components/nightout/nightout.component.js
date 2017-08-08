import template from './nightout.html';
import controller from './nightout.controller';
import './nightout.scss';

let nightoutComponent = {
  bindings: {},
  template,
  controller:['$stateParams','nightService','userService','commentService',controller]
};

export default nightoutComponent;
