/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit binding - binding that happenens automatically. whatever is left of the dot will be the 'this' context 
* 2. explicit this - binding that happens when you use call,apply,bind.  'this' context is passed directly in.
* 3. window binding - binding that happens when you do not specify the binding. this will attach to the global scope and the 'this' context will be the window object.
* 4. new binding - binding that happens when you use a constructor function and the new keyword in pair. 
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this)
// code example for Window Binding

// Principle 2

const square ={
    height: 200,
    area: function(width){console.log(this.height*width)}
  }
  
  
  square.area(200);
  
// code example for Implicit Binding

// Principle 3
class Person{
    constructor(age, name, weight){
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.ShowDetails = function(){
            console.log(`${name} is ${age} and weighs ${weight} lbs`)
        }
    }
  }
  let frank = new Person(41,'frank',230);
  frank.ShowDetails()
// code example for New Binding


// Principle 4

function Shape(height,width){
    this.height = height;
    this.width = width;
  
  }
  
  function Square(height,width)
  {
    Shape.call(this,height,width);
    this.color = 'black';
  }
  
  
  
  let square = new Square(50, 50)
  console.log(`i have created a ${square.color} square that is ${square.height} by ${square.width}`);
// code example for Explicit Binding