/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window/Global Object Binding- When the "this" keyword is in the global scope then it is referring to just that---the global scope object or
sometimes called the window object.  This is where all of JavaScript is housed.  Generally, this can be avoided by typing in "use strict" at the
beginning of your code.  

* 2. Implicit Binding- This is the most common use of the "this" keyword & the one that makes the most
sense to me.  When the "this" keyword is housed inside of an object it is initially referencing that object until another
function is invoked using the "dot" invoking notation.  Whatever is to the left of the dot is what "this" will now be referencing.  

* 3. New Binding - These are used with constructor functions.  The "this" keyword refers to what the keyword "new" is referencing.   

* 4. Explicit Binding- Similar to new binding in that it can involve the keyword "new"; however, other keywords (call, apply, bind) are used
to override what the "this"  keyworod is initially pointing to.  
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function dontDoThis(){
    console.log(this);                                          //this isn't pointing to anything in particular which means it is point to global obj
};
// Principle 2
// code example for Implicit Binding
const exampleObject = obj =>{                                      //function receiving an object as an argument

 
    location: "Nasvhille",                                                      //define Obj properites
    obj.greeting =  function(name){
        
        return(`Hello, my name is ${name} & I live in ${this.location}`)                //return statement
        console.log(this);
    }
    };

                                      
     
const anotherObject = {                                                                 //create another object this can point to

        location: "texas"
        
     }  ;
     exampleObject(anotherObject);

console.log(anotherObject.greeting("Al"));                                      //pass another argument to name when calling the functions


// Principle 3

// code example for New Binding
function Question(teacher){                                             //constructor function
    this.teacher = teacher; 
    this.question = " asks: what is the answer to this problem?";          //define this properites inside constructor function
    
    this.speak = function(){
        console.log(this.teacher + this.question);                          //definie speak property
        console.log(this);
    }
}

const student = new Question("Mr. Griggs");                                             //definie variables that used the new keyword & tells us what 'this' is
const instructor = new Question("Student");

student.speak();                                                        //call the functions
instructor.speak();
// Principle 4

// code example for Explicit Binding

function Conversation(personOne){                               //Constructor function
    this.person = personOne;                                    //define properties ??
    this.talk = " do you know the time?";               

    this.speaks = function(){                                   //define speaks function
        console.log(this.person + this.talk);
        console.log(this);
    }
}

const alaina = new Conversation("Excuse me sir, ");             //define variable with "new" keyword which tells what "this" is
const dene = new Conversation("Excuse me ma'am, ");

alaina.speaks.call(dene);                                       //call the function but use the .call or .apply method to switch what 'this' is
dene.speaks.apply(alaina);