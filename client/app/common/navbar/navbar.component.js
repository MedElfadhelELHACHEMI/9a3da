import template from './navbar.html';
import controller from './navbar.controller';
import './navbar.scss';

let navbarComponent = {
  bindings: {},
  template,
  controller:['$auth',controller]
};

export default navbarComponent;
