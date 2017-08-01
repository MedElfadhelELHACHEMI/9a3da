export default class Drinks{
  constructor($http,endPoint){
    'ngInject';
    this.$http=$http;
    this.endPoint=endPoint;
  }
  getTemplate(){
    return {
      name:'blank',
      brand:'',
      thumbnail:''
    }
  }
  getSelection(){
    // return this.$http({
    //   method:'GET',
    //   url:this.endPoint+'/drinks',
    // })
    return [
      'heineken','celtia','stella','33'
    ]
  }
}