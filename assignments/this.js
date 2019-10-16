/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
1.Is the function called by new?
2.Is the function called by call(), apply(), or bind()?
3.is the function called as a method, ie: obj.func()?
4.Is the function called in the global scope?
//also
If strict mode is enabled, return undefined.
Otherwise, return the global object, ie: window.

* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function name (newName){
    console.log(this);
    return newName;
}
name('Justin');

// Principle 2

// code example for Implicit Binding
//https://gist.github.com/zcaceres/2a4ac91f9f42ec0ef9cd0d18e4e71262

var MyObject = function (){
   this.name = 'MyObjectName';
   this.myProperty = 'property';
 };

 MyObject.prototype.doStuff = function (action) {
   console.log(this.name + ' is ' + action + '!');
 }

 var obj = new MyObject();

 obj.doStuff('awesome'); // prints 'MyObjectName is awesome!'
// Principle 3

// code example for New Binding

function Curb(akward){
    this.akward = akward,
    this.bad = `Pretty pretty pretty good`,
    this.speak = function(){
        console.log(`${this.akward} this is ${this.bad}`)
    }
}

const Jones = new Curb('Jones');

larry.speak();

// Principle 4

// code example for Explicit Binding

const who = {
    'name': 'Justin'
}

const work = [ 'manager', 'pharmacy', 'associate'];

const fun = ['xbox', 'swith', 'gym'];

function tellMeAbout (work1, work2, work3, fun1, fun2, fun3) {
    console.log(`Hello, my name is ${this.name} and I worked as a ${work1}, ${work2}, and ${work3} and for fun i play: ${fun1}, ${fun2},
    and  go to the ${fun3}`)
}

tellMeAbout.call(who, ...work, ...fun); Binding
