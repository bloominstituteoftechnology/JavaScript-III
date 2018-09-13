/* The for* principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
*                      *: four
* 1. Global binding: The value of 'this' refers to the overall global object- in the browser, this would be the Window object.

* 2. Implicit binding: The value of 'this' is "bound" to the object calling it- the property "name" is bound to the object. The value of the name property is like a pointer- that is to say, "this one, this is what 'this' refers to."

* 3.  New binding: The value os 'this' is refers directly to the object that is created and returned by the constructor function. It will have access to the __prototype__ "DNA", that is to say: each instantiation of an object will have access to the same properties which are relative to a unique "this".

* 4. Explicit binding: The constuctor function's "DNA" or prototype can be overridden or just re-worked with the use of explicit binding. 
*
* write out a code example of each explanation above
*/

// Principle 1  WINDOW/OBJECT BINDING
let declareHackerName = function() {
  console.log(this.hackerName);
}

let hackerName = {
  handle: 'ZeroCool'
};

Window.declareHackerName();  //this only seems to have a reaction in Chrome devtool's console.





// Principle 2  IMPLICIT BINDING
const robotCashier = {
  prompt: 'How can I help you today?',
  salute: function(store){
    console.log(`Thank you for shopping at ${store}.`);
  }
}
robotCashier.salute('Blockbuster');






// Principle 3 NEW BINDING
function WuTangClan(member, verse) {  //capital W since it's a constructor, y'know y'know
  this.member = member;
  this.verse = verse;
  this.rap = function(){
    console.log(this.verse);
  };
  this.chant = function() {
    console.log('Wu, Wu, ');
  }
}

const gza = new WuTangClan('Gza', 'Clan in da front, let ya feet stomp');
const methodman = new WuTangClan ('Method Man', 'It\'s the Method Man, for short: Mr. Mef');

gza.rap();
methodman.rap();





// Principle 4  EXPLICIT BINDING
let saySup = function(instrument) {
  console.log(`Sup, my name is ${this.name} and I play ${instrument} `);
};

let thatGuyOverThere = {
  name: 'Shabazz',
  age: 85
};

let instruments = ['trumpet', 'xylophone', 'lyre'];

let executeBind = saySup.bind(thatGuyOverThere, instruments);
executeBind();