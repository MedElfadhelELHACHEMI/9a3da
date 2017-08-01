import template from './drinkslist.html';
import controller from './drinkslist.controller';
import './drinkslist.scss';

let drinkslistComponent = {
  bindings: {
    drinks:'='
  },
  template,
  controller:['drinksService',controller]
};

export default drinkslistComponent;
