import template from './create.html';
import controller from './create.controller';
import './create.scss';

let createComponent = {
  bindings: {},
  template,
  controller : ['$scope',controller]
};

export default createComponent;
