/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If this is used in the global scope, it refers to the window of that scope. (In my case... my chrome browser)
* 2. Using dot notation, "this" can be encapsulated within the object scope to call it's own variables.
* 3. By assigning this to new, this will point to the variable name within it's own object instantiation.
* 4. obj.call(), obj.apply() and obj.bind() are prototypes for classes for allowing "this" keyword to be explicitely defined where it points to the object which is forcfully passed into the function parameter through the invoke argument.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
this;
// or, if you want to see what "this" is returning...
console.log(this);

// Principle 2

// code example for Implicit Binding
const human = {
  name: 'James',
  hobby: `computers`,
  intro: function(){
    console.log(`Hello, my name is ${this.name}, and I like ${this.hobby}.`);
  }
}

human.intro();

// Principle 3

// code example for New Binding
function tv(brand){
  this.brand = brand,
  this.displayBrandName = function(){console.log(`This is a ${this.brand} TV.`)}
}
myTv = new tv('Sony');
myFriendsTv = new tv('Samsung');

myTv.displayBrandName();
myFriendsTv.displayBrandName();

// Principle 4

// code example for Explicit Binding
const computer = {
  computerType: 'Custom Built'
}

const computerParts = [ 'Coolermaster HAF 912', // pc case
                        'Cooler Master Silent Pro Gold - 1000W Power Supply with 80 PLUS Gold Certification and Semi-Modular Cables ', // power supply
                        'ASUS P9X79 PRO LGA 2011 Intel X79 SATA 6Gb/s USB 3.0 ATX Intel Motherboard', // motherboard
                        'Intel Core i7-3960X Extreme Edition Sandy Bridge-E 6-Core 3.3GHz (3.9GHz Turbo) LGA 2011 130W BX80619i73960X Desktop Processor ', // cpu 
                        'MSI GAMING GeForce GTX 1060 6GB GDRR5 192-bit HDCP Support DirectX 12 Dual TORX 2.0 Fan VR Ready Graphics Card (GTX 1060 GAMING X 6G)', // video card
                        'x8 -> G.SKILL Ripjaws Series 8GB (2 x 4GB) 240-Pin DDR3 SDRAM DDR3 1600 (PC3 12800) Desktop Memory Model F3-12800CL9D-8GBRL', // ram
                        'x2 -> Crucial M4 2.5" 128GB SATA III MLC Internal Solid State Drive (SSD) CT128M4SSD2 ', // hard drive
                        'CORSAIR Hydro Series H100 (CWCH100) Extreme Performance Liquid CPU Cooler ', // coolant
                        'LG Black 10X BD-ROM 16X DVD-ROM 48X CD-ROM SATA Internal 12X Internal Blu-ray Drive 3D Playback & M-DISC Support Model UH12LS29 LightScribe Support - OEM' // dvd drive
              ];

function displayComputerParts(pcCase, powerSupply, motherboard, cpu, videoCard, ram, hardDrive, coolant, dvdDrive){
  "use strict"
  console.log(`My computer is a ${this.computerType} computer which consists of the following parts:\n
  PC Case: ${pcCase}\n
  Power Supply: ${powerSupply}\n
  Motherboard: ${motherboard}\n
  CPU: ${cpu}\n
  Video Card: ${videoCard}\n
  RAM: ${ram}\n
  Hard Drive: ${hardDrive}\n
  coolant: ${coolant}\n
  DVD Drive: ${dvdDrive}`);
}

displayComputerParts.call(computer, computerParts);

displayComputerParts.apply(computer, computerParts); // Note: displayComputerParts.call(computer, ...computerParts); would also work

const shareComputerDetailsLater = displayComputerParts.bind(computer, ...computerParts);
shareComputerDetailsLater();