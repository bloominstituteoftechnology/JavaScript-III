/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding: in this case, 'this' is pointing to the object whose scope it is within. For example if we were to invoke a method X containing 'this' in it on an object Y like so: Y.X(), the 'this' would be referring to object Y.

* 2. Explicit Binding: when we use .call, .apply, and .bind, we have to explicitly tell 'this' what we want 'this to refer to by putting the object in the method's parentheses.

* 3. new Binding: when we're constructing a new object via constructor function, to prevent from getting undefined when we want to assign properties to the object, we need to use 'this' to refer to the object.

* 4. window Binding: JS defaults to binding 'this' to the window object if we don't use one of the principles above.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
   console.log(this);


// Principle 2
// code example for Implicit Binding
    const poet = {
        'name': 'Walt Whitman',
        'poem1': 'I Sing the Body Electric',
        'poem2': 'O Captain! My Captain!',
        'poetry': function() {
            console.log(`I am ${this.name} and I wrote '${this.poem1}' and '${this.poem2}'.`);
        },      
    }
    poet.poetry()  


// Principle 3
// code example for New Binding
    function Poet(attributes) {
        //console.log(attributes);
        this.name = attributes.name;
        this.birthplace = attributes.birthplace;
        this.poem1 = attributes.poem1;
        this.poem2 = attributes.poem2
    }

    Poet.prototype.proclaim = function() {
        console.log(`${this.name} proclaims: I'm the best poet ever because I wrote '${this.poem1}' and '${this.poem2}'.`)
    }
  
    const waltWhitman = new Poet({
        'name' : 'Walt Whitman',
        'birthplace': 'Long Island, NY',
        'poem1': 'I Sing the Body Electric',
        'poem2': 'O Captain! My Captain!',
    });
      
    waltWhitman.proclaim();
  

// Principle 4
// code example for Explicit Binding

   
const student = {
    'name': 'Billy',
    'grade': '10th',
    'gender': 'M'    
}

let testGrades = [98,100,93,89]
let gradeSum = testGrades.reduce((total, curVal) => total + curVal,0);
averageGrade = gradeSum / testGrades.length;

function reportCard(grade1,grade2,grade3,grade4){
    console.log(`Dear Parent, ${this.name} has been progressing nicely in the ${this.grade} grade. His test scores have been ${grade1}, ${grade2}, ${grade3}, and ${grade4}, with an average of ${averageGrade}.`);
}

reportCard.call(student, ...testGrades);