import Node from '../node'
const inlineParse = require('../inline').parse

function process(token, section) {

  const self = this

  const parseTable = () => {
    const table = new Node(`table`)
    while (self.hasNext()) {
      var token = self.peek()
      if (token.name === `blank`) {
        self.eatNewline()
        token = self.peek()
        if (!self.hasNext() ) break
      }
      if ( !token.name.startsWith(`table.`) ) break
      self.consume()
      if (token.name === `table.separator`) {
        table.push(new Node(`table.separator`))
        continue
      }
      if ( token.name !== `table.row` ) break
      const cells = token.data.cells.map(c => new Node(`table.cell`, inlineParse(c)))
      const row = new Node(`table.row`, cells)
      table.push(row)
    }
    if ( token.name === `keyword` && token.data.key === "TBLFM" ) {
      const tblfm = new Node(`keyword`).with(token.data);
      table.push( tblfm );
      self.consume()
    }
    return table
  }

  const table = this.unagi(parseTable())
  section.push(table)

  return this.parseSection(section)
}

module.exports = process
