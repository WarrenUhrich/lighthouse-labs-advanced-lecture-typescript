# Lighthouse Labs | Advanced Lecture: TypeScript

* [ ] What is TypeScript?
* [ ] Installation
* [ ] Stronger Typing in your Code

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

Let's create a configuration file:

***tsconfig.json***

```json
{
    "compilerOptions": {
        "target": "ES2015", # Modern!
        "lib": ["ES2015"],  # JS Libraries, objects, functions to be available
        "watch": true       # Automatically re-compiles your code on-save (doesn't work on all versions)
    }
}
```

Now we can run the TypeScript compiler once, and it will listen for changes. Its target environment will now be modern JavaScript.

```sh
# tsc *.ts
npx tsc *.ts --watch
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

### Explicit Typing

Sometimes the above might not feel clear enough, or there are cases without an initial value to interpret where we will still want to enforce a data-type. In such cases we can instead opt for explicit typing!
