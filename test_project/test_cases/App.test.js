var expect = require('chai').expect;

describe('React Native Appium testing', () => {
  beforeEach(() => {
    $("~app-root").waitForDisplayed(10000, false)
  });

  it('Successful Login Test', () => {
    $('~username').setValue("nabendu");
    $('~password').setValue("654321");
    $("~login").click();
    $("~loginstatus").waitForDisplayed(11000);
    const status = $("~loginstatus").getText();
    expect(status).to.equal('Logged in Successfully');
  });

  it('Unsucessful Login Test', () => {
    $('~username').setValue("nabendu");
    $('~password').setValue("12345");
    $("~login").click();
    $("~loginstatus").waitForDisplayed(10000);
    const status = $("~loginstatus").getText();
    expect(status).to.equal('Incorrect username or password');
  });
});