class NightoutphotosController {
  constructor() {
    this.name = 'nightoutphotos';
    this.selectedPhoto='';
    this.modal=false;
  }
  $onInit(){
    console.log(this.photos)
  }
  dick($index){
    console.log(this.photos[$index].id)
    this.selectedPhoto=this.photos[$index];
    this.modal=true
  }
}

export default NightoutphotosController;
