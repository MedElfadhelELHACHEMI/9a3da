class CommentsController {
  constructor() {
    this.name = 'comments';
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

export default CommentsController;
