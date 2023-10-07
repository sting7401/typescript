"use strict";
class PersonService {
    constructor(name = '', age) {
        this.name = '';
        this.age = 0;
        if (typeof age !== 'undefined') {
            this.age = age;
            this.name = name;
        }
        this.country = 'usa';
    }
    get value() {
        return this.name + ' song';
    }
    set value(value) {
        this.country = value;
    }
    hello() {
        //this.country = 'korea';
    }
}
const p11 = new PersonService('', 10);
// const p12 = new PersonService();
console.log('🚀 ~ file: 01.ts:6 ~ p11:', p11);
const p13 = new PersonService('name', 10);
// p11.age = 10;
// p13.name = '';
p13.value = 'John';
