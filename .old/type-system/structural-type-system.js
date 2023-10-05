"use strict";
// 구조가 같으면, 같은 타입니다.
// 타입스크립트
let PersonInterface = {};
let PersonType = {};
PersonInterface = PersonType;
PersonType = PersonInterface;
function PersonId(id) {
    return id;
}
function getPersonId(id) {
    return id;
}
// duck typing // 파이썬
// 인터페이스를 구현하는 타입이 인터페이스를 구현하는 타입인지 확인하는 것
