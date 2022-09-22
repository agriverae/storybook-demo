
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./storybook-test.cjs.production.min.js')
} else {
  module.exports = require('./storybook-test.cjs.development.js')
}
