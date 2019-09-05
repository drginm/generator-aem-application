load("galen-bootstrap/galen-bootstrap.js");
load("aem-utils/aem-utils.js");

var TEST_USER = {
    username: "testuser@example.com",
    password: "test123"
};

$galen.settings.website = "http://localhost:4502/";

$galen.registerDevice("mobile", inAEMServer("mobile emulation", "450x700", ["mobile"]));
$galen.registerDevice("tablet", inAEMServer("tablet emulation", "600x700", ["tablet"]));
$galen.registerDevice("desktop", inAEMServer("desktop emulation", "1024x768", ["desktop"]));

function inAEMServer(name, size, tags) {
  return new Device({
      deviceName: name,
      tags: tags,
      size: size,
      initDriver: function (url) {
          if (_globalSingleDriver === null) {
              _globalSingleDriver = createDriver(url, size);
          }
          this.driver = _globalSingleDriver;

          if (url !== null) {
              this.driver.get(url);

              //If it had to login then let's reload the page
              if(performLogin(_globalSingleDriver)) {
                  this.driver.get(url);
              }
          }

          if (size !== null) {
              resize(this.driver, size);
          }

          return this.driver;
      },
      quit: function () {
      }
  });
}

(function (export) {
    export.TEST_USER = TEST_USER;
})(this);
