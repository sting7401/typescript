interface IPerson1 {
	name: string;
	age?: number;
	hello(): void;
}

/**
 * Description
 * @param {any} name:string
 * @param {any} age?:number
 * @returns {any}
 */
class PersonClass implements IPerson1 {
	name: string = '';
	age?: number | undefined = 0;

	constructor(name: string, age?: number) {
		this.name = name;
		this.age = age;
	}

	hello(): void {
		console.log(`${this.name}`);
	}
}

const personClass: IPerson1 = new PersonClass('person');
personClass.hello();
