export default class Places{
  constructor($http,endPoint){
    "ngInject";
    this.$http= $http;
    this.endPoint = endPoint;
  }
  getAll(){
    return this.$http({
      method:'GET',
      url:this.endPoint+'/places'
    })
  }
}