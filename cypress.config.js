const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    "baseUrl":"https://opensource-demo.orangehrmlive.com",
    "defaultCommandTimeout":50000,
    "pageLoadTimeout":120000,
    //"viewportHeight":1180,
    //"viewportWidth":820,
    //"retries" : { "openMode": 1, "runMode": 1},
    env :{
      "url2" : "https://docs.cypress.io/guides/references/configuration",
      "username" : "Admin",
      "password": "admin123" 
    },
    //"video" :"false",
    //"videosFolder" :"cypress/Arpitha"
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    
  },
});
