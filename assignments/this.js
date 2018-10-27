/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.




*
* 1. Implicit Binding-left of the dot when invoked--- occurs when dot notation is used to invoke a function

* 2. explicit binding-call, apply, bind

* 3. New Binding-creates an instance of a user defined object type or of one of the built in object types that has a contructor function

* 4. Window Binding - default binding of the this keyword

*
* write out a code example of each explanation above





*/

// Principle 1

// code example for Window Binding

//Default binding refers to how this is the global context whenever a function is invoked without any of these other rules. If we aren't using a dot and we aren't using call(), apply(), or bind(), our this will be our global object.

//Your global context depends on where you're working. If you're in the browser, this will be the window. When programming in strict mode, the global context is undefined.

          function printMe = function() {
              console.log(this);
          }

          printMe() //prints your 'Window Object' if your in the chrome browser



// Principle 2

      // code example for Implicit Binding
      //Implicit binding occurs when dot notation is used to invoke a function.
      //In implicit binding, whatever is to the left of the dot becomes the context for this in the function.


            var MyObject = function (){
                this.name = 'MyObjectName';
                this.myProperty = 'property';
              };
            
              MyObject.prototype.doStuff = function (action) {
                console.log(this.name + ' is ' + action + '!');
              }


// Principle 3

              // code example for New Binding


              var obj = new MyObject();



// Principle 4

// code example for Explicit Binding

// Explicit binding of this occurs when .call(), .apply(), or .bind() are used on a function.

// We call these explicit because you are explicitly passing in a this context to call() or apply(). 

        //call:

                //For .call() we pass in the this we'd like to use, along with parameters.

                //      myFunc.call(thisContext, param1, param2, ... );

                //Since we have .call, we must ignore what appears before the dot in our function call. We are using MyObject's method and calling it on another this context: runner.

                var runner = { name: 'John', myFavoriteActivity: 'running' };
                  MyObject.prototype.doStuff.call(runner, runner.myFavoriteActivity); // prints 'John is running!';

        //apply:

                  //.apply() is almost the same, except we must pass in an array of parameters after our this context.
                  //***think for using an entire array***

                  myFunc.apply(thisContext, [param1, param2, ...]);

        //bind:
                  //When called on a function, .bind() sets a this context and returns a new function of the same name with a bound this context.

                  // For example:

                    var sayMyName = function () {
                      console.log('My name is ' + this.name);
                    };

                    var jake = {
                      name: 'Jake'
                    }

                    var sayMyName = sayMyName.bind(jake);
                    sayMyName(); // 'My name is Jake'


                      // Now, each time we invoke sayMyName, we will get the context of 'jake', because this has been bound to it.

                      // Since bind creates a persistent this context, we can't eyeball it. We have to go back and find where this is bound.




//         EXTRA NOTES:

//         Default Binding:

                  // Default binding refers to how this is the global context whenever a function is invoked without any of these other rules. If we aren't using a dot and we aren't using call(), apply(), or bind(), our this will be our global object.

                  // Your global context depends on where you're working. If you're in the browser, this will be the window. When programming in strict mode, the global context is undefined.

                  // Eyeballing This
                  // You'll notice that none of these rules require too much work.

                  // Is there a dot? Look to the left. That's this.
                  // Do you see .call() or .apply()? What's passed in before the first comma? Thats this.
                  // Does the function stand alone when it's invoked? Then what's your global context? That's this.
                  // These three rules-of-thumb point to the most important rule of all: this refers to a function's callsite (where it is invoked).

