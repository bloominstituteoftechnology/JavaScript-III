/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.
        implicit binding:
         this is when you use "this" inside of a object, "this" in this case will check the object 
        for the key that you are asking for and return the value.
* 2. 
        explicit binding:
        this is when you use methods outside of the object to attribute keys to an object. You can use .call(), 
        .apply() and .bind().
        .call() : explicitly states the attributes that you want to take.
        .apply() : allows you to pass in an array of arguments instead of one by one.
        .bind() : allows you to store the attributes into a variable. 

* 3. 
        new Binding: 
        You can create a prototype function, and use it to create new objects with the same keys as the prototype.
* 4. 
        Window Binding: 
        the window is the object that is defaulted to when you use this without anything to point to. 
        you can "use strict" to prevent yourself from referencing the window object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
        // let windowBinding = function(){
        //     "use strict"
        //     console.log(this.name);
        //           }
        //  windowBinding();
// Principle 2

// code example for Implicit Binding
        let implicitBinding = {
            name: "Brooks",
            friends: "none",
            implicitName: function(){
                console.log(this.name);
        }
    }
        implicitBinding.implicitName();
// Principle 3

// code example for New Binding
function Prototype(name,language){
    this.name = name;
    this.language = language;
    this.speak = function(){
        console.log(`${this.name} speaks ${this.language}`)
    }
}

const brooks = new Prototype ('Brooks', 'Javascript');
brooks.speak();
// Principle 4

//code example for Explicit Binding
function another(name, language){
    Prototype.call(this,name,language);
    this.speak = function(){
        console.log(`${this.name} doesn't speak ${this.language}`);
    }
}

const sally = new another('sally', "chinese");
sally.speak();