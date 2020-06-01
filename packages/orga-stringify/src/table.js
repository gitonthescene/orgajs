"use strict";
var all = require("./all");

module.exports = serializeText;

function serializeText(ctx, node, index, parent) {
  var rows = node.children; //.filter((nd) => nd.type !== "whitespace");
  var contents = [];
  var samplerow;
  rows.forEach((row) => {
    if (row.type === "table.row") {
      samplerow = row.children.map((cell) => all(ctx, cell));
      contents.push(["row", samplerow]);
    } else if (row.type === "table.separator") {
      contents.push(["separator"]);
    } else {
      contents.push(["whitespace", row.value]);
    }
  });
  // What about misshapen tables?  Maybe render as a block??
  var dims = [...samplerow.keys()].map((i) =>
    Math.max(
      ...contents.map(([typ, row]) => (typ == "row" ? row[i].length : 0))
    )
  );
  var separator = `|${dims.map((dim) => "-".repeat(dim + 2)).join("+")}|`;
  var txt = "";
  contents.forEach(([typ, row]) => {
    if (typ === "separator") {
      txt += `${separator}`;
    } else if (typ === "whitespace") {
      txt += row;
    } else {
      txt += `|${row
        .map((cell, i) => {
          return ` ${
            isNaN(cell) ? cell.padEnd(dims[i]) : cell.padStart(dims[i])
          } `;
        })
        .join("|")}|`;
    }
  });
  return txt;
}
