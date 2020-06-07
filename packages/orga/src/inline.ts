import Node from './node'
import uri from './uri'

const LINK_PATTERN = /(.*?)\[\[([^\]]*)\](?:\[([^\]]*)\])?\](.*)/sm; // \1 => link, \2 => text
const FOOTNOTE_PATTERN = /(.*?)\[fn:(\w+)\](.*)/

const PRE = `(?:[\\s\\({'"]|^)`
const POST = `(?:[\\s-\\.,:!?'\\)}]|$)`
const BORDER = `[^,'"\\s]`

function markup(marker: string) {
  return RegExp(`(.*?${PRE})${marker}(${BORDER}(?:.*?(?:${BORDER}))??)${marker}(${POST}.*)`, 'sm')
}

export const parse = (text: string|any[]) => {
  var nodes = _parse(LINK_PATTERN, text, (captures) => {
    return new Node(`link`)
      .with({ uri: uri(captures[0]), desc: captures[1] })
  })
  if (Array.isArray(nodes)) return nodes

  nodes = _parse(FOOTNOTE_PATTERN, text, (captures) => {
    return new Node(`footnote.reference`)
      .with({ label: captures[0] })
  })
  if (Array.isArray(nodes)) return nodes

  const markups = [
    { name: `bold`, marker: `\\*` },
    { name: `verbatim`, marker: `=` },
    { name: `italic`, marker: `/` },
    { name: `strikeThrough`, marker: `\\+` },
    { name: `underline`, marker: `_` },
    { name: `code`, marker: `~` },
  ]
  for (const { name, marker } of markups) {
    nodes = _parse(markup(marker), text, (captures) => {
      return new Node(name, captures[0])
    })
    if (Array.isArray(nodes)) return nodes
  }
  return [new Node(`text`).with({ value: text })]
}


function _parse(pattern, text, post) {
  if (typeof text === `string`) {
    const m = pattern.exec(text)
    if (!m) return text
    m.shift()
    const before = m.shift()
    const after = m.pop()
    let nodes = []
    if ( before.length > 0 ) {
      nodes = nodes.concat(parse(before))
    }
    if (m.length > 0) {
      nodes.push(post(m))
      // nodes.push(new Node(name).with({ value: match }))
    }
    if (after) {
      nodes = nodes.concat(parse(after))
    }
    return nodes
  }

 return undefined
}