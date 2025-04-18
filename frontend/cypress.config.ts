import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200",
    chromeWebSecurity: false,
    setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.ConfigOptions) {
      // Optionally implement event listeners here
    },
  },
});
