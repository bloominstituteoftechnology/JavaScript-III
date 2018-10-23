/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - This is the default binding of "this" to the window
* 2. Implicit Binding - "This" binds to what is left of the dot. 
* 3. Explicit Binding - Uses the methods call, apply, and bind to tell exactly what "this" refers to. 
* 4. New Binding - Using constructor functions, you can 
*
* write out a code example of each explanation above
*/

console.log(`*************** begin this.js challenge ***************`)

// Principle 1
// code example for Window Binding

// console.log(this) will log the Window object in the console.
// console.log(this);


// Principle 2
// code example for Implicit Binding
// const client = {
//   name: 'Lisa',
//   status: 'planning',
//   report: function() {
//     console.log(`${this.name} is currently in the ${this.status} stage.`);
//   }
// }
// //this.name and this.status bind to client object
// client.report();


// Principle 3
// code example for New Binding
const Client = function (name, product) {
  this.name = name
  this.product = product
}

const myClient = new Client('Molly', 'SEO')

console.log(myClient)


// Principle 4
// code example for Explicit Binding
// Using .call()
// const client = {
//   name: 'Lisa'
// }

// const completedTasks = ['Initial Interview', 'Design', 'Build']

// function statusUpdate (task1, task2, task3) {
//   console.log(`${this.name} has completed ${task1}, ${task2}, ${task3}`)
// }

// statusUpdate.call(client, completedTasks[0], completedTasks[1], completedTasks[2])

console.log(`*************** end this.js challenge ***************`)
