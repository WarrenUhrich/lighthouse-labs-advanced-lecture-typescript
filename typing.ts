let couldBeAnything; // This is inferred to be "any" type
couldBeAnything = 'abc';
couldBeAnything = 123;
couldBeAnything = null;

let myNum = 3.14; // This is inferred to be of type: "number"
myNum = 10;
myNum = -200;
myNum = 'abc'; // Trying to assign a string now will cause TypeScript to let us know we have made a mistake