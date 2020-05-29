import Node from '../node'

function parseBlock() {
  const t = this.next()
  const { data: { type, params } } = t
  const lines = []
  if (this.peek().name === `blank`) this.consume(); // chew up new line
  while (this.hasNext()) {
    const t = this.next()
    if ( t.name === `headline` ) { return undefined }
    // @@DAM how do we reach the end of the stream?
    var nxt = this.peek()
    var eol = '';
    if (nxt && nxt.name === `blank`) {
        eol = nxt.raw
        this.consume(); // chew up new line
    }
    if (t.name === `block.end` && t.data.type.toUpperCase() === type.toUpperCase() ) {
      if (t.data.type.toUpperCase() === `EXPORT`) {
        const format = params[0]
        return new Node(format).with({ value: lines.join(``) })
      }
      return new Node('block').with({ name: type.toUpperCase(), params, value: lines.join(``) })
    }
    lines.push(t.raw+eol)
  }
  return undefined
}

function process(token, section) {
  const block = this.tryTo(parseBlock)
  if (block) section.push(this.unagi(block))
  else this.downgradeToLine(this.cursor + 1)
  this._aks = {}
  return this.parseSection(section)
}

module.exports = process
