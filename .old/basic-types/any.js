"use strict";
// 어떤 타입이든 상관이 없음
// 최대한 사용하지 않는게 핵심
// 숫자나 문자열이라는 타입이 필요가 없음
// "noImplicitAny": true, : tsconfig.json 옵션 설정
function returnAny(message) {
    console.log(message);
}
const any1 = returnAny('리턴 값은 아무거나');
any1.toString();
// 개체 전파
let looselyTyped = {};
let d = looselyTyped.a.b.c.d;
function leakingAny(obj) {
    const a = obj.num; // any에서 number로 변환시 이후 요소들은 number 타입으로 변환됨
    const b = a + 1;
    return b;
}
const c = leakingAny({ num: 1 }); // c도 any로 됨
c.indexOf('0');
