class PlacelistController {
  constructor(placesService) {
    "ngInject";
    this.name = 'placelist';
    this.placesService = placesService;
  }
  $onInit(){
    this.placesService.getAll().then((resolve,reject)=>{
      if(resolve){
        console.log('places',resolve.data)
        this.places = resolve.data;
      }else{
        console.error(reject)
      }
    })
  }
  Set(id){
    this.place=id;
    console.log('setplace',this.place)
  }
}

export default PlacelistController;
