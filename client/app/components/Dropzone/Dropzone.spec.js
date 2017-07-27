import DropzoneModule from './Dropzone';
import DropzoneController from './Dropzone.controller';
import DropzoneComponent from './Dropzone.component';
import DropzoneTemplate from './Dropzone.html';

describe('Dropzone', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DropzoneModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DropzoneController();
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
      expect(DropzoneTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = DropzoneComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(DropzoneTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(DropzoneController);
    });
  });
});
