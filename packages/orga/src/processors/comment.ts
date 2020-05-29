import Node from '../node'

function _process(token, section) {
  const self = this;
  var commentText = '';
  while ([`comment`, `blank`].includes(token.name))
  {
      commentText += token.raw;
      self.consume();
      token = self.peek();
  }
  section.push( new Node(`comment`).with({value: commentText}));
  return self.parseSection(section);
}

module.exports = _process
