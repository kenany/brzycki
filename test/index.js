'use strict';

const test = require('tape');
const isFunction = require('lodash.isfunction');
const almostEqual = require('almost-equal');

const brzycki = require('../');

test('exports a function', (t) => {
  t.plan(1);
  t.ok(isFunction(brzycki));
});

test('100 for 10', (t) => {
  t.plan(1);
  t.ok(almostEqual(brzycki(100, 10), 133, 1));
});

test('100 for 6', (t) => {
  t.plan(1);
  t.ok(almostEqual(brzycki(100, 6), 116, 1));
});
