import template from './home.html';
import controller from './home.controller';
import './home.scss';

let homeComponent = {
  bindings: {},
  template,
  controller:['$auth',controller]
};

export default homeComponent;
