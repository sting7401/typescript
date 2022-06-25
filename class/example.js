"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
const p1 = new Person('max');
console.log(p1);
// class 키워드 사용
// 보통 대문자 이용
// new를 이용하여 class를 통해 object를 만듬
// constructor() 를 이용하여 값 전달 가능
// 값 전달 시 this를 통해서 object를 가리킴
// js로 컴파일 시 es5의 경우 function 으로 전환됨
