var test = require('tape');
var isFunction = require('lodash.isfunction');
var almostEqual = require('almost-equal');

var brzycki = require('../');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(brzycki));
});

test('100 for 10', function(t) {
  t.plan(1);
  t.ok(almostEqual(brzycki(100, 10), 133, 1));
});

test('100 for 6', function(t) {
  t.plan(1);
  t.ok(almostEqual(brzycki(100, 6), 116, 1));
});
