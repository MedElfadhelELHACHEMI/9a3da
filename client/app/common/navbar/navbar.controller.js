class NavbarController {
  constructor($auth) {
    this.name = '9A3da';
    this.$auth=$auth;
    console.log(this.$auth.isAuthenticated())
  }
}

export default NavbarController;
