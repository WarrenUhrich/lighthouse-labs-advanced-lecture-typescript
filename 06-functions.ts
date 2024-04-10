// const sayHello = (name='World') => {
//     return `Hello, ${name}!`;
// };

// console.log( sayHello() );       // Hello, World!
// console.log( sayHello('Eric') ); // Hello, Eric!

const sayHello = (name: string = 'World'): string => {
    // return 123; ✖
    return `Hello, ${name}!`;
};

console.log( sayHello() );       // Hello, World!
console.log( sayHello('Eric') ); // Hello, Eric!
// console.log( sayHello(123) ); // ✖

const sum = (nums: number[]): number => {
    let result = 0;
    nums.forEach(num => result += num);
    return result;
};

console.log( sum([1, 2, 3, 4, 5]) ); // 15
console.log( sum([-90, 10, 150]) );  // 70
// console.log( sum([1, 2, '3']) );


// What does this function return?
// void means we don't return anything
const hello = (): void => {
    console.log('hi');
    // return 'hello'; ✖
};

hello();
