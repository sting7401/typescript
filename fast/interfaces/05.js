"use strict";
/**
 * Description
 * @param {any} name:string
 * @param {any} age?:number
 * @returns {any}
 */
class PersonClass {
    constructor(name, age) {
        this.name = '';
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    hello() {
        console.log(`${this.name}`);
    }
}
const personClass = new PersonClass('person');
personClass.hello();
