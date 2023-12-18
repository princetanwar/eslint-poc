module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Description of the rule',
    },
    fixable: 'code',
    schema: [], // no options
  },
  create(context) {
    return {
      // callback functions
      CallExpression(node) {
        if (node.callee.name === 'fun') {
          context.report({ node, message: "do't use fun method" });
        }
      },
    };
  },
};
