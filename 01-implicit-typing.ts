// Without thinking much, we can have a data-type inferred!

let myNum = 3.14; // Implicitly, TS notices that we assigned a number.
                  // It will assume this value should STAY a number.

myNum = 5;     // ✔
myNum = 'bob'; // ✖

let myString = 'Hi there!';

myString += ' I am Bob!'; // ✔
myString = 2; // ✖


let couldBeAnything; // By default, if there is nothing to inference...
                     // this variable is treated as type: `any`
couldBeAnything = 3;
couldBeAnything = 'My string?';