interface Person3 {
	name: string;
	age?: number;
	[index: string]: any;
}

const hello3 = (person: Person3): void => {
	console.log(`${person.name}: ${person.age}`);
};

const p31: Person3 = {
	name: 'mane1',
	age: 10,
};

const p32: Person3 = {
	name: 'mane2',
	another: ['mane1', 'mane2'],
};

const p33: Person3 = {
	name: 'p33',
	fa: p31,
	ma: p32,
};
