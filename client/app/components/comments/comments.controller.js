class CommentsController {
  constructor(commentService,userService) {
    this.name = 'comments';
    this.commentService=commentService;
    this.userService=userService
    this.comment={};
    this.commentLoading=false;
    this.user = this.userService.getStored() || {id:1};
  }
  $onInit(){
    this.comment=this.commentService.getTemplate('App\\Night',this.id,this.user.id);

    this.commentService.get(this.id).then((resolve,reject)=>{
      if(resolve){
        this.comments=resolve.data;
      }else{
        console.log(reject)
      }
    })
  }
  submitComment(){
    this.commentLoading=true;
    console.log(this.comment)
    this.commentService.Add(this.comment).then((resolve,reject)=>{
      if(resolve){
        console.assert(resolve.data)
        this.commentLoading=false
        this.$onInit();
        this.comment=this.commentService.getTemplate('App\\Night',this.currentNight.id,this.user.id);
      }else{
        console.error(reject)
      }
    })
  }
}

export default CommentsController;
