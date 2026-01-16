export const config = {
  runner: 'local',

  hostname: 'hub.browserstack.com',
  port: 443,
  path: '/wd/hub',

  specs: ['./e2e/features/**/*.feature'],

  maxInstances: 1,

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Google Pixel 5',
    'appium:platformVersion': '11.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': process.env.BROWSERSTACK_APP_ID,
    'bstack:options': {
      projectName: 'Appium BDD WDIO',
      buildName: 'GitHub Actions Build',
      sessionName: 'Shopping Cart Flow'
    }
  }],

  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 1,

  services: [],

  framework: 'cucumber',

  reporters: ['spec'],

  cucumberOpts: {
    require: ['./e2e/step-definitions/**/*.js'],
    timeout: 60000
  }
}
