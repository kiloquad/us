var _ = require('lodash');
var chart = require('ascii-horizontal-barchart');

var data = require('../../states/states.json');

var state = 'NY';

var pop = _.chain(data).find({ abbreviation: state }).pick('population').value().population;
var data = [];
_.each(pop, function (p) {
  data[p.year] = p.population;
});

console.log('\n\nState Population (' + state + ')\n---------------------')
console.log(chart(data, true, 80));
