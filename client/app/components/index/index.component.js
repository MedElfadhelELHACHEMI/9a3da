import template from './index.html';
import controller from './index.controller';
import './index.scss';

let indexComponent = {
  bindings: {},
  template,
  controller:['$auth',controller]
};

export default indexComponent;
