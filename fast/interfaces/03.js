"use strict";
const hello3 = (person) => {
    console.log(`${person.name}: ${person.age}`);
};
const p31 = {
    name: 'mane1',
    age: 10,
};
const p32 = {
    name: 'mane2',
    another: ['mane1', 'mane2'],
};
const p33 = {
    name: 'p33',
    fa: p31,
    ma: p32,
};
