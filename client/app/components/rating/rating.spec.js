import RatingModule from './rating';
import RatingController from './rating.controller';
import RatingComponent from './rating.component';
import RatingTemplate from './rating.html';

describe('Rating', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RatingModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RatingController();
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
      expect(RatingTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = RatingComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(RatingTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(RatingController);
    });
  });
});
