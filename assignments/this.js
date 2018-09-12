/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window bpinding is the core principle of "this" makes the keyword link to the highest global object; generally the window by default. 
* 2. Implicit binding is used in relation to the object scope; instances of implicit bindings are a) calling this.name on an object within its inner function. b) calling a function on an object with dot notation. 
* 3. New binding is used to connect a child object to its constructor. 
* 4. Explicit binding is using the method .bind, .call, or .apply to explicitly define what the "this" keyword references.
*
* write out a code example of each explanation above
*/

// Principle 1 --Window

console.log(this);

// Principle 2 -- Implicit

 const bigBlob = {
     name: "Blobbert",
     size: "big",
     favQuote: "Blahga blahga blaaah",
     speak: function(){
         console.log(`${this.favQuote}`); 
     } 

}

bigBlob.speak();

// Principle 3 -- New

//Assuming there is a constructor for Blobs

const lilBlob = new Blob({
    keys: "values"
})

// Principle 4 -- Explicit


function likesWhat(){
    console.log(`${this.name}'s favorite food is ${this.favFood}`)
}

const peabody = {
    name: 'Peabody',
    favFood: 'Asparagus',
}

likesWhat.call(peabody);