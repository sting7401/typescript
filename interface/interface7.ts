interface HelloPerson {
	(name: string, age?: number): void;
}

const helloPerson: HelloPerson = function (name: string, age?: number): void {
	console.log(`${name} ${age}`);
};

helloPerson('Max', 30);
