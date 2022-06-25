"use strict";
class Person8 {
    static helloE() {
        // 외부 가능
        console.log('시맨틱', Person8.CITY2);
    }
    hello() {
        // 외부 가능
        console.log('시맨틱', Person8.CITY2);
    }
    change() {
        Person8.CITY2 = 'LA';
    }
}
Person8.CITY = 'seoul'; // static 으로 외부 지정
Person8.CITY2 = 'seoul2'; // 내부만 가능
Person8.CITY;
Person8.helloE();
const p8 = new Person8();
p8.hello();
const p88 = new Person8();
p88.hello();
p8.change();
p88.hello();
