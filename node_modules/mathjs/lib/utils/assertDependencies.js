"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertDependencies;

/**
 * Assert that all dependencies of a list with dependencies are available in the provided object `math`.
 *
 * Will throw an exception when there are dependencies missing.
 *
 * @param {Object} math
 * @param {string[]} dependencies
 * @param {string} name   Name for the function to be created. Used to generate a useful error message
 */
function assertDependencies(math, dependencies, name) {
  if (!dependencies.every(function (dependency) {
    return dependency in math;
  })) {
    var missingDependencies = dependencies.filter(function (dependency) {
      return !(dependency in math);
    }); // TODO: create a custom error class for this, a MathjsError or something like that

    throw new Error("Cannot create function ".concat(name, ", ") + "some dependencies are missing: ".concat(missingDependencies.join(', '), "."));
  }
}