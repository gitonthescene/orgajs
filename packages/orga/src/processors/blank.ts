import Node from '../node'

function _process(token, section) {
  const self = this
  self._cel++
  var blank = self.consume()
  if (section.type === `footnote.definition` && self._cel > 1) return section
  self._aks = {}
  // @@DAM how do we reach the end of the stream?
  var blankSpace = blank && blank.raw;
  blank = self.peek()
  while(blank && blank.name === `blank`) {
      blankSpace += blank.raw;
      self.consume();
      blank = self.peek();
  }
  section.push(new Node('whitespace').with({ value: blankSpace }));
  return self.parseSection(section)
}

module.exports = _process
