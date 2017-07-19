import template from './login.html';
import controller from './login.controller';
import './login.scss';

let loginComponent = {
  bindings: {},
  template,
  controller:['$auth',controller]
};

export default loginComponent;
