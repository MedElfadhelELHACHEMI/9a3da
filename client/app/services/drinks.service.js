export default class Drinks{
  constructor($http,endPoint){
    'ngInject';
    this.$http=$http;
    this.endPoint=endPoint;
  }
  getTemplate(){
    return {
      id:0,
      quantity:0
    }
  }
  getSelection(){
    return this.$http({
      method:'GET',
      url:this.endPoint+'/drinks',
    })
  }
}