"use strict";

var serialize = require("../serialize");

module.exports = all;

// Serialize all children of `parent`.
function all(ctx, parent) {
  var children = parent && parent.children;
  var length = children && children.length;
  var index = -1;
  var results = [];

  while (++index < length) {
    results[index] = serialize(ctx, children[index], index, parent);
  }

  return results.join("");
}
