export default class Night{
  constructor($http,endPoint){
    'ngInject';
    this.$http= $http;
    this.endPoint=endPoint;
  }
  getAck(){
    return 'Night';
  }
  getTemplate(){
    return {
      title:'',
      place_id:0,
      kamia:'',
      experience:'',
      drinks:[],
    }
  }
  Add(Night){
    return this.$http({
      method: 'POST',
      url: this.endPoint+'/nights',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : Night
    })
  }
  getOne(id){
    return this.$http({
      method:'GET',
      url:this.endPoint+'/nights/'+id,
    })
  }
  getAll(){
    return this.$http({
      method:'GET',
      url:this.endPoint+'/nights',
    })
  }

}