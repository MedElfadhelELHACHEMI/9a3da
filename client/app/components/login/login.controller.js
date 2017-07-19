class LoginController {
  constructor($auth) {
    this.name = 'login';
    this.$auth=$auth;
  }
  authenticate(provider){
    console.log(provider)
    this.$auth.authenticate(provider)
      .then((response)=>{
        console.log(response)
        console.log(this.$auth.isAuthenticated())
      })
      .catch((response)=>{
        console.error(response)
      });
  }
}

export default LoginController;
