import Node from '../node'

function _process(token, section) {
  const self = this

  // @@DAM how do we reach the end of the stream?
  var blankSpace = '';
  var blank = token
  while(blank && blank.name === `blank`) {
    if (token.raw === `\n`) self._cel++
    blankSpace += blank.raw;
    self.consume();
    blank = self.peek();
  }
  section.push(new Node('whitespace').with({ value: blankSpace }));
  if (section.type === `footnote.definition` && self._cel > 1) return section
  self._aks = {}
  return self.parseSection(section)
}

module.exports = _process
