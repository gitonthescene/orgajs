import Node from '../node'
const inlineParse = require('../inline').parse

function parsePlanning() {
  const token = this.next()
  if (!token || token.name !== `planning`) { return undefined }
  return new Node('planning').with(token.data)
}

function parseDrawer() {
  const begin = this.next()
  eatNewline(this)
  const lines = []
  while (this.hasNext()) {
    const t = this.next()
    if ( t.name === `headline` ) { return undefined }
    if (t.name === `drawer.end` ) {
      eatNewline(this)
      return new Node('drawer').with({ name: begin.data.type, value: lines.join(``) })
    }
    lines.push(t.raw)
  }
  return undefined
}

function parseTimestamp() {
  const token = this.next()
  if (!token || token.name !== `timestamp`) { return undefined }
  return new Node('timestamp').with(token.data)
}

function eatNewline(self) {
  // Eat trailing new line
  // @@DAM how do we reach the end of the stream?
  var token = self.peek()
  if (token && token.name === `blank`) {
    self.consume()
  }
}

function process(token, section) {
  if (section.type === `footnote.definition`) return section // headline breaks footnote
  const { level, keyword, priority, tags, content } = token.data
  const currentLevel = section.level || 0
  if (level <= currentLevel) { return section }
  this.consume()
  const text = inlineParse(content)
  const headline = new Node('headline', text).with({
    level, keyword, priority, tags
  })
  eatNewline(this)
  const planning = this.tryTo(parsePlanning)
  if (planning) {
    headline.push(planning)
    eatNewline(this)
  }
  const timestamp = this.tryTo(parseTimestamp)
  if (timestamp) {
    headline.push(timestamp)
    eatNewline(this)
  }

  while (this.hasNext() && this.peek().name === `drawer.begin`) {
    const drawer = this.tryTo(parseDrawer)
    if (!drawer) { // broken drawer
      this.downgradeToLine(this.cursor + 1)
      break
    }
    headline.push(drawer)
  }
  const newSection = new Node(`section`).with({ level })
  newSection.push(headline)
  section.push(this.parseSection(this.unagi(newSection)))
  this._aks = {}
  return this.parseSection(section)
}

module.exports = process
