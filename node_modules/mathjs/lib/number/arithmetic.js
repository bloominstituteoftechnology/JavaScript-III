"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.abs = abs;
exports.add = add;
exports.divide = divide;

function abs(a) {
  return Math.abs(a);
}

abs.signature = 'number';

function add(a, b) {
  return a + b;
}

add.signature = 'number, number';

function divide(a, b) {
  return a / b;
}

divide.signature = 'number, number';