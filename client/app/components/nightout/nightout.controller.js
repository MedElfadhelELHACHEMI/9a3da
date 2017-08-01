class NightoutController {
  constructor($stateParams,nightService) {
    this.id = $stateParams.id;
    this.nightService=nightService;

  }
  $onInit(){
    //this.nightService.getOne(this.id)
    this.photos=[
      'http://lorempixel.com/output/nightlife-q-c-640-480-5.jpg',
      'http://lorempixel.com/output/nightlife-q-c-640-480-7.jpg',
      'http://lorempixel.com/output/nightlife-q-c-640-480-6.jpg'
    ]
  }
}

export default NightoutController;
