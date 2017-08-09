import template from './comments.html';
import controller from './comments.controller';
import './comments.scss';

let commentsComponent = {
  bindings: {
    id:'='
  },
  template,
  controller: ['commentService','userService',controller]
};

export default commentsComponent;
