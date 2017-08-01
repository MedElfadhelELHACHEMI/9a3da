class CreateController {
  constructor($scope,nightService,drinksService) {
    this.name = 'create';
    this.$scope=$scope;
    this.nightService=nightService;
    this.drinksService=drinksService;

    this.Night = {};
    this.$scope.dzOptions = {
      url : 'http://f7e3b5c4.ngrok.io/api/nights',
      paramName : 'photo',
      maxFilesize : '10',
      acceptedFiles : 'image/jpeg, images/jpg, image/png',
      addRemoveLinks : true,
      autoProcessQueue:false,
      uploadMultiple:true,
      parallelUploads:3,

    };
    //Handle events for dropzone
    //Visit http://www.dropzonejs.com/#events for more events
    this.$scope.dzCallbacks = {
      'addedfile' : (file)=>{
        console.log(file);
        this.$scope.newFile = file;
        this.Night.photos.push(file)
      },
      'sending' : (file, xhr, formData) => {
        formData.append('name','test');
        console.log('sending',formData)

      },
      'success' : (file, xhr) => {
        console.log('success', xhr);
      },
      'removedfile':(file) => {
        this.$scope.removeNewFile();
        this.Night.photos.splice(this.Night.photos.indexOf(file),1)
      },
      'complete':(file) => {
        console.log('complele',file)
      }

    };
    //Apply methods for dropzone
    //Visit http://www.dropzonejs.com/#dropzone-methods for more methods
    this.$scope.dzMethods = {};
    this.$scope.removeNewFile = () => {
      this.$scope.dzMethods.removeFile(this.$scope.newFile); //We got $scope.newFile from 'addedfile' event callback
    }
    this.$scope.processQueue = ()=>{
      this.$scope.dzMethods.processQueue();
    }
  }
  $onInit(){
    this.Night=this.nightService.getTemplate();
    this.Night.drinks.push(this.drinksService.getTemplate());
  }
  Add(){
    this.Night.drinks.push(this.drinksService.getTemplate());
    console.log(this.Night)
  }
  Submit(){
    //console.log(this.$scope.dzMethods.getAllFiles())
    console.log(this.Night)
  }
}

export default CreateController;
