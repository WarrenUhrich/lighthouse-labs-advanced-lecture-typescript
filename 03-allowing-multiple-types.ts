let myError: boolean | string;

if(process.argv.length > 2) myError = false;
else myError = 'Not enough args.';

if(myError) console.log(myError);
else if (myError === false) {
    console.log('Count to ten:');
    for(let i = 0; i <= 10; i++) {
        console.log(i);
    }
}
