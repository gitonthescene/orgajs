"use strict";
var all = require("./all");

module.exports = serializeText;

function serializeText(ctx, node, index, parent) {
  var headline = all(ctx, node);
  var keyword = node.keyword ? `${node.keyword} ` : "";
  return `${"*".repeat(node.level)} ${keyword}${headline}`;
}
