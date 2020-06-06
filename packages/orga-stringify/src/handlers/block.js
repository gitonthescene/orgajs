"use strict";
var all = require("./all");

module.exports = serializeText;

function serializeText(ctx, node, index, parent) {
  var orig = all(ctx, node);
  var params = node.params.join(",");
  params = params.length ? ` ${params}` : "";
  return `#+BEGIN_${node.name}${params}\n${node.value}#+END_${node.name}\n`;
}
