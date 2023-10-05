"use strict";
let sub1 = 1;
let sup1 = sub1;
sup1 = sub1;
//sub1 = sup1; //error  Type 'number' is not assignable to type '1'
let sub2 = [1];
let sup2 = sub2;
sup2 = sub2;
// sub2 = sup2; // error
let sub3 = [1, 2];
let sup3 = sub3;
// sub3 = sup3; // errorType 'number[]' is not assignable to type '[number, number]'.  Target requires 2 element(s) but source may have fewer
let sub4 = 1;
let sup4 = sub4;
sub4 = sup4;
let sub5 = 0;
let sup5 = sub5;
// sub5 = sup5; // error Type 'number' is not assignable to type 'never'
class Animal {
}
class Dog extends Animal {
    ear() { }
}
let sub6 = new Dog();
let sup6 = sub6;
// sub6 = sup6; //error Type 'Animal' is not assignable to type 'Dog'
// 1. 같거나 서브타입인 경구 할당 가능 하다 - 공변
// primitive type
let sub7 = 1;
let sup7 = sub7;
// object- 각각의 프로퍼티가 대응 하는 프로퍼티가 같거나 서브타입이어야 한다
let sub8 = { a: 'a', b: 1 };
let sup8 = sub8;
// array- object와 같음
let sub9 = [{ a: '', b: 1 }];
let sup9 = sub9;
// 2. 함수의 매개변수 타입만 같거나 슈퍼타입경우에만 할당 가능 - 반병
class Person {
}
class Dev extends Person {
    coding() { }
}
class subDev extends Dev {
    hide() { }
}
// f: 함수, (d: Dev) => Dev: 형태
function tell(f) { }
// Dev => Dev 에다가 Person => Dev를 할당 , 같은
tell(function dToD(d) {
    return new Dev();
});
// Dev => Dev 에다가 Person => Dev를 할당 , supertype
tell(function pToD(p) {
    return new Dev();
});
// Dev => Dev 에다가 subDev => Dev를 할당, subtype
// strictFunctionType : true,  함수에서 매변변수 타입이 같거나 슈퍼 타입이어야한다.
tell(function sToD(d) {
    // error Argument of type '(d: subDev) => Dev' is not assignable to parameter of type '(d: Dev) => Dev'. Types of parameters 'd' and 'd' are incompatible.
    return new Dev();
});
