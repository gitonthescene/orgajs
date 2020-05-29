"use strict";
var all = require("./all");

module.exports = serializeText;

function serializeText(ctx, node, index, parent) {
  var rows = node.children.filter((nd) => nd.type !== "whitespace");
  var contents = [];
  var samplerow;
  rows.forEach((row) => {
    if (row.type === "table.row") {
      samplerow = row.children.map((cell) => all({}, cell));
      contents.push(samplerow);
    } else contents.push("separator");
  });
  // What about misshapen tables?  Maybe render as a block??
  var dims = [...samplerow.keys()].map((i) =>
    Math.max(...contents.map((row) => row[i].length))
  );
  var separator = `|${dims.map((dim) => "-".repeat(dim + 2)).join("+")}|`;
  var txt = "";
  contents.forEach((row) => {
    if (row === "separator") {
      txt += `${separator}\n`;
    } else {
      txt += `|${row
        .map((cell, i) => ` ${cell.padStart(dims[i])} `)
        .join("|")}|\n`;
    }
  });
  return txt;
}
