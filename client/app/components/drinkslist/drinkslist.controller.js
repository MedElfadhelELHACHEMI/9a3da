class DrinkslistController {
  constructor(drinksService) {
    this.name = 'drinkslist';
    this.drinksService=drinksService;
    this.drinkSelect = [];
  }
  $onInit(){
    console.log('init')

    this.drinksService.getSelection().then((resolve,reject)=>{
      if(resolve){
        //console.log(resolve)
        this.drinkSelect = resolve.data;
      }else{
        console.error('error in fetching drinks',reject)
      }
    })
  }
  Set(id,$index){
    console.log('id:',id,'index',$index)
    this.drinks[$index].id=id;
    console.log(this.drinks)
    //console.log(id)
  }


}

export default DrinkslistController;
