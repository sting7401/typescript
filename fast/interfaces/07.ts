interface HelloPerson {
	(name: string, age?: number): void;
}

const helloPerson: HelloPerson = (name: string, age?: number) => {
	console.log(`${name} `);
};
