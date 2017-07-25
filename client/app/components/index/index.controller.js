class IndexController {
  constructor($auth) {
    this.name = 'index';
    this.$auth=$auth;
  }
  authenticate(provider){
    console.log(provider)
    this.$auth.authenticate(provider)
      .then((response)=>{
        console.log(response)
        this.$auth.setToken(response.token);
        console.log(this.$auth.isAuthenticated())
      })
      .catch((response)=>{
        console.error('error',response)
      });
  }
}

export default IndexController;
