var _ = require('lodash');
var chart = require('ascii-horizontal-barchart');

var alabama = require('../../cities/alabama.json');
var alaska = require('../../cities/alaska.json');
var arizona = require('../../cities/arizona.json');
var arkansas = require('../../cities/arkansas.json');

var data = _.concat(alabama, alaska, arizona, arkansas);

var commonCityName = _.chain(data).groupBy('city').mapValues(function (p) {
  return p.length;
}).pickBy(function (d) {
  return d > 1;
}).value();

var commonCityEndings = {
  ' City': _.filter(data, function (c) { return _.endsWith(c.city, ' City')}).length,
  '-ville': _.filter(data, function (c) { return _.endsWith(c.city, 'ville')}).length,
  '-dale': _.filter(data, function (c) { return _.endsWith(c.city, 'dale')}).length,
  ' Valley': _.filter(data, function (c) { return _.endsWith(c.city, ' Valley')}).length,
  ' Park': _.filter(data, function (c) { return _.endsWith(c.city, ' Park')}).length,
  ' Point': _.filter(data, function (c) { return _.endsWith(c.city, ' Point')}).length,
  '-burg': _.filter(data, function (c) { return _.endsWith(c.city, 'burg')}).length,
  '-burgh': _.filter(data, function (c) { return _.endsWith(c.city, 'burgh')}).length,
  '-boro': _.filter(data, function (c) { return _.endsWith(c.city, 'boro')}).length,
  ' Ridge': _.filter(data, function (c) { return _.endsWith(c.city, ' Ridge')}).length,
  ' Springs': _.filter(data, function (c) { return _.endsWith(c.city, ' Springs')}).length,
  ' Village': _.filter(data, function (c) { return _.endsWith(c.city, ' Village')}).length
};

console.log('\n\nCommon city names\n-----------------')
console.log(chart(commonCityName, true, 80));

console.log('\n\nCommon city endings\n-------------------')
console.log(chart(commonCityEndings, true, 80));
