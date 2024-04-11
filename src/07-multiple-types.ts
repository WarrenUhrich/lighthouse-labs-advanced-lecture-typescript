let error: string | boolean; // Allow multiple types with the vertical line!

if(process.argv.length > 2) {
    error = false;
} else {
    error = 'Error: Please provide CLI arguments.';
}

console.log(error);

// This array can have numbers OR strings inside!
const namesAndAges: (number | string)[] = [];
namesAndAges.push(45);
namesAndAges.push('Quinn');
namesAndAges.push('Bob');
namesAndAges.push(30);
namesAndAges.push(55);
namesAndAges.push(false); // Hey, that's not a number or a string!