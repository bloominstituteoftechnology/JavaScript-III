/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1.  Window or Default Binding - 
This type of binding depends on where you are working. If you are working in the browser the 
default global context is Window unless you state strict mode, in which case the default is unedfined. Stated another way, the context is large and
non-specific which can be problematic when the code gets complex.
* 2.  Implicit Binding - 
This type of binding is very specific and is illustrated when using dot notation. Ex: 

let MyObject = function () {
    this.name = 'MyObjectName';
    this.myProperty = 'someProperty';
};

myObject.prototype.doSomething = function (activity) {
    console.log(`this.name ${is} action ${!}`);
}

let obj = new MyObject();

obj.doSomething('awesome');  //This should print 'MyObjectName is awesome!'

So in this case the context is MyObject.

* 3.  New Binding -

This type of binding occurs when we use .bind(). When we use .bind() we set a new context and invoke a function of that same name
with that same context.


* 4.  Explicit Binding - 

This type of binding occurs when .call() , .appy() are used.

We are explicitly passing in 'this' context into .call() or .apply().

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

let MyObj = function () {
    'name': 'Ted',
    'occupation': 'get away driving consultant'
    'statement': function () {
        return `${this.name} has never actually driven.` 
    };
}

// Principle 3

// code example for New Binding

function SurferWithOpinion(waveman) {
    this.greeting = 'Nooooo Waaayyyyy!';
    this.wavechat = waveman;
    this.speak = function() {
        console.log(`${this.greeting} ${this.wavechat}`);
    }
}

const laird = new
SurferWithOpinion('Slater');

laird.speak();



// Principle 4

// code example for Explicit Binding

const tinyDancer = {
    'name': 'EJ',
    'age': 79
}

const skills = ['holding closer', 'seamtress for the band'];

function introduce(skill1, skill2) {
    console.log(`My name is ${this.name} and I like ${skill1} and ${skill2}`)
}

introduce.call(developer, skills);
introduce.apply(developer, skills);