class DrinkslistController {
  constructor(drinksService) {
    this.name = 'drinkslist';
    this.drinksService=drinksService;
    this.drinkSelect = [];
  }
  $onInit(){
    console.log('init')
    this.drinkSelect = this.drinksService.getSelection()
  }


}

export default DrinkslistController;
