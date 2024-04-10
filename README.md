# Lighthouse Labs | Advanced Lecture: TypeScript

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-advanced-lecture-typescript/blob/2024.04.10-web-immersive-national-5february2024/README.md) | [Vimeo Video Recording](https://vimeo.com/933024056/04ee5512e8?share=copy)

* [X] What is TypeScript?
* [X] Installation
* [X] Using TypeScript

## What is TypeScript?

* TypeScript was created by Microsoft
* First released to the public on October 1, 2012
* Free and open-source high-level programming language
* Intended to add static typing and optional type annotations to JavaScript code
* Considered a "superset" of JavaScript
    * This means that it is everything that JavaScript is, with additional optional bells and whistles
    * All JavaScript programs are syntactically valid TypeScript (but may type-checks when compiled)
* TypeScript code is compiled to JavaScript before running, making it a "transpiled" language
    * Transpilation is the idea that we write code in one language (TS), that is converted to another languge (JS), that must itself be executed or compiled
* The TypeScript compiler is written in TypeScript

## The Point of using TypeScript

TypeScript is meant to bring about numerous benefits when writing what would otherwise be JavaScript code.

* VSCode uses TypeScript when detecting errors and making suggestions in your programs already!
* This becomes more powerful and the suggestions become more useful/accurate when you write your code using TypeScript's features
* TypeScript helps document the code you write, and you'll find improved suggestions even when using functions and objects that you have written yourself
* TypeScript brings stronger "typing" to JavaScript; this is something that exists in many other languages, especially those that are compiled (think C, C++, C#, Rust, or Go)
    * Static vs. Dynamic Typing
        * TypeScript gives us the opportunity to engage in "static typing," the idea that at at compile time the code is checked to ensure the program's variables, parameters, arguments, and returns use *consistent* and *correct* data-types
        * Traditionally, JavaScript is otherwise a language that takes advantage of "dynamic typing," the idea that data-types are checked or handled during runtime (when you actually execute your script)
    * Strong vs. Weak Typing
        * TypeScript is strongly typed; there is little room for mixing and matching types without trouble, making your code very predictable
        * Traditionally, JavaScript is otherwise a language that takes advantage of "weak typing," the idea that it has a way of handling situations where there might be type mis-matching without crashing the program
            * How many times have you had to run experiments in JavaScript to find out if you get what you expect?
                * `0 == '0'`
                * `0 == false`
                * `0 == []`
                * `0 == ' '`
                * `3 + '3'`
                * `3 + 3`

## Installation

There are a variety of ways you can quickly get started with TypeScript. NodeJS does ***not*** come with TypeScript support out-of-the-box, so we'll need to install it via `npm`.

Note that some other JavaScript runtimes, like [Deno](https://deno.com/) and [Bun](https://bun.sh/), ***do*** support TypeScript right out of the gate!

Let's grab TypeScript for NodeJS, since that is the runtime we're familiar with:

```sh
# Installs tsc (TypeScript Compiler)
# npm install --global typescript
npm install -D typescript
```

To confirm it is working, let's try this out on a simple JavaScript program:

```sh
# Create a "Hello, World!" program
echo "console.log('Hello, World\!');" >> hello-world.ts

# Compile the program to JavaScript
# tsc hello-world.ts
npx tsc hello-world.ts

# Note that there is now a JS file by the same name!
ls # hello-world.js hello-world.ts README.md

# Run the JavaScript program
node hello-world.js
```

Not super exciting just-yet, but we know that TypeScript installed properly and is-working!

## Configuration

Something quite powerful with this compiler is that it has been updated to include a variety of options. You can target very specific version of JavaScript for your output.

Recall that JavaScript as a language has evolved and changed over the years. As developers, we like our modern features... things like `let` and `const`, or the ability to write and run arrow functions! These features didn't always exist, and it can be tricky to rewrite your modern programs to be compatible with very old browsers or even older versions of NodeJS.

Having a compilation target allows us to write code that is compliant to modern standards, but have it rewritten for us in a way that will still function in elder standards or environments. This alone can be a powerful feature!

Create another new file and function:

```js
// sayHello.ts
const sayHello = name => `Hello, ${name?name:'World'}!`;
```

Let's see what the default JS output is:

```sh
# tsc sayHello.ts
npx tsc sayHello.ts
```

```js
// generated: sayHello.js
var sayHello = function (name) { return "Hello, ".concat(name ? name : 'World', "!"); };
```

Notice it has opted for older ways of doing things:
* `var` instead of `const`
* Use of `function` expression, instead of an arrow function
* String concatenation instead of a string template literal

This is in an effort to maximize compatibility. We can customize our target environment, and how TypeScript will handle our project's output though!

Let's create a configuration file. We can either create one manually if we know the JSON properties we want to use, or we can use the command-line tool available for generating one.

```sh
# tsc --init
npx tsc --init
```

***tsconfig.json***

```json
{
    "compilerOptions": {
        "target": "ES2018",   # Modern!
        "lib": ["ES2018"],    # JS Libraries, objects, functions to be available
        "module": "CommonJS", # Support for NodeJS-specific feature(s)
        "watch": true         # Automatically re-compiles your code on-save (doesn't work on all versions of TS)
    }
}
```

*Note: In-order to utilize the `tsconfig.json` file using `npx`, use the following syntax: `npx tsc --project ./tsconfig.json ./your-script.ts`.*

Now we can run the TypeScript compiler once, and it will listen for changes. Its target environment will now be modern JavaScript.

```sh
# tsc *.ts
npx tsc *.ts
```

```sh
# If you'd like to simply pass arguments via the terminal, try:
npx tsc *.ts --watch --target=ES2018
```

## Stronger Typing in your Code

### Implicit Typing

Without really thinking, we can add much stronger typing to our code just by using the TypeScript compiler. One way that we can do this is via **implicit** typing. This is marking a variable as a specific data-type based on its initial assignment.

```ts
let couldBeAnything; // This is inferred to be "any" type
couldBeAnything = 'abc';
couldBeAnything = 123;
couldBeAnything = null;

let myNum = 3.14; // This is inferred to be of type: "number"
myNum = 10;
myNum = -200;
myNum = 'abc'; // Trying to assign a string now will cause TypeScript to let us know we have made a mistake
               // By default, it will still create the JS file, but your terminal will let you know that you...
               // have a typing issue to correct.

let myString = 'Hello, World!'; // This is inferred to be of type: "string"
myString = 'Another one!';
myString = 'Hello, ';
myString += 'there!';
myString = 123; // Trying to assign a number now will cause TypeScript to let us know we have made a mistake
                // By default, it will still create the JS file, but your terminal will let you know that you...
                // have a typing issue to correct.
```

If you have an obvious initial value in-mind and don't expect the type to change over time, implicit is common. When you're using JavaScript's built-in types, methods, and functions TypeScript will have a good idea as to what to enforce or expect. We'll find that many popular packages and libraries have TypeScript support and we *can* get away with a reasonable amount of implicit typing if we'd like.

### Explicit Typing via Type Annotations

Sometimes the above might not feel clear enough, or there are cases without an initial value to interpret where we will still want to enforce a data-type. In such cases we can instead opt for explicit typing!

```ts
// let myNum; // This would normally be set to type 'any' as a fallback

// We can be specific, though! Note the colon syntax here:
let myNum: number;

myNum = 3;   // ✔
myNum = '3'; // ✖

// We can still be specific even if we have an initial value:
let myString: string = 'I\'m writing a string.';
myString = 'Now I\'m a different string.'; // ✔
myString = 12345678910111213141516171819;  // ✖
```

What if we want to allow multiple types?

```ts
// A single vertical line allows us to separate different potential types
let error: string | boolean = false; // In this example we'll start with a boolean

if(process.argv.length < 3) {
    // We can easily change between string and boolean
    error = 'No arguments present.'; // ✔
} 
```

### Arrays Basics

Let's think about some other more complex data-types though. What if we want to store an array of a certain data-type?

```ts
// This will implicitly type our variable as an array...
const nums = [];

// But if we want to include only numbers, we're out of luck!
nums.push(1);
nums.push('test'); // Everything goes...
```

Let's try again, but explore another TypeScript syntax:

```ts
// Now we're specifying that we want a number array!
const nums: number[] = [];
nums.push(1); // ✔
nums.push(2); // ✔
nums.push(3); // ✔
nums.push('uh oh'); // ✖
```

What if we want to support multiple types in our array?

```ts
// Precede the square brackets with parentheses,
// inside we can specify any data-types permitted
// in our array:
const namesAndAges: (string, number)[] = [];
namesAndAges.push('Quinn');
namesAndAges.push(35);
namesAndAges.push('Alice');
namesAndAges.push(36);
namesAndAges.push('Sam');
namesAndAges.push(29);
namesAndAges.push(30);
namesAndAges.push(31);
```

### Interfaces

Arrays are one thing, but what about objects? We work with them all the time, and they're a bit busier having both keys and values stored within. Let's look at the following JavaScript code:

```js
const users = [];

users.push({
    name: 'Alexis',
    birthYear: 1982
});

users.push({
    name: 'Baylor',
    birthYear: 1978
});

users.push({
    name: 'Adair'
});
```

It can be really difficult to remember the expected shape of an object throughout a program. In the above case we're expected to somehow "know" or remember that all users should have a `name` and `birthYear` property... it also looks like `name` should probably be a string, and `birthYear` should probably be a number. How can we enforce that?

```ts
// An interface lets us decide on the expected
// properties and their data-types!
interface User {
    name: string;
    birthYear: number;
};

// Let's incorporate this pattern in our previous code:

// This is now a User array
const users: User[] = [];

users.push({
    name: 'Alexis',
    birthYear: 1982
});

users.push({
    name: 'Baylor',
    birthYear: 1978
});

// In this push, TypeScript will notify us that
// we are missing a property: birthYear
users.push({
    name: 'Adair'
});
```

What if we want `birthYear` to be optional? We can add a question mark to the key name:

```ts
interface User {
    name: string;
    birthYear?: number; // The question mark makes this property optional
};
```

Like the `any` type, we usually want to avoid this next syntax, but we *can* allow any number of additonal properties via the following syntax:

```ts
interface User {
    name: string;
    birthYear?: number;
    // Allows any new keys that are strings, and values that are type 'any'
    [key: string]: any; // Avoid this when you can, you're fighting TS' advantages
};
```

### Functions

Let's write a simple JavaScript function that returns a hello string.

```js
const helloWorld = (name='World') => {
    return `Hello, ${name}`
};

console.log( helloWorld() );
console.log( helloWorld('Brenda') );
```

We can be more explicit by annotating our parameter's allowed type(s), and our return's allowed type(s):

```ts
// Our 'name' parameter is now optional, but maintains its default 'World' value
const helloWorld = (name?: string = 'World'): string => {
    return `Hello, ${name}`; // Now the function MUST return a string
};

console.log( helloWorld() );
console.log( helloWorld('Brenda') );
```

Let's write a simple JavaScript function that calculates the sum of a number array.

```js
const sum = nums => {
    let result = 0;
    nums.forEach(num => result += num);
    return result;
};

console.log( sum([1, 2, 3, 4, 5]) ); // 15
console.log( sum([-90, 10, 150]) );  // 70

// There is a chance we could write code resulting in edge-cases...
console.log( sum([null, 3, 'hello', 4]) ); // '3hello4'
console.log( sum() );  // .forEach is a not a function of type: undefined
```

```ts
// The parameter specifies a required number array
const sum = (nums: number[]): number => {
    let result: number = 0;
    nums.forEach(num => result += num);
    return result; // The return MUST be a number
};

// TypeScript will direct us to only use the function as-described
console.log( sum([1, 2, 3, 4, 5]) ); // 15
console.log( sum([-90, 10, 150]) );  // 70
```

## Quickly Create TypeScript-Enabled React Applications

```sh
npx create-react-app my-app --template typescript
```

## Resources

* See the `outline.md` file in this repo for a cheat-sheet list of commands and features
    * [Thank you to our very own Andy Lindsay for this!](https://github.com/andydlindsay/lectures/blob/master/advanced-typescript/outline.md)
* [TypeScript Official Site](https://www.typescriptlang.org/)
* [TypeScript Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
* [TypeScript in 5 Minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
* [YouTube: TypeScript in 100 Seconds](https://www.youtube.com/watch?v=zQnBQ4tB3ZA)
    * [YouTube: TypeScript - The Basics](https://www.youtube.com/watch?v=ahCwqrYpIuM)
* [Book: OReilly Safari Programming TypeScript](https://www.oreilly.com/library/view/programming-typescript/9781492037644/)
