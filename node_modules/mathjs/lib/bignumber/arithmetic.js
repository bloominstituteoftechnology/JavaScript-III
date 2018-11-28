"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.abs = abs;
exports.add = add;
exports.divide = divide;

function abs(a) {
  return a.abs();
}

abs.signature = 'BigNumber';

function add(a, b) {
  return a.add(b);
}

add.signature = 'BigNumber, BigNumber';

function divide(a, b) {
  return a.div(b);
}

divide.signature = 'BigNumber, BigNumber';