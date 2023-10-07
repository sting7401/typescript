abstract class AbstractClass {
	protected _name: string = 'mak';

	abstract setName(name: string): void;
}

class PersonAbstract extends AbstractClass {
	setName(name: string): void {
		this._name = name;

		console.log(`${this._name}`);
	}
}

const abstract = new PersonAbstract();

abstract.setName('John');
