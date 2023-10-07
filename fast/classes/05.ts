class Parent {
	#name: string = '';

	constructor(name: string, private _age: number) {
		this.#name = name;
	}

	public print(): void {
		console.log(`Parent ${this.#name} ${this._age}`);
	}

	protected printName(): void {
		console.log(`${this.#name}`);
	}
}

const p = new Parent('name', 29);

p.print();

class Child extends Parent {
	#name: string = '';
	public gender: string = 'male';

	constructor(age: number) {
		super('', age);

		this.#name = 'ddd';

		this.printName();
	}
}

const child = new Child(4);

child.gender = 'male2';
child.#name = 'son';
child.print();
