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

function stringify(config) {
  this.Compiler = compiler;
  compiler.handlers = { ...serialize.handlers };
  function compiler(tree) {
    if (config.toJSON) return JSON.stringify(tree, getCircularReplacer(), 2);
    return serialize({ handlers: compiler.handlers }, tree);
  }
}
