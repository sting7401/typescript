"use strict";
class PersonStatic {
    hello() {
        console.log(`${PersonStatic.CITY}`);
    }
    change() {
        PersonStatic.CITY = 'newCITY';
    }
}
PersonStatic.CITY = 'seoul';
const pStatic1 = new PersonStatic();
const pStatic2 = new PersonStatic();
pStatic2.hello();
pStatic1.change();
pStatic2.hello();
// PersonStatic.hello();
