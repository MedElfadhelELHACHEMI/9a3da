import IndexModule from './index';
import IndexController from './index.controller';
import IndexComponent from './index.component';
import IndexTemplate from './index.html';

describe('Index', () => {
  let $rootScope, makeController;

  beforeEach(window.module(IndexModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new IndexController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(IndexTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = IndexComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(IndexTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(IndexController);
    });
  });
});
