class NightoutController {
  constructor($stateParams) {
    this.name = $stateParams.id;
    console.log($stateParams)

  }
}

export default NightoutController;
