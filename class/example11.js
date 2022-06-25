"use strict";
class AbstractPerson {
    constructor() {
        this._name = 'ams';
    }
}
// new 안됨
//abstract 키워드를 사용하면 abstract 함수를 사용해야 함
class Person11 extends AbstractPerson {
    setName(name) {
        this._name = name;
    }
}
const p11 = new Person11();
