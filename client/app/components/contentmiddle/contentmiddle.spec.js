import ContentmiddleModule from './contentmiddle';
import ContentmiddleController from './contentmiddle.controller';
import ContentmiddleComponent from './contentmiddle.component';
import ContentmiddleTemplate from './contentmiddle.html';

describe('Contentmiddle', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ContentmiddleModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ContentmiddleController();
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
      expect(ContentmiddleTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ContentmiddleComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ContentmiddleTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ContentmiddleController);
    });
  });
});
