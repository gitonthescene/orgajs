import Parser from '../parser'
var fs = require('fs');
var path= require('path');

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

var data = fs.readFileSync( path.join(__dirname,'tests.json') )
var tests = JSON.parse(String(data));

describe('Parser', () => {
  const parser = new Parser({ todos: ['TODO', 'DONE'], timezone: 'Pacific/Auckland' })
  test.each( tests )('%s', (testname, fname) => {
      var content = fs.readFileSync( path.join( __dirname, fname ) )
      const document = parser.parse(String(content))
      expect(document).toMatchSnapshot()
  });
});
