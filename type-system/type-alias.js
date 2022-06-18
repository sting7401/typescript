"use strict";
// 타입 별칭
// interface 랑 비슷해 보임
// primitive, union , tuple , function
// 직접 타입을 다른 이름으로 지정
// 만들어진 타입의 refer를 사용하여 직접 타입을 지정
const stt = 'string';
let myStt = stt;
myStt = 1;
let textNumber = 0;
textNumber = 'string';
let tupleText = ['string', 1];
// 타입의 타입으로써 목적, 조건이 명확할때 interface
// 대상을 가르키고, 별명으로써만 존재할떄 type alias 사용
