interface Person4 {
	name: string;
	age: number;
	hello(): void;
}

const p41: Person4 = {
	name: 'max',
	age: 30,
	hello: function (): void {
		console.log(`${this.name}`);
	},
};

const p42: Person4 = {
	name: 'max',
	age: 30,
	hello(this: Person4): void {
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
