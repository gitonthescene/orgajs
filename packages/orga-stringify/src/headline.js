"use strict";
var serialize = require("./serialize");

module.exports = serializeText;

function serializeText(ctx, node, index, parent) {
  var headline = node.children
    .map((chld, idx) => serialize(ctx, chld, idx, node))
    .filter((txt) => txt !== "")
    .join(`\n`);
  var keyword = node.keyword ? `${node.keyword} ` : "";
  return `${"*".repeat(node.level)} ${keyword}${headline}\n`;
}
