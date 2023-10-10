class PersonExtends<T extends string | number> {
	private _name: T;

	constructor(name: T) {
		this._name = name;
	}
}

new PersonExtends('string');
new PersonExtends(10);
//new PersonExtends(true);
