/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
* 2. Implicit Binding
* 3. New binding
* 4. Explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1
//Window/Global Object Binding
// code example for Window Binding
function myJob(job) {
    console.log(this);
    return job;
  }
 myJob("WEb Developer");
// Principle 2
//Implicit Binding
// code example for Implicit Binding
const sayMyName = {
    myName: 'Miss Jones',
    greetings: function(greet) {
      console.log(`${greet} ${this.myName}`);
      console.log(this);
    }
  };
 sayMyName.greetings('Hello');
// Principle 3
//New binding
// code example for New Binding
function showMeTheMoney(payment) {
    this.money = 'I got your';
    this.cash = payment;
    this.gimme = function() {
      console.log(this.money + " " + this.cash);
      console.log(this);
    };
  }
  const payBills = new showMeTheMoney('$100 dollars!');
  payBills.gimme();

// Principle 4
//Explicit binding
// code example for Explicit Binding
function showMeTheMoney(payment) {
   this.money = 'I got your';
   this.cash = payment;
   this.gimme = function() {
    console.log(this.money + " " + this.cash);
     console.log(this);
    };
  }
  const payMyBills = new showMeTheMoney('$100 dollars!');
    payMyBills.gimme.call('$100 dollars!'); 
    
    payBills.gimme('$100 dollars!');