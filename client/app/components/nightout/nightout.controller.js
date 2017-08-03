class NightoutController {
  constructor($stateParams,nightService) {
    this.id = $stateParams.id;
    this.nightService=nightService;
    this.currentNight={}
    this.show=false;

  }
  $onInit(){
    this.nightService.getOne(this.id).then((resolve,reject)=>{
      if(resolve){
        console.log('night',resolve.data)
        this.currentNight=resolve.data;
        this.show=true;
      }else{
        console.log(reject)
      }
    })
  }
}

export default NightoutController;
