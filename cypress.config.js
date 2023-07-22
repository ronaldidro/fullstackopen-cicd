const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on) {
      // implement node event listeners here
      on('before:browser:launch', (browser = {}, launchOptions) => {
        console.log(launchOptions.args)

        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-gpu')
        }

        return launchOptions
      })
    },
  },
})
