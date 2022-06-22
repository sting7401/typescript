"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
    }
    hello() {
        console.log(`${this.name}`);
    }
}
const person = new Person('Max');
person.hello();
