/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. "This" tries to bind itself to the window/global scope unless directed otherwise.
 * 2. Using a "pointer" (aka: methods/object) to bind "this" to.
 * 3. Using a constructor function to create/hold information/objects/functions within one pseudo-class.
 * 4. Using function methods to have control over what "this" represents.
 *
 * write out a code example of each explanation above
 */

// Principle 1

function hello() {
  return `Hello ${this}`;
}

console.log(hello());
console.log(this);

// Principle 2

const me = {
  name: "Katie",
  age: 27,
  faveFood: "Seafood",
  cook: function() {
    return `${this.name} likes to cook ${this.faveFood}.`;
  }
};

console.log(me.cook());

// Principle 3

function Person (name, age, occupation, location) {
    this.name = name,
    this.age = age,
    this.occupation = occupation,
    this.location = location,
    this.children = [0],
    this.SO = ['N/A']
    this.spouse = ['N/A']
}

const katieMcKnight = new Person("Katie McKnight", 27, "Student", "St. Joseph, MO");
const chanceHalo = new Person("Chance Halo", 22, "Student", "St. Joseph, MO");
const theresaMcKnight = new Person("Theresa McKnight", 58, "Ministry Assistant", "St. Joseph, MO");
const rickMcKnight = new Person("Rick McKnight", 62, "Retired", "St. Joseph, MO");
const jenGewin = new Person("Jen Gewin", 31, "Health Advocate", "Cosby, MO");
const joeyGewin = new Person("Joey Gewin", 32, "Cartographer", "Cosby, MO");
const julesGewin = new Person("Jules Gewin", 2, "fun-loving toddler", "Cosby, MO");

Person.prototype.addChild = function (child){
    this.children.push(child);
    if (this.children.includes(0)) {
        this.children.shift();
    }
}

Person.prototype.addSpouse = function (spouse){
    this.spouse.push(spouse);
    if (this.spouse.includes('N/A')) {
        this.spouse.shift();
    }
}

Person.prototype.addSO = function (so){
    this.SO.push(so);
    if (this.SO.includes('N/A')) {
        this.SO.shift();
    }
}

Person.prototype.sayHello = function () {
    return `Hello, my name is ${this.name}.`;
}

Person.prototype.childrenCount = function() {
    if (this.children.includes(0)) {
        return `I have no children.`;
    } else if (this.children.length < 2) {
        return `I have ${this.children.length} child.`;
    } else if (this.children.length > 1) {
        return `I have ${this.children.length} children.`;
    }
}

Person.prototype.aboutMeSpeak = function () {
    return `My name is ${this.name}. I am ${this.age} years old. I am currently a ${this.occupation} in ${this.location}.`;
}

Person.prototype.love = function () {
    if (this.SO == 'N/A' && this.spouse == "N/A") {
        return `I love myself!`;
    } else if (this.spouse == 'N/A') {
        return `I love ${this.SO[0].name}!`;
    } else if (this.SO == 'N/A') {
        return `I love ${this.spouse[0].name}!`;
    }
}


theresaMcKnight.addSpouse(rickMcKnight);
rickMcKnight.addSpouse(theresaMcKnight);
theresaMcKnight.addChild(jenGewin);
theresaMcKnight.addChild(katieMcKnight);
rickMcKnight.addChild(jenGewin);
rickMcKnight.addChild(katieMcKnight);
katieMcKnight.addSO(chanceHalo);
chanceHalo.addSO(katieMcKnight);
jenGewin.addSpouse(joeyGewin);
joeyGewin.addSpouse(jenGewin);
jenGewin.addChild(julesGewin);
joeyGewin.addChild(julesGewin);



console.log(theresaMcKnight);
console.log(katieMcKnight);

console.log(katieMcKnight.sayHello());
console.log(theresaMcKnight.sayHello());
console.log(chanceHalo.sayHello());


console.log(katieMcKnight.childrenCount());
console.log(jenGewin.childrenCount());
console.log(theresaMcKnight.childrenCount());

console.log(chanceHalo.aboutMeSpeak());
console.log(theresaMcKnight.aboutMeSpeak());
console.log(julesGewin.aboutMeSpeak());


console.log(katieMcKnight.love());
console.log(chanceHalo.love());
console.log(theresaMcKnight.love());
console.log(julesGewin.love());



// Principle 4

// code example for Explicit Binding
const person1 = {
    name: "Jessica",
    age: 32
}

const person2 = {
    name: "Austin",
    age: 21
}

const person3 = {
    name: "CJ",
    age: 56
}

const person4 = {
    name: "Katie",
    age: 27
}

function introduction () {
    return `Hi. I'm ${this.name} and I'm ${this.age} years old.`;
}

console.log(introduction.call(person1));
console.log(introduction.call(person2));
console.log(introduction.call(person3));

//Bind is used to save the "this" keyword for later use. 

const myIntro = introduction.bind(person4);

console.log(myIntro());