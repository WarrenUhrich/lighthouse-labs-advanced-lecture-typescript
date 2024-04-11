# Lighthouse Labs | Advanced Lecture: TypeScript

* [X] What is TypeScript?
* [X] Installation
* [X] Using TypeScript

## What have we heard, what do we know so far?

"Type-Safe" code.

* Does it make coercion redundant?
* Helps verify data-types!
* Static typing?

## What is TypeScript?

TypeScript is a language developed by Microsoft to bring more type safety and predictability to JavaScript code. There is a TypeScript compiler that will help us convert our code into something usable.

             Assembly
C Program -> C Compiler -> Binary Executable
             Translator

TypeScript cannot be run in the browser or by NodeJS. TypeScript is considered a "transpiled" language. In that it is translated to JS, which then must itself still be run through an interpretor.

TypeScript Program -> TS Compiler   -> JavaScript -> Hand to an interpretor...
SCSS Code          -> SASS Compiler -> CSS        -> Handed to the browser

TypeScript is a superset of JS. (We have worked with transpiled superset before...) This means that ALL JavaScript programs are valid TypeScript programs!

SASS/SCSS was also a superset/transpiled.

The TypeScript compiler is built-in... TypeScript.

Most of the VSCode suggestions you see when writing JavaScript are due to a TypeScript compiliation happening in-background.

TypeScript's growth in-use amonst web developers in unrivaled! It is suitable for use in both front and back-end JS development.

## Typing

* Static (TS)
    * Data-types are checked or handled at compile-time instead
    * See issues before you even /run/ your program
* Dynamic (JS)
    * Data-types are checked/handled during runtime
    * We don't get warnings or errors before runtime (no compilation step)
    ```js
    const myOtherVar = 123;
    myOtherVar = 'abc'; // This won't error until we actually run our code.

    let myVar = 'abc';
    myVar = 123;
    myVar = false;
    ```
* Strong (TS)
    * There is little room for mixing/matching types
    * When something is assigned type, it should generally stay that type
* Weak (JS)
    * This relates to how easy it is to change data-type on existing variables (no protection)
    * How situations are handled with mixed types


    0 == '0'    // true?
    0 == false  // true?
    0 == []     // true!
    0 == ' '    // true

    3 + '3'     // '33'
    3 + 3       // 6

## Installation / Environments

Out-of-the-box we know that NodeJS and web browsers are not equipped to run TypeScript. This means we require a compiler! Something that can turn TS code into JS code.

We can install the compiler via:
`npm install typescript`

(If you want to install it as a command-line tool accessible anywhere, you can instead: `npm install -g typescript`.)

There are alternative modern runtimes (to NodeJS) that do understand/interpret TypeScript out-of-box.

* Deno
* Bun

To run the current directory as a project, use:

```sh
npx tsc --project ./tsconfig.json
```
