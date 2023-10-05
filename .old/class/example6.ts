class Person6 {
	public readonly name: string = 'ma';
	private readonly country: string; // 초기화, 바꿀수 없음

	public constructor(public _name: string, private age: number) {
		this.country = 'korea';
	}

	hello() {
		//	this.country = 'america'; // readonly 시 바꿀수 없음
	}
}

const p6 = new Person6('ad', 28);

console.log(p6.name); // get 을 하는 함수 getter
//p6.name = 'setter'; // set 을 하는 함수 setter
console.log(p6.name); // get 을 하는 함수 getter
