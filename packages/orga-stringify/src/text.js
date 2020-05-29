"use strict";
var all = require("./all");

module.exports = serializeText;

function serializeText(ctx, node, index, parent) {
  if (node.type === "text") return node.value;
  if (node.type === "keyword") return `#+${node.key}: ${node.value}\n`;
  if (node.type === "comment") return node.value;
  if (node.type === "whitespace") return node.value;

  var inner = all(ctx, node);
  if (node.type === "bold") return `*${inner}*`;
  if (node.type === "italic") return `/${inner}/`;
  if (node.type === "underline") return `_${inner}_`;
  if (node.type === "strikeThrough") return `+${inner}+`;
  if (node.type === "verbatim") return `=${inner}=`;
  if (node.type === "horizontalRule") return `-----`;
}
