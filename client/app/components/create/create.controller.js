class CreateController {
  constructor($scope,nightService,drinksService) {
    this.name = 'create';
    this.$scope=$scope;
    this.nightService=nightService;
    this.drinksService=drinksService;
    this.step='details';

    this.Night = {};
    this.$scope.dzOptions = {
      url : 'https://glacial-sea-87801.herokuapp.com/api/nights',
      paramName : 'photos',
      maxFilesize : '10',
      acceptedFiles : 'image/jpeg, images/jpg, image/png',
      addRemoveLinks : true,
      autoProcessQueue:false,
      uploadMultiple:true,

    };
    this.$scope.dzCallbacks = {
      'addedfile' : (file)=>{
        console.log(file);
        this.$scope.newFile = file;
      },
      'sending' : (file, xhr, formData) => {
        angular.forEach(this.Night,(value,key)=>{
          if(Array.isArray(value)){
            angular.forEach(value,(val,index)=>{
              if(val.id && val.quantity){
                formData.append(`${key}[${val.id}]`,val.quantity)
              }
            })
          }else{
            formData.append(key,value)
          }
        })
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
      },
      'error':(file,errorMessage,xhr)=>{
        console.log('errormessage',errorMessage)
      }

    };
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
    //console.log(this.Night)
  }
  Submit(){
    //console.log(this.$scope.dzMethods.getAllFiles())
    this.nightService.Add(this.Night).then((resolve,reject)=>{
      if(resolve){
        console.log(resolve.data)
      }else{
        console.log(reject)
      }
    })
    console.log(this.Night)
  }
}

export default CreateController;
