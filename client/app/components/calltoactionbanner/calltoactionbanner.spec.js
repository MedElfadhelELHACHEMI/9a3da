import CalltoactionbannerModule from './calltoactionbanner';
import CalltoactionbannerController from './calltoactionbanner.controller';
import CalltoactionbannerComponent from './calltoactionbanner.component';
import CalltoactionbannerTemplate from './calltoactionbanner.html';

describe('Calltoactionbanner', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CalltoactionbannerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CalltoactionbannerController();
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
      expect(CalltoactionbannerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = CalltoactionbannerComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(CalltoactionbannerTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(CalltoactionbannerController);
    });
  });
});
