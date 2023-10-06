"use strict";
console.log(Symbol('symbol'));
console.log(Symbol('symbol') === Symbol('symbol'));
const sym = Symbol();
const objects = {
    [sym]: 'value',
};
//objects['sym'];
