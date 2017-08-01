import NightoutphotosModule from './nightoutphotos';
import NightoutphotosController from './nightoutphotos.controller';
import NightoutphotosComponent from './nightoutphotos.component';
import NightoutphotosTemplate from './nightoutphotos.html';

describe('Nightoutphotos', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NightoutphotosModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NightoutphotosController();
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
      expect(NightoutphotosTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = NightoutphotosComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(NightoutphotosTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(NightoutphotosController);
    });
  });
});
