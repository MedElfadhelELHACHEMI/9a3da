class SignupController {
  constructor($auth) {
    this.name = 'signup';
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

export default SignupController;
