import Node from '../node'
const inlineParse = require('../inline').parse
import OrgaParser from '../parser';

class List extends Node {
  ordered: boolean
  descriptive: boolean
}

class ListItem extends Node {
  ordered: boolean
  content: string
  indent: number
  bodyIndent: number
  checked: boolean
  tag?: string
}

export default function(token, section: Node): Node {

  const self = this

  const parseListItem = () => {
    const { indent, content, ordered, checked, tag } = self.next().data
    const tokens = []
    var eol = this.eatNewline() || ''
    var contents = content + eol
    const item = new ListItem(`list.item`).with({ ordered, tag, indent, content: contents })
    if (checked !== undefined) {
      item.checked = checked
    }
    while (self.hasNext()) {
      var token = self.peek()
      const { name, raw } = token
      const lineIndent = raw.search(/\S/)
      if (name !== `blank`) {
        if (lineIndent <= indent) break
        item.bodyIndent = item.bodyIndent || lineIndent;
        token.raw = token.raw.substr(item.bodyIndent)
      }
      tokens.push(token)
      self.consume()
    }
    // Probably better collect the tokens and pass them on than reparsing
    var innerParser = new OrgaParser( this.options )
    innerParser.tokens = tokens
    var root = innerParser.parse('')
    root.children.forEach(nd => item.push(nd));
    return item;
  }

  const parseList = level => {
    const list = new List(`list`)
    while (self.hasNext()) {
      const token = self.peek()
      if ( token.name !== `list.item` ) break
      const { indent } = token.data
      if (indent <= level) break
      const item = parseListItem()
      item.push(parseList(indent))
      list.push(item)
    }
    if (list.children.length > 0) { // list
      list.ordered = (list.children[0] as ListItem).ordered
      list.descriptive = typeof (list.children[0] as ListItem).tag === `string`
      return list
    }
    return undefined
  }

  section.push(this.unagi(parseList(-1)))
  this._aks = {}
  return this.parseSection(section)
}
