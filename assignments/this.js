/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding is when .this is referncing an object to the left of an invoked function 
* 2. Explicit binding is when .call .apply and .bind are explicity referncing an object 
* 3. New binding is when .this refernces the key that will be bond to a new object 
* 4. window binding is when .this is referencing the window object
*
* write out a code example of each explanation above
*/

// Principle 1

let User = {
    userName: 'Cmurray',
    userID: 'abc123',
    displayName: function () {
        console.log(this.userName);
    }
};

User.displayName();

// code example for Window Binding

// Principle 2

let greeting = function() {
    console.log('My name is ' + this.name);
};

let Lucy = {
    name: 'Lucy',
    age: 20
};

greeting.call(Lucy);

// code example for Implicit Binding

// Principle 3

let newUser = function(userName, userPassword, userId) {
    this.userName = userName;
    this.userPassword = userPassword;
    this.userId = userId;
};

let Zack = new newUser('ZaxX', 'Abc123', '76');
console.log(Zack);

// code example for New Binding

// Principle 4

let displayId = function(){
    console.log(this.id);
};

window.id = 35;

displayId();

// code example for Explicit Binding