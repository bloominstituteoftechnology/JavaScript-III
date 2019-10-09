Interitance in Constructors
Step One - create the Object based on key: value pairs needed for the project.
		Example-
		const Fred = ({
			age: 45,
			name: "Fred",
			location: "Bedrock",
			phrase: "Yabba dabba do"
		});
		
Step Two - create the constructor called Parent.
		Example - 
		function Parent(attributes) {
		  this.newAge = attributes.age;
		  this.newName = attributes.name;
		  this.newLocation = attributes.location; 
		  this.newPhrase= attributes.phrase;
		  console.log(this);
		}
Step Three - if we want to add a a key: value to the Object or Parent, we have to add it to the _proto_ using:
		Example - 
			Parent.prototype.speak = function() {
				return `${this.newName} says ${this.newPhrase}`;
			}
			
Step Four -  Use explicit binding to connect or transfer this:
			function Parent(attributes) {
				  this.newAge = attributes.age;
				  this.newName = attributes.name;
				  this.newLocation = attributes.location; 
				  this.newPhrase= attributes.phrase;
				  console.log(this);
				}
				
				...to this. Using the Parent.call method, allows us bind these together to create DRY coding, as to prevent us from
				needing to retype the Object again. 
				
				function Child(childAttributes) {   
						
					console.log(childAttributes);
					this.newToy = childAttributes.toy;
				};
				
				
				
				
				
				
				-----------------
	const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });