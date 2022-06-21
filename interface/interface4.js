"use strict";
const p41 = {
    name: 'max',
    age: 30,
    hello: function () {
        console.log(`${this.name}`);
    },
};
const p42 = {
    name: 'max',
    age: 30,
    hello() {
        console.log(`${this.name}`);
    },
};
// const p43: Person4 = {
// 	name: 'max',
// 	age: 30,
// 	hello: (this: Person4): void => {
// 		console.log(`${this.name}`);
// 	},
// };
p41.hello();
p42.hello();
