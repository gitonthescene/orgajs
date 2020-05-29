import list from './list'
const keyword = require('./keyword')
const headline = require('./headline')
const line = require('./line')
const block = require('./block')
const table = require('./table')
const horizontalRule = require('./horizontal-rule')
const footnote = require('./footnote')
const blank = require('./blank')

module.exports = {
  keyword,
  headline,
  line,
  "block.begin": block,
  "list.item": list,
  "table.row": table,
  "table.separator": table,
  horizontalRule,
  footnote,
  blank,
}
