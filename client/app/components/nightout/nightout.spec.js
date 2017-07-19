import NightoutModule from './nightout';
import NightoutController from './nightout.controller';
import NightoutComponent from './nightout.component';
import NightoutTemplate from './nightout.html';

describe('Nightout', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NightoutModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NightoutController();
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
      expect(NightoutTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = NightoutComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(NightoutTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(NightoutController);
    });
  });
});
