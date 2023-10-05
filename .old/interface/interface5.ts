interface IPerson1 {
	name: string;
	age?: number;
	hello(): void;
}

class Person implements IPerson1 {
	name: string;
	age?: number | undefined;

	constructor(name: string, age?: number) {
		this.name = name;
	}

	hello(): void {
		console.log(`${this.name}`);
	}
}

const person: IPerson1 = new Person('Max');
person.hello();
