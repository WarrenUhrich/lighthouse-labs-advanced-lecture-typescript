"use strict";
const numsArr = []; // implicit: any
numsArr.push(1);
numsArr.push(2);
numsArr.push(3);
numsArr.push('test'); // Can push strings and anything else 😢
// number array -> only numbers are allowed inside
const nums = [];
nums.push(1);
nums.push(2);
nums.push(3);
nums.push('test'); // Warning! Not a number!
