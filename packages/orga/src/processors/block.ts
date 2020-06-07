import Node from '../node'
import OrgaParser from '../parser';

function parseBlock() {
  const t = this.next()
  const { data: { type, params } } = t
  const tokens = []
  this.eatNewline();
  while (this.hasNext()) {
    const t = this.next()
    if ( t.name === `headline` ) { return undefined }
    var eol = this.eatNewline();
    if (t.name === `block.end` && t.data.type.toUpperCase() === type.toUpperCase() ) {
      var block = new Node('block').with({ name: type.toUpperCase(), params })

      var innerParser = new OrgaParser( this.options )
      innerParser.tokens = tokens
      var root = innerParser.parse('')
      root.children.forEach(nd => block.push(nd));

      return block
    }
    tokens.push(t)
    if (eol) tokens.push({name:`blank`, raw: eol})
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
