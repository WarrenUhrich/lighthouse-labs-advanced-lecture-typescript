// const sayHello = (name='World') => {
//     return `Hello, ${name}!`;
// };
// console.log( sayHello() );       // Hello, World!
// console.log( sayHello('Eric') ); // Hello, Eric!
var sayHello = function (name) {
    if (name === void 0) { name = 'World'; }
    // return 123; ✖
    return "Hello, ".concat(name, "!");
};
console.log(sayHello()); // Hello, World!
console.log(sayHello('Eric')); // Hello, Eric!
// console.log( sayHello(123) ); // ✖
var sum = function (nums) {
    var result = 0;
    nums.forEach(function (num) { return result += num; });
    return result;
};
console.log(sum([1, 2, 3, 4, 5])); // 15
console.log(sum([-90, 10, 150])); // 70
// console.log( sum([1, 2, '3']) );
// What does this function return?
// void means we don't return anything
var hello = function () {
    console.log('hi');
    // return 'hello'; ✖
};
hello();
