type Product = {
	id: string;
	price: number;
	tags: string[];
	details: {
		title: string;
		description: string;
	};
};

const product: Product = {
	id: 'abc1',
	price: 12.99,
	tags: ['great-offer', 'hot-and-new'],
	details: {
		title: 'Red Carpet',
		description: 'A great carpet - almost brand-new!',
	},
};

type Person = {
	name: string;
	age?: number;
	hobbies?: string[];
	role?: [number, string];
};

const person: Person = {
	name: 'John',
	age: 30,
	hobbies: ['sports', 'cooking'],
	role: [2, 'author'],
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [...person.role, 1, 'user'];
