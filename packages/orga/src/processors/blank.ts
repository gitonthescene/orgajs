import Node from '../node'

function _process(token, section) {
  const self = this

  var blankSpace = '';
  var blank = token
  while(self.hasNext() && blank.name === `blank`) {
    if (blank.raw === `\n`) self._cel++
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
