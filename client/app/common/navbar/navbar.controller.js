class NavbarController {
  constructor($auth) {
    this.name = '9A3da';
    this.$auth=$auth;
  }
  authenticate(provider){
    console.log(provider)
    this.$auth.authenticate(provider)
      .then((response)=>{
        console.log(response)
        this.$auth.setToken(response.data._token);
        localStorage.setItem('user',JSON.stringify(response.data.user));
        console.log(this.$auth.isAuthenticated())
      })
      .catch((response)=>{
        console.error('error',response)
      });
  }
}

export default NavbarController;
