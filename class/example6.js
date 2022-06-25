"use strict";
class Person6 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = 'ma';
        this.country = 'korea';
    }
    hello() {
        //	this.country = 'america'; // readonly 시 바꿀수 없음
    }
}
const p6 = new Person6('ad', 28);
console.log(p6.name); // get 을 하는 함수 getter
//p6.name = 'setter'; // set 을 하는 함수 setter
console.log(p6.name); // get 을 하는 함수 getter
