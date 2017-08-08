export default class Comment{
  constructor($http,endPoint){
    "ngInject"
    this.$http = $http;
    this.endPoint = endPoint;
  }
  getTemplate(commentable_type,commentable_id,commenter_id){
    return {
      body:'',
      commenter_id:commenter_id || 1 ,
      commentable_id,
      commentable_type,
    }
  }


  Add(comment){
    return this.$http({
      method:'POST',
      url:this.endPoint+'/comments/'+comment.commentable_id,
      data:comment
    })
  }
}