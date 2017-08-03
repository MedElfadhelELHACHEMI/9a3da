import template from './placelist.html';
import controller from './placelist.controller';
import './placelist.scss';

let placelistComponent = {
  bindings: {
    place:'='
  },
  template,
  controller
};

export default placelistComponent;
