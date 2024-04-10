# Lighthouse Labs | Advanced Lecture: TypeScript

* [ ] What is TypeScript?
* [ ] Installation
* [ ] Using TypeScript

## What have you heard about TS?

* Heard it is an extension of JS
* It is a superset of JS!

## TypeScript

* Was initially released in October, 2012
* It started its free and open-source
* Created by Microsoft
    * C#
    * .NET Framework
* To add static typing, strong typing, and type annotations to JavaScript code
* TS is a superset of JS!
    * Any and EVERY JS program is a valid TS program
    * Builds on what JS already offers
* TS is a transpiled language
    * TS doesn't run in the standard environments
    * We use a compiler to turn TS into JS, this can run in NodeJS or the browser
* The TypeScript compiler is written in: TypeScript

```js
// Static vs. Dynamic Typing
let name = 'Bob'; // In static typing this is a string, it must stay a string.
name = 123; // JS is dynamically typed... we can change types at-will.

// Strong vs. Weak Typing
3 + '3' // JS is weakly typed...
// Strongly typed languages would enforce stricter typing here!
// Make sure both sides are the same type!

let num; // In JS we have no type annotations
let <number> num; // Type annotations give us a way of letting the compiler know which type a variable should be
```

## Installation / Environment

Some runtimes now come with TypeScript support out-of-box!
* Deno -> goal of security in the world of JS
* Bun -> goal of performance

The standard / most popular runtimes still do not include it, so we'll have to install it:
~~NodeJS~~
~~Browser~~

```sh
npm install typescript
```

What this installation does is provide a binary called `tsc`.

`tsc` stands for TypeScript Compiler.

## Let's install and try to run it!
