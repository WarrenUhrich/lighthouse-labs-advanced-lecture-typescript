"use strict";
let error;
if (process.argv.length > 2) {
    error = false;
}
else {
    error = 'Error: Please provide CLI arguments.';
}
console.log(error);
