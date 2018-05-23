/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: If you invoke the this keyword but don't place anything to the left of the dot, or use call, apply, or bind, then the this keyword will default to the window object - likely undefined.

* 2. Implicit Binding: The most common use of this keyword, found in about 80% of examples. When you call a function and the this function is invoked, look to the left of the keyword. In the example below, blake.mark.sayName, we'll see Mark logged because it is to the left of the dot.

* 3. New Binding: When a function is invoked with the new keyword. The this keyword inside that function is bound to the new object being constructed.

// https://alligator.io/js/this-keyword/

* 4. Explicit Binding: Explicit binding happens with functions in the global scope. The .this keyword references whatever you explicitly put inside the brackets. .call and .apply both immediately invoke the function but with .call you pass in arguments one by one where as .apply you can pass them all in at once as an array. .bind works like .call but returns you a brand new call thay uou can invoke later.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("D'Artagnan");

// window._ = {};

// Principle 2

// code example for Implicit Binding

var Family = function(name, age) {
    return {
        name: name,
        age: age,
        sayName: function(){
            console.log(this.name);
        },
        father: {
            name: 'Mark',
            age: 57,
            sayName: function() {
                console.log(this.name);
            }
        }
    };
};

let son = Family('Blake', 26);
console.log(son.sayName());
blake.father.sayName(); 

// Principle 3

// code example for New Binding

function Ghost(name) {
    this.name = name;
  }
  
  let myGhost = new Ghost('Casper the friendly ghost');
  
  console.log(myGhost.name);

// Principle 4

// code example for Explicit Binding

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function() {
    console.log(this.getPokeName() + 'I choose you!');
};

var logPokemon = pokemonName.bind(pokemon);

logPokemon(); 

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon,'sushi', 'algorithms');
pokemonName.apply(pokemon,['sushi', 'algorithms']);