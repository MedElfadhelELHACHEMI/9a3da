import ContentleftModule from './contentleft';
import ContentleftController from './contentleft.controller';
import ContentleftComponent from './contentleft.component';
import ContentleftTemplate from './contentleft.html';

describe('Contentleft', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ContentleftModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ContentleftController();
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
      expect(ContentleftTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ContentleftComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ContentleftTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ContentleftController);
    });
  });
});
