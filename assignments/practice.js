function Parent(attributes) {
  this.age = attributes.age;
  this.name = attributes.name;
  this.location = attributes.location;
  this.phrase = attributes.phrase;
}

Parent.prototype.speak = function () {
  console.log(`${this.name} says ${this.phrase}`);
}

function Child(childAttributes) {
  Parent.call(this, childAttributes)
  this.toy = childAttributes.toy;
}


const fred = new Parent({
  age: 35,
  name: 'Fred',
  location: 'Bedrock',
  phrase: 'Yabdabado'
})
const willma = new Parent({
  age: 35,
  name: 'Willma',
  location: 'Bedrock',
  phrase: 'FRED'
})
const pebbles = new Child({
  age: 2,
  name: 'Pebbles',
  location: 'Bedrock',
  phrase: 'mama',
  toy: 'Rock Doll'
})


console.log(pebbles.toy);
console.log(pebbles.age);

fred.speak();
willma.speak();