class CreateController {
  constructor($scope) {
    this.name = 'create';
    this.dropzone = document.querySelector('.dropzone');
    console.log(this.dropzone)
    $scope.dropzoneConfig = {
      'options': { // passed into the Dropzone constructor
        'url': '4555.php',
        addRemoveLinks : true,
        autoProcessQueue:false,
      },
      'eventHandlers': {
        'addedfile' : function(file){
          console.log('added',file);
          $scope.newFile = file;
        },
        'sending': function (file, formData, xhr) {
        },
        'success': function (file, response) {
        },
        'removedfile':(file) => {
          console.log('canceled',file)
          $scope.removeFile(file)
        }
      }
    };
  }
}

export default CreateController;
