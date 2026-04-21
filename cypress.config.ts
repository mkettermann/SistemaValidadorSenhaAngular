import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200",
    allowCypressEnv: false,
    setupNodeEvents(on, config) { },
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
    supportFile: 'cypress/support/component.ts',
    setupNodeEvents(on, config) {
      // resolver zone.js e outras dependências
    }
  },
});
