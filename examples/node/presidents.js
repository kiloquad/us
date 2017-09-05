var _ = require('lodash');
var chart = require('ascii-horizontal-barchart');

var data = require('../../presidents/presidents.json');

var termsPerParty = _.chain(data).map(function (p) {
  return _.map(p.terms, function (t) {
    t.president = p.title;
    t.state = p.state;
    return t;
  })
}).flatten().sortBy('termStarts').groupBy('party').mapValues(function (p) {
  return p.length;
}).value();

var presPerParty = _.chain(data).map(function (p) {
  return _.chain(p.terms).uniqBy('party').map(function (t) {
    t.president = p.title;
    t.state = p.state;
    return t;
  }).value();
}).flatten().sortBy('termStarts').groupBy('party').mapValues(function (p) {
  return p.length;
}).value();

var presPerState = _.chain(data).groupBy('state').mapValues(function (p) {
  return p.length;
}).value();

console.log('\n\nNumber of terms by party\n------------------------')
console.log(chart(termsPerParty, true, 80));

console.log('\n\nNumber of presidents by party\n-----------------------------')
console.log(chart(presPerParty, true, 80));

console.log('\n\nNumber of presidents by state\n-----------------------------')
console.log(chart(presPerState, true, 80));
