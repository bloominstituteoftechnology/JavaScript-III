/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Default/global/window binding. If there is no other more specific this binding (i.e., 2, 3, or 4), it will be bound to whatever the global object is (window in browser).
* 2. Implicit binding. When a function is invoked using dot or bracket notation to access it with an object key (i.e., when a method is invoked), the this will be bound to the object to the immediate left of the method name, unless 3 or 4 below applies. 
* 3. Explicit binding. If a function's call, apply, or bind methods are called with a given object as the first argument, then in the case of call and apply, the function will be invoked with this hard-coded to the first argument passed to apply or call. In the case of bind, the function will be returned as a new function with its this bound to the object passed as first argument.
* 4. New binding. If a function is called using the new prefix, then this will be found to the new object created by the new binding within the context of the function called with new.
*
* write out a code example of each explanation above
*/

// Principle 1
function getGlobalProperty (property) {
    return this[String(property)];
}
console.log (getGlobalProperty("Date")());

// Principle 2

// code example for Implicit Binding
let methodLover = {
    scream: function (str) {
        console.log (str.toUpperCase());
    },
    selfIndulge: function () {
        console.log(`I have ${Object.keys(this).length} methods. Jealous?`)
    }
}
methodLover.selfIndulge();


// Principle 3
function selfIndulge() {
    let propertyArr = Object.getOwnPropertyNames(this);
    console.log(`I have ${propertyArr.length} methods. Jealous?`)
}
selfIndulge.call(Object);

// Principle 4
function Human (actuallyRobot) {
    this.reallyHuman = !actuallyRobot;
    this.talk = function () {
        if (this.reallyHuman) {
            console.log ("SUP BRO");
        } else {
            console.log ("Hello. It is a nice day. How are you? Well I hope? How is are your son, Edward, your daughter, Sarah, and your wife, Beth? Well I hope? Sarah recently turned 4, is that correct?")
        }
    }
}

let robert = new Human(false);
robert.talk();
let robobert = new Human(true);
robobert.talk();
