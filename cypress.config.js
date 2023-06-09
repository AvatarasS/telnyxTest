const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    pageLoadTimeout: 100000,
    specPattern: 'cypress/telnyxTest/*.cy.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 10000,
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

