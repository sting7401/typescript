interface Person4 {
	name: string;
	age: number;
	hello(): void;
}

const p41: Person4 = {
	name: 'p41',
	age: 20,
	hello: (): void => {
		//	return console.log(`hello ${this.name}`);
	},
};

const p42: Person4 = {
	name: 'p41',
	age: 20,
	hello(this: Person4): void {
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
