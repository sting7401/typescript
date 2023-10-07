class PersonGenericClass<T, K> {
	private _name: T;
	private _age: K;

	constructor(name: T, age: K) {
		this._name = name;
		this._age = age;
	}
}

new PersonGenericClass('string', 10);
new PersonGenericClass(0, 10);
new PersonGenericClass([{ title: 'string' }], [[{ title: 0 }]]);

new PersonGenericClass<string, number>('string', 100);
new PersonGenericClass<number, number>(0, 100);
new PersonGenericClass<[{ title: string }], [{ title: boolean }]>(
	[{ title: 'string' }],
	[{ title: true }],
);
