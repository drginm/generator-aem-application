load("init.js");

testOnAllDevices("AEM Homepage", "/content/first-app/en.html", function (driver, device) {
    checkLayout(driver, "specs/aem.gspec", device.tags);
});
