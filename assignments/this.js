/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When you use this in the global scope, the "this" value will be the window. It will pull up alot of things you dont want it to pull up.
* 2. Implicit binding is used when dot notation is used to invoke a function. whatever is left of the dot is it's context 
* 3. New binding is  used when a constructor function is used. 
* 4. Explicit binding is when call or apply explicitly defines this
*
* write out a code example of each explanation above
*/

// Principle 1
function confusingStuff(stuff) {
    console.log(this);
    return stuff;
  }
  confusingStuff("This is confusing stuff");

// Principle 2
const slangExample = {
    greeting: 'Yo, Wat Up Dawg,',
    sayWatUp: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  slangExample.sayWatUp('Homie Sav Swag');

// Principle 3
function afterLongDay(actions) {
    this.action = 'relax';
    this.actions = actions;
    this.speak = function () {
        console.log(this.action + this.actions);
        console.log(this);
    };

}
const relax = new afterLongDay('I want to')

relax.speak();



// // Principle 4 
 let sayName = function(lang1, lang2, lang3) {
     console.log('My name is ' + this.name + ' and i kinda sorta know ' + lang1 + ',' + lang2 + ',and ' + lang3);
 };

 let savannah = {
     name: 'Savannah',
     age: 20
 };

 let languages = ['English', ' Spanish', 'Javascript'];

 sayName.apply(savannah, languages);
 
