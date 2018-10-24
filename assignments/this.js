/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*this"this" act as a Pointer to an object.we can use the this keyword to reference an object without
 *  having to refer to that object’s name.
* Rule1.When in global scope the value of this  is the Window Object.
* The global binding of "this" can be prevented by putting "Use Strict" on top of our code.
* Window and global binding occurs when no other binding is explicitly assigned.
*
* RULE2.Whenever a function is called by a preceding dot, the object before that dot is "this".The context of "this"
 * changes with the passage of different objects.
*
* RULE3.We can construct new objects with the new keyword from constructor function.Whenever a constructor function
 * is used, "this" refers to the specific instance of the object that is created and
 * returned by the constructor function.
*RULE4.WE have to explicitly define "this" when we are using  methods like call, apply and bind on functions.
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function findTheScope(){
    console.log(this);
}
findTheScope();
//its returning the window object even though it is in a functional scope because "this" keyword will
// always point to the window unless we explicitly bind it and tell where to go .
// 	"Use Strict" will prevent this  from global binding.
// Instead of showing this as  window object, it is undefined if we  use  "use strict" mode.

// Principle 2

// code example for Implicit Binding

const food={
   name:"pizza",
   size:"large",
   crust:"thin",
   cook:function(){
      console.log(`${this.name} is cooked`);
   }

}
food.cook();

// Principle 3

// code example for New Binding
 function Cloth(material,size,color){
    this.material=material;
    this.size=size;
    this.color=color;
    this.stitch= function(){
        console.log(`I want a new design from  ${this.material} material size ${this.size} of color ${this.color}.`);
    }


 }

 const shirt= new Cloth("velvet","M","blue");
 shirt.stitch();
// Principle 4

// code example for Explicit Binding

//call
const country={
    name:"USA"
}

 const mostHappeningStates=["California","Texas","Utah","NewJersey"]
 function selection(state1,state2,state3,state4){
      console.log(`We are allowed to perform stage shows in ${this.name}.${state1},${state2},${state3},${state4} are the
 states where we are  going to perform.`)

 }
   selection.call(country,mostHappeningStates[0],mostHappeningStates[1],mostHappeningStates[2],mostHappeningStates[3])

  selection.call(country,...mostHappeningStates);//using spread operator
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//apply
selection.apply(country,mostHappeningStates);
//bind for later use
const newselection=selection.bind(country,...mostHappeningStates);
newselection();
