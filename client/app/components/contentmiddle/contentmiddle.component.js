import template from './contentmiddle.html';
import controller from './contentmiddle.controller';
import './contentmiddle.scss';

let contentmiddleComponent = {
  bindings: {
    nights:'='
  },
  template,
  controller
};

export default contentmiddleComponent;
