const { defineConfig } = require("cypress");
{
  reporter : "mochawesome"
  reporterOptions : {
  reportDir: "cypress/reports"
    overwrite: false
    html: true
    json :  false
  }
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/books",
  },
  env: {
    APP_HOST: "https://api.v2.emissions-api.org/",
  },
  
});

