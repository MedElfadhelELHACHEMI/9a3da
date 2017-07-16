import ContentrightModule from './contentright';
import ContentrightController from './contentright.controller';
import ContentrightComponent from './contentright.component';
import ContentrightTemplate from './contentright.html';

describe('Contentright', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ContentrightModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ContentrightController();
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
      expect(ContentrightTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ContentrightComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ContentrightTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ContentrightController);
    });
  });
});
