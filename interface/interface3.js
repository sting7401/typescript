"use strict";
function hello3(person) {
    console.log(`${person.name} `);
}
const p31 = {
    name: 'max',
};
const p32 = {
    name: 'name',
    system: ['windows', 'linux'],
};
const p33 = {
    name: '이름은 무조건 필수값',
    father: p31,
    mother: p32,
};
hello3(p33);
