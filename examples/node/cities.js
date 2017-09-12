var _ = require('lodash');
var chart = require('ascii-horizontal-barchart');

var alabama = require('../../cities/alabama.json');
var alaska = require('../../cities/alaska.json');
var arizona = require('../../cities/arizona.json');
var arkansas = require('../../cities/arkansas.json');
var california = require('../../cities/california.json');

var data = _.concat(alabama, alaska, arizona, arkansas, california);

var commonCityName = _.chain(data).groupBy('name').mapValues(function (p) {
  return p.length;
}).pickBy(function (d) {
  return d > 1;
}).value();

var commonCityEndings = {
  ' City': _.filter(data, function (c) { return _.endsWith(c.name, ' City')}).length,
  '-ville': _.filter(data, function (c) { return _.endsWith(c.name, 'ville')}).length,
  '-dale': _.filter(data, function (c) { return _.endsWith(c.name, 'dale')}).length,
  ' Valley': _.filter(data, function (c) { return _.endsWith(c.name, ' Valley')}).length,
  ' Park': _.filter(data, function (c) { return _.endsWith(c.name, ' Park')}).length,
  ' Point': _.filter(data, function (c) { return _.endsWith(c.name, ' Point')}).length,
  '-burg': _.filter(data, function (c) { return _.endsWith(c.name, 'burg')}).length,
  '-burgh': _.filter(data, function (c) { return _.endsWith(c.name, 'burgh')}).length,
  '-boro': _.filter(data, function (c) { return _.endsWith(c.name, 'boro')}).length,
  ' Ridge': _.filter(data, function (c) { return _.endsWith(c.name, ' Ridge')}).length,
  ' Springs': _.filter(data, function (c) { return _.endsWith(c.name, ' Springs')}).length,
  ' Village': _.filter(data, function (c) { return _.endsWith(c.name, ' Village')}).length
};

console.log('\n\nCommon city names\n-----------------')
console.log(chart(commonCityName, true, 80));

console.log('\n\nCommon city endings\n-------------------')
console.log(chart(commonCityEndings, true, 80));
