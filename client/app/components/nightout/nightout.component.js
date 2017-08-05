import template from './nightout.html';
import controller from './nightout.controller';
import './nightout.scss';

let nightoutComponent = {
  bindings: {},
  template,
  controller:['$stateParams','nightService','userService',controller]
};

export default nightoutComponent;
