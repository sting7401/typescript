"use strict";
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`${this._name}, ${this._age} 나는 부모`);
    }
    pintName() {
        console.log(this._name, this._age);
    }
}
// const p10 = new Parent('dm', 12);
// p10.print();
class Child extends Parent {
    constructor(age) {
        super('자식 요소에서 가져오기', age); // 덮어 씌운 형태 protected -> public
        this.gender = 'male'; // 추가된 요소
        this.pintName();
    }
}
const p101 = new Child(111);
p101.print();
p101.gender;
// p101._name;
