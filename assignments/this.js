/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window binding - whenever a function is in the global scope, the value of this  will be the window object. this is the default of all the "this" keywords

* 2. Implicit binding - when a function called  beofre a dot, what is to the left of the dot  points to the object on which the function is called

* 3. Explicit binding - There are 3 in total: call, bind, and apply. Call and apply are similar in that accomplish the same job, expect call is for singluar item, while  apply is for arrays. bind is can store the information by creating a function so the data can be used again.

* 4. New binding - this keyword creates a new object and when the a function is called the this will reference to the object that will be created


* write out a code example of each explanation above
*/



// Principle 1
// code example for Window Binding
function window(){
    return console.log(this)
}
window();


// Principle 2

// code example for Implicit Binding
const myBaby= {
    name: 'Lexi',
    mess: function(){
        console.log(`${this.name} smashes her brithday cake in her face`)
    }
}

myBaby.mess();


// Principle 3

// code example for New Binding

 function gymEmployee(trainer){
     this.order= 'GIVE ME 20 PUSH UPS!';
    this.trainer = trainer;
    this.workout = function(){
        console.log(this.order + this.trainer);
        console.log(this);
    }
 }
 const beth = new gymEmployee('Beth');
beth.workout();

// Principle 4

// code example for Explicit Binding

const tennisPlayer = {
    name: 'Serena Williams'
};

const equipment = ['rackets', 'tennis balls', 'towels'];

function hey(equipment1, equipment2, equipment3){
    console.log(`${this.name} responded "My match is about to begin, please bring my ${equipment1}, ${equipment2}, ${equipment3} to the court.`);
};

hey.apply(tennisPlayer, equipment);
