class ContentController {
  constructor(nightService) {
    "ngInject";
    this.name = 'content';
    this.nightService = nightService;
    this.Nights=[];
  }
  $onInit(){
    this.nightService.getAll().then((resolve,reject)=>{
      if(resolve){
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
