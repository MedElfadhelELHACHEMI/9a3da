import PlacelistModule from './placelist';
import PlacelistController from './placelist.controller';
import PlacelistComponent from './placelist.component';
import PlacelistTemplate from './placelist.html';

describe('Placelist', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PlacelistModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PlacelistController();
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
      expect(PlacelistTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = PlacelistComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(PlacelistTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(PlacelistController);
    });
  });
});
