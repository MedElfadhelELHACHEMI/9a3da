class NightoutController {
  constructor($stateParams,nightService,userService,commentService) {
    "ngInject";
    this.id = $stateParams.id;
    this.loading = false;
    this.nightService=nightService;
    this.commentService=commentService;
    this.user = userService.getStored() || {};
    this.currentNight={}
    this.show=false;
    this.comment={};
    this.commentLoading=false;

  }
  $onInit(){
    this.loading= true;
    this.nightService.getOne(this.id).then((resolve,reject)=>{
      if(resolve){
        this.loading = false;
        console.log('night',resolve.data)
        this.currentNight=resolve.data;
        this.comment=this.commentService.getTemplate('App\\Night',this.currentNight.id,this.user.id);
        console.log(this.comment)
        this.show=true;
      }else{
        console.log(reject)
      }
    });


  }
  submitComment(){
    this.commentLoading=true;
    console.log(this.comment)
    this.commentService.Add(this.comment).then((resolve,reject)=>{
      if(resolve){
        console.assert(resolve.data)
        this.commentLoading=false
        this.comment=this.commentService.getTemplate('App\\Night',this.currentNight.id,this.user.id);
      }else{
        console.error(reject)
      }
    })
  }
}

export default NightoutController;
