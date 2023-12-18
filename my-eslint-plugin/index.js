const noFunFunction = require('./custom-rule');

module.exports = {
  rules: {
    'no-fun-function': noFunFunction,
  },
  configs: {
    myConfig: {
      rules: {
        'my-eslint-plugin/no-fun-function': 'error',
      },
    },
  },
};
