const unified = require("unified");
//require("core-js-pure/modules/es.array.index-of");  // For some reason this makes it hard to step through the debugger
const render = require("./compile");
const vfile = require("to-vfile");
const parse = require("orga-unified");
const mutate = require("orga-rehype");
const format = require("rehype-format");
const html = require("rehype-stringify");
const processor = unified().use(parse).use(render, { toJSON: false });
//const processor = unified().use(parse).use(mutate).use(format).use(html);

function main() {
  processor
    .process(
      vfile.readSync(
        "/Users/douglasmennella/ObjectiveC/org-mode-syntax-cheat-sheet/cheat_sheet_org.txt"
      )
    )
    .then(
      (file) => {
        process.stdout.write(String(file));
      },
      (err) => {
        console.log(String(err));
      }
    );
}
main();
