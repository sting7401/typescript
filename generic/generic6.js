"use strict";
// 상속
// T는 string과 number의 union타입으로 가능
// 타입은 항사 가장 작은 범위로 제한
class PersonExtends {
    constructor(name) {
        this._name = name;
    }
}
new PersonExtends('문자');
new PersonExtends(3);
