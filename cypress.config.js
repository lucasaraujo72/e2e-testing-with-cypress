const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      screenshotOnRunFailure=false;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://staging.ceezer.com',
  },
});
