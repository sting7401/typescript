"use strict";
const p41 = {
    name: 'p41',
    age: 20,
    hello: () => {
        //	return console.log(`hello ${this.name}`);
    },
};
const p42 = {
    name: 'p41',
    age: 20,
    hello() {
        return console.log(`hello ${this.name}`);
    },
};
// const p43: Person4 = {
// 	name: 'p41',
// 	age: 20,
// 	hello: (): void => {
// 		return console.log(`hello ${this.name}`);
// 	},
// };
p41.hello();
p42.hello();
