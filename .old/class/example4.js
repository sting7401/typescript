"use strict";
class Person4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    } // 2 방법
}
const p4 = new Person4('이', 28);
// console.log(p4.age); // error Property 'age' is private and only accessible within class 'Person4'.ts(2341)
