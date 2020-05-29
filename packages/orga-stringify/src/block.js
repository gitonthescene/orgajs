"use strict";
var all = require("./all");

module.exports = serializeText;

function serializeText(ctx, node, index, parent) {
  var orig = all(ctx, node);
  return `#+BEGIN_${node.name} ${node.params.join(",")}\n${node.value}#+END_${
    node.name
  }\n`;
}
