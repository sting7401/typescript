"use strict";
class AbstractClass {
    constructor() {
        this._name = 'mak';
    }
}
class PersonAbstract extends AbstractClass {
    setName(name) {
        this._name = name;
        console.log(`${this._name}`);
    }
}
const abstract = new PersonAbstract();
abstract.setName('John');
