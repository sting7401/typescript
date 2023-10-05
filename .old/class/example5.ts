class Person5 {
	public constructor(public _name: string, private age: number) {}

	get name() {
		console.log('get');
		return this._name + 's';
	}

	set name(n: string) {
		console.log('set');
		this._name = n;
	}
}

const p5 = new Person5('ad', 28);

console.log(p5.name); // get 을 하는 함수 getter
// p1.name = 'setter'; // set 을 하는 함수 setter
console.log(p5.name); // get 을 하는 함수 getter
