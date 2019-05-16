/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding occurs when dot notation is used to invoke a function
* 2. if the function is in global scope it needs to be called differently .call( ) or .apply( ) or .bind( )
* 3. window binding is unknown pointing of this
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding
var Myob = function (){
    this.name = 'My bindiing name';
    this.myProperty = 'property';
  };
  Myob.prototype.doStuff = function (action) {
    console.log(this.name + ' is ' + action + '!');
  }
 
  var obj = new Myob();
 
  obj.doStuff('Implicit');  


// Principle 3

// code example for New Binding
var obj = {name:"Sent"};
var greeting = function(a,b,c){
    return "welcome "+this.name +" to "+a+" "+b+" many "+c;
};
var bound = greeting.bind(obj);
console.dir(bound);
console.log(bound("drexel Hill","PA","Thanks")); 
// Principle 4

// code example for Explicit Binding
var Stats = function () {
    console.log("my name is " + this.name + " living in " + this.CITY);
  };
  var places = {
    name: "SENT",
    CITY: "Drexel hill"
  };
  Stats.call(places);