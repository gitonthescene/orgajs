"use strict";
var all = require("./all");

module.exports = serializeText;

function serializeText(ctx, node, index, parent) {
  var newctxt =
    node.type === "list"
      ? { ...ctx, level: (ctx.level === undefined ? -1 : ctx.level) + 1 }
      : { ...ctx };
  var orig = all(newctxt, node);
  var inner = orig ? orig.replace(/\r\n|\n$/, "").split(/\r\n|\n/) : [];
  var indent = "";
  if (node.type == "list") {
    var indent = "";
    var ret = inner ? indent + inner.join(`\n${indent}`) + "\n" : "";
    return ret;
  } else {
    var indent = " ".repeat(node.indent);
    var bodyIndent = " ".repeat(node.bodyIndent);
    if (inner.length > 0) {
      inner = bodyIndent + inner.join(`\n${bodyIndent}`) + "\n";
    } else inner = "";
  }
  var checked =
    node.checked === true ? "[X] " : node.checked == false ? "[ ] " : "";

  var bullet = node.ordered ? `${index + 1}.` : "-";
  return `${indent}${bullet} ${checked}${node.content}${inner}`;
}
