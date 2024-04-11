let myNewNum: number; // explicitly type using ': type' syntax
myNewNum = 3;
myNewNum = true; // That isn't a number!

let couldBeAnyType: any; // Don't use this... defeats the purpose

let myNewString: string = 'Initial value!';
myNewString = 'Changed!';
myNewString += ' And now concatenated!';
