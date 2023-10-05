"use strict";
const person = {
    name: '이름',
    age: 20,
};
const keys = 'age';
// IPerson[keyof IPerson] => IPerson['name' | 'age'] => IPerson['name'] | IPerson['age'] => string | number
// function getProp(obj: IPerson, key: keyof IPerson): IPerson[keyof IPerson] {
// 	return obj[key];
// }
function getProp(obj, key) {
    return obj[key];
}
getProp(person, 'age');
function setProp(obj, key, value) {
    obj[key] = value;
}
setProp(person, 'name', 'ㅁ이름');
