"use strict";
class Person {
    constructor(genericName, genericAge) {
        this._genericName = genericName;
        this._genericAge = genericAge;
    }
}
new Person('이름', 129);
new Person('문자열만', 20);
