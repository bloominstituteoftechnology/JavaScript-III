/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding
* 2. Explicit Binding
* 3. new Binding
* 4. window Binding
*
* write out a code example of each explanation above
*/

// Principle 1
//Window Binding: can use window.xyz to change the value you see
// code example for Window Binding
var sayRenter = function(){
    console.log(this.lastRenter);
  };
  
  var scoot315 = {
    number: "scoot315",
    lastRenter: "Tupac",
    age: 45,
    location: "37.7819° N, 122.4078° W",
    startTime: "5:54am",
    endTime: "6:13am"
  }
  sayRenter();
  window.lastRenter = "Tupac doppleganger";
  sayRenter();
  
  // Principle 2 
  //Implicit Binding: anything to the left of the dot (.key) is being referenced.
  // code example for Implicit Binding
  var scoot231 = {
    number: "scoot231",
    lastRenter: "Sagar Desai",
    age: 27,
    location: "37.7623° N, 122.4577° W",
    sayLocation: function(){
      console.log(this.location)
    },
    startTime: "1:54pm",
    endTime: "2:23pm"
  }
  scoot231.sayLocation();
  // Principle 3
  //New Binding: can use to create new variables that follow the structure you've set up.
  // code example for New Binding
  var newScoot = function(number, lastRenter, age, location){
    this.number = number;
    this.lastRenter = lastRenter;
    this.age = age;
    this.location = location;
  };
  
  var scoot82 = new newScoot("scoot82", "none", "n/a", "37.7782° N, 122.4087° W")
  console.log(scoot82);
  
  // Principle 4
  //Explicit Binding: use .call, .bind, .apply to reference the object.
  
  //.call: can pass in arguments, but not arrays
  //.apply: can pass in an array of arguments
  //.bond: will return a new function instead of invoking the function. Can set it to another variable, which can come in handy.
  // code example for Explicit Binding
  
  var scoot129 = {
    number: "scoot129",
    lastRenter: "Draymond Green",
    age: 28,
    location: "37.7916° N, 122.4276° W",
    sayLocation: function(){
      console.log(this.location)
    },
    startTime: "11:39am",
    endTime: "12:23pm"
  }
  
  var sayLastTrip = function(){
    console.log(this.lastRenter + " rented " + this.number + " from " + this.startTime + " to " + this.endTime + ".");
  }
  
  sayLastTrip.call(scoot129);