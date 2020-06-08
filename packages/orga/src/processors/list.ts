import Node from '../node'
import OrgaParser from '../parser';

class List extends Node {
  ordered: boolean
  descriptive: boolean
}

class ListItem extends Node {
  ordered: boolean
  content: string
  indent: number
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
      if (!token) break;
      const { name, raw } = token
      const lineIndent = raw.search(/\S/)
      if (name === `blank`) {
        var blankIndent = raw.search(/\n/)
        if (blankIndent === -1) blankIndent = raw.length
        const stripcnt = Math.max(blankIndent - indent, blankIndent)
        token.raw = raw.substr(stripcnt)
      } else {
        if (lineIndent <= indent) break
        if ( name === `list.item` ) {
          token.data.indent = lineIndent - indent;
        }

        token.raw = raw.substr(indent)
      }
      tokens.push(token)
      self.consume()
    }
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
