/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - If the this doesn't have any explicit thing it's referring to, it will point towards the window.
* 2. Implicit Binding - The this will be relative to the function that it is being called on.
* 3. New Binding - when the this is pointing towards the object that was created by the constructor function.
* 4. Explicit Binding - When a method is used to explicitly bind this.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function add(a, b) {
  //console.log(this);
  return a+b;
}

add(1+2);

// Principle 2

// code example for Implicit Binding

const currentWeather = {
  statement: "The weather is",
  sayWeather: function (weather) {
    console.log(`${this.statement} ${weather}`);
  }
}

currentWeather.sayWeather('Rainy');

// Principle 3

// code example for New Binding

function WeatherMan (weather) {
  this.statement = 'The weather is ';
  this.weather = weather;
  this.tellWeather = function () {
    console.log(this.statement + this.weather);
  }
}

const sunny = new WeatherMan('sunny');
const snowy = new WeatherMan('snowy');

sunny.tellWeather();
snowy.tellWeather();





// Principle 4

// code example for Explicit Binding'

const forecast = "the weather is ";

function whatsWeather () {
  console.log(`Hello, ${forecast} ${this.weather}`)
}

const badweather = {
  weather: 'overcast'
}

const goodWeather = {
  weather: 'sunny'
}

console.log(whatsWeather.call(badweather));
console.log(whatsWeather.call(goodWeather));



const person = {
  name: 'Ruby'
}

const skills = ['HTML', 'CSS', 'JS'];

function introduce () {
  console.log(`Hello! My name is ${this.name} and these are my skills: ${skills}`)
}

introduce.call(person);
