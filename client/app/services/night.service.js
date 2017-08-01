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
      place:'',
      kamia:'',
      experience:'',
      photos:[],
      drinks:[],
    }
  }
  Add(Night){
    return this.$http({
      method: 'POST',
      url: this.endPoint,
      data : Night
    })
  }
  getOne(id){
    return this.$http({
      method:'GET',
      url:this.endPoint+'/nights',
    })
  }

}