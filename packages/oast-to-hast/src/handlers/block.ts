import u from 'unist-builder'
import highlight from './_highlight'
import { all } from '../transform'

export default (h, node) => {
  const name = node.name.toUpperCase()
  // Maybe this should not transform the body but rather extract text
  // For now just assume it's a text block
  const body = all(h, node.children[0])[0];
  switch(name) {
  case `HTML`:
    return u('raw', body.value)
  case `SRC`:
    return src(h, node, body)
  case `QUOTE`:
    return quote(h, node, body)
  case `COMMENT`:
    return undefined
  case `CENTER`:
    return center(h, node, body)
  default:
    const props = { className: name.toLowerCase() }
    return h(node, `pre`, props, [u('text', body.value || '')])
  }
}

function quote(h, node, body) {
  return h(node, `blockquote`, [body])
}

function center(h, node, body) {
  return h(node, `center`, [body])
}

function src(h, node, body) {
  const lang = node.params[0].toLowerCase()
  const props: any = {}
  if (lang) {
    props.className = ['language-' + lang]
  }

  const code = body.value

  if (h.highlight) {
    const highlighted = highlight(lang, code)
    body = u(`raw`, highlighted)
  }

  return h(node, `pre`, [
    h(node, `code`, props, [body])
  ])
}
