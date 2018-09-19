/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window/Global Object Binding
        .this will target the window/console object.

* 2.  Implicit Binding
        .this will target the object post period.

* 3.  New Binding
        .this will target the specific instance of the object created. 

* 4.  Explicit Binding
        use with call or apply method.

*
* write out a code example of each explanation above
*/

// Principle 1
    var sayAge = function(){
        console.log(this.age);
    };
 var me = {
     age: 25
 };

 sayAge();
 window.age = 35;
 sayAge();


// code example for Window Binding

// Principle 2

var myself = {
    name: 'Nick',
    age: 39,
    sayName: function(){
        console.log(this.name);
    }
};

myself.sayName();

// code example for Implicit Binding

// Principle 3

var Animal = function(color, name, type){
    this.color = color;
    this.name = name;
    this.type = type;
};

var cat = new Animal('calico', 'Kitty', 'House Cat')

// code example for New Binding

// Principle 4

var sayName = function(){
    console.log('My name is ' + this.name);
}

var myself = {
    name: 'Nick',
    age: 39,
    sayName: function(){
        console.log(this.name);
    }
};

myself.sayName(myself);

// code example for Explicit Binding