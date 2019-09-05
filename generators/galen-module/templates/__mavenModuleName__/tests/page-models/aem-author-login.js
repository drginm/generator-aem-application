this.LoginPage = $page("Login page", {
  email: "id: username", // css locator
  password: "id: password", // css locator
  submitButton: "id: submit-button", // id locator

  load: function () {
    return this.waitForIt();
  },
  loginAs: function (userName, password) {
    this.email.typeText(userName);
    this.password.typeText(password);
    this.submitButton.click();
  }
});
