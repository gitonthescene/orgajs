// Modelled on [[https://github.com/syntax-tree/hast-util-to-html/blob/master/lib/one.js]]
"use strict";

module.exports = serialize;

var own = {}.hasOwnProperty;
const nullHandler = () => {
  return "";
};
// default handlers
var handlers = {};
handlers.block = require("./block");
handlers.bold = require("./text");
handlers.comment = require("./text");
handlers.headline = require("./headline");
handlers.horizontalRule = require("./text");
handlers.italic = require("./text");
handlers.keyword = require("./text");
handlers.link = require("./link");
handlers.list = require("./list");
handlers["list.item"] = require("./list");
handlers.paragraph = require("./all");
handlers.root = require("./all");
handlers.section = require("./all");
handlers.strikeThrough = require("./text");
handlers.table = require("./table");
handlers.text = require("./text");
handlers.underline = require("./text");
handlers.verbatim = require("./text");
handlers.whitespace = require("./text");

function serialize(ctx, node, index, parent) {
  var handlers = ctx.handlers;
  var type = node && node.type;
  if (!type) {
    throw new Error("Expected node, not `" + node + "`");
  }

  if (!own.call(handlers, type)) {
    throw new Error("Cannot compile unknown node `" + type + "`");
  }
  return handlers[type](ctx, node, index, parent);
}
serialize.handlers = handlers;
