"use strict";
let isDone = false;
isDone = true;
console.log(typeof isDone); // boolean
let isOk = true;
// let isNotOk: boolean = new Boolean(true);
// error: Type 'Boolean' is not assignable to type 'boolean'. 'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.ts(2322)
