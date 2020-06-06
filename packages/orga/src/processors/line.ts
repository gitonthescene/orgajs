import Node from '../node'
const inlineParse = require('../inline').parse

function process(token, section) {

  let nodes = []
  var text = []
  while (this.hasNext()) {
    const token = this.peek()
    if (!token) break;
    // also eats broken block/drawer ends
    if (![`line`, `block.end`, `drawer.end`, `blank`].includes(token.name)) break

    // Check for two successive blank lines.  ( @@DAM: Do lines containing empty space count? )
    this._cel = (token.name === `blank` && token.raw === `\n`) ? this._cel+1 : 0;
    if (section.type === `footnote.definition` && this._cel > 2) break    
    this.consume()
    text.push(token.raw)
  }
  push(text.join(``))
  section.push(new Node(`paragraph`, nodes))

  this._aks = {}
  return this.parseSection(section)

  function push(line) {
    const newNodes = inlineParse(line)
    // merge text newNodes
    if (nodes.length > 0 &&
        nodes[nodes.length - 1].type === `text` &&
        newNodes.length > 0 &&
        newNodes[0].type === `text`) {
      const n = newNodes.shift()
      const last = nodes.pop()
      last.value = `${last.value}${n.value}`
      nodes.push(last)
    }

    nodes = [...nodes, ...newNodes]
  }
}

module.exports = process
