class ContentController {
  constructor(nightService) {
    "ngInject";
    this.name = 'content';
    this.loading=false;
    this.nightService = nightService;
    this.Nights=[];
  }
  $onInit(){
    this.loading=true;
    this.nightService.getAll().then((resolve,reject)=>{
      if(resolve){
        this.loading=false;
        this.Nights = resolve.data;
        console.log(resolve.data[0].title)
      }
      else{
        console.log('error in nights',reject)
      }
    })
  }
}

export default ContentController;
