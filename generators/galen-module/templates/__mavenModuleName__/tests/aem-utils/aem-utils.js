load("../page-models/aem-author-login.js");

var notLoggedIn = true;
function performLogin(driver) {
  var hadToLogin = false;

  if(isAuthorInstance() && notLoggedIn) {
    var loginPage = new LoginPage(driver).load();
    loginPage.loginAs("admin", "admin");
    notLoggedIn = false;
    hadToLogin = true;
  }

  return hadToLogin;
}

function isAuthorInstance () {
  var isAuthorInstanceProperty = System.getProperty("isAuthorInstance");

  return isAuthorInstanceProperty != null;
}
