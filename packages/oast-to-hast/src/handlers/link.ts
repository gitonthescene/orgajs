import u from 'unist-builder'
import mime from 'mime'

export default (h, node) => {
  const { uri, desc } = node
  let props: any = { href: uri.raw }

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title
  }

  const type = mime.getType(uri.raw)
  if (type && type.startsWith(`image`)) {
    props = { src: uri.raw, alt: desc || uri.raw }
    return h(node, `img`, props)
  }
  return h(node, `a`, props, [
    u(`text`, desc || uri.raw)
  ])
}
