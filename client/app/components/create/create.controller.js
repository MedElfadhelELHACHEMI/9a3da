class CreateController {
  constructor($scope) {
    this.name = 'create';



    $scope.dzOptions = {
      url : 'http://f7e3b5c4.ngrok.io/dashboard/nights',
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
    $scope.dzCallbacks = {
      'addedfile' : function(file){
        console.log(file);
        $scope.newFile = file;
      },
      'sending' : function (file, xhr, formData) {
        formData.append('name','test');
        console.log('sending',formData)

      },
      'success' : function(file, xhr){
        console.log('success', xhr);
      },
      'removedfile':function (file) {
        $scope.removeNewFile(file)
      },
      'complete':function (file) {
        console.log('complele',file)
      }

    };


    //Apply methods for dropzone
    //Visit http://www.dropzonejs.com/#dropzone-methods for more methods
    $scope.dzMethods = {};
    $scope.removeNewFile = function(){
      $scope.dzMethods.removeFile($scope.newFile); //We got $scope.newFile from 'addedfile' event callback
    }
    $scope.processQueue = function(){
      $scope.dzMethods.processQueue();
    }
  }
}

export default CreateController;
