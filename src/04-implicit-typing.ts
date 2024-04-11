// If we don't explicitly type annotate, TS falls back to implicit typing.

let couldBeAnything; // This is inferred to be 'any' type
couldBeAnything = 'abc';
couldBeAnything = 123;
couldBeAnything = false;

// The 'any' is antithetical to the purpose of TypeScript...
// We WANT to be more specific

let myNum = 3.14; // This is inferred to be 'number' type
myNum = 5;
myNum = -10;
myNum = 'Hi!'; // TS will warn us if we try to change the type!
