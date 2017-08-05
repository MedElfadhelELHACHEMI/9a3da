export default class User{
  constructor(){
    'ngInject';
  }
  getStored(){
    return JSON.parse(localStorage.getItem('user'))
  }
}