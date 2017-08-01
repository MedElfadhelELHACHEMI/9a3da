import template from './nightout.html';
import controller from './nightout.controller';
import './nightout.scss';

let nightoutComponent = {
  bindings: {},
  template,
  controller:['$stateParams','nightService',controller]
};

export default nightoutComponent;
