import u from 'unist-builder'

export default (h, node) => {
  if ( node.key == 'HTML' )
    return u('raw', node.value)
  return null;
}
