"use strict";
// 컴파일 타입에만 필요
function hello1(person) {
    console.log(`${person.name}`);
}
const p1 = {
    name: 'Max',
    age: 30,
};
hello1(p1);
