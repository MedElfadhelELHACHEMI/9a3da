class NightoutController {
  constructor($stateParams,nightService,userService) {
    "ngInject";
    this.id = $stateParams.id;
    this.loading = false;
    this.nightService=nightService;
    this.user = userService.getStored() || {};
    this.currentNight={}
    this.show=false;

  }
  $onInit(){
    this.loading= true;
    this.nightService.getOne(this.id).then((resolve,reject)=>{
      if(resolve){
        this.loading = false;
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
