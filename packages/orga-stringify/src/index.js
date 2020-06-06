var serialize = require("./serialize");

module.exports = stringify;

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

// Attach
function stringify(config) {
  this.Compiler = compiler;

  function compiler(tree) {
    if (config.toJSON) return JSON.stringify(tree, getCircularReplacer(), 2);
    return serialize(config, tree);
  }
}
