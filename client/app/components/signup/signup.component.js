import template from './signup.html';
import controller from './signup.controller';
import './signup.scss';

let signupComponent = {
  bindings: {},
  template,
  controller:['$auth',controller]
};

export default signupComponent;
