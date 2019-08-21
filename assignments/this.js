/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding - 'this' keyword defaults to the entire window as an object
* 2. Implicit binding - 'this' keyword is automatically bound to object method. Occurs when dot notation is used to invoke a function.
* 3. Explicit binding - 'this' keyword is explicitly stated what certain value it is pointed to using .call(), .apply(), .bind() on a function.
* 4. 'new' binding - using 'new' keyword constructs a new object and 'this' points to the new object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
     // Window binding is the global context dependent on where the user is working 

     // 'this' in the browser
          Window{ }
    
          // 'this' in strict mode 
          Undefined

// Principle 2
     // 'this' keyword is automatically bound to the OBJECT METHOD. Occurs when dot notation is used to invoke a function

// code example for Implicit Binding
   const sandwich1 = {
        name: 'BLT',
        protein: 'bacon',
        vegetables: 'lettuce',
        create: function(){
             return `I'd like to order a ${this.name}`;
        }
   }
   console.log(sandwich1.create());             // I'd like to order a BLT

   const sandwich2 = {
        name:'tuna',
        protein: 'tuna',
        vegetables: 'celery',
        create: function(){
             return `I'd like to order a ${this.name}`;    
        }
   }
   console.log(sandwich2.create());             // I'd like to order a Tuna


// Principle 3
   // 'new' keyword is involved in creating a new object from a class constructor. 'this' keyword references this new object
// code example for New Binding
   // 1. define class constructor using this.
   // 2. define new object using new constructorName
   // 3. call the new object 

   function SandwichMaker (uniform, machine, tool){
        this.uniform = uniform,
        this.machine = machine,
        this.tool = tool
   }
   const kevin = new SandwichMaker ('apron', 'panini', 'knife')

     console.log(kevin);                // SandwichMaker { uniform: 'apron', machine: 'panini maker', tool: 'knife' }
     console.log(`I enjoy using ${kevin.machine}s`);      // I enjoy using panini makers      




// Principle 4
   // 'this' keyword is explicitly referenced to a certain value from the use of .call() .apply() or .bind() on a function.

// code example for Explicit Binding
   const sandwich4 = {                     // object
        name: 'grilled cheese',
        protein: 'none',
        cheese: 'cheddar'
   }
   function grill(){
        console.log(`I like ${this.cheese} in my ${this.name}`);
   }
   grill.call(sandwich4);                 // so 'this' keyword is being forced upon 'sandwich4' properties because the function 'grill' is passing 'sandwich4' as the argument
