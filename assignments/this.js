/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The "this" keyword's value is that of the window/console object when contained by the global scope. This is known as window/global object binding.
* 2. Implicit Binding regards a function that is called preceded by a dot, the keyword this, is the object before the dot.
* 3. New binding refers to this as the exact instance when an object is created and returned through the use of a constructor function.
* 4. This is specifically defined whenever call or the apply method is used through JavaScript. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding



function windowBinding () {
    console.log(`I can ${this.context}`)
}

const bind = {
    work: 'Bind'
}

windowBinding()

// Principle 2

// code example for Implicit Binding

const implicitWork = {
    test: "implicit binding.",
    worker() {
        console.log(`I am ${this.test}`)
    },
    test2: {
        testThis: 'implicit binding.',
        worker() {
            console.log(`I am ${this.testThis}`)
        }
    }
}

implicitWork.worker()
implicitWork.test2.worker()

// Principle 3

// code example for New Binding

function BindingNew (newGuy) {
    this.noob = "I can";
    this.newGuy = newGuy;
    this.work = function(){
        console.log (`${this.noob} ${this.newGuy}`);
        
    }
}

const newB = new BindingNew('new bind.');
const newnewB = new BindingNew('new bind too!');

newB.work();
newnewB.work();
// Principle 4




// code example for Explicit Binding

function greet (js1, js2, js3) {
    console.log(`Hello, my name is ${this.firstName} and I need to improve on ${js1}, ${js2}, and ${js3}`)
  }
  
  const person = {
    firstName: 'Huthman',
    age: 26,
  }
  
  const js = ['JavaScript', 'JavaScript', 'some more JavaScript..']
  
  greet.call(person, js[0], js[1], js[2])