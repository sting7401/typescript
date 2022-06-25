class Person2 {
	public name: string = 'max'; // 1 방법
	private age!: number;

	public constructor(age?: number) {
		if (age === undefined) {
			this.age = 20;
		} else {
			this.age = age;
		}
	} // 2 방법

	public async init() {}
}

const p2 = new Person2(28);
const p3 = new Person2();

console.log(p2);
console.log(p2.age);
p2.age = 28;

// await p2.init();

// 클래스가 곧 타입으로 정의됨
// 생성자 함수가 없으면 디폹 생성자가 불린다
// 생성자가 하나라도 있으면 디폴트 생성자는 사라진다.
// strict 모드에서는 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당
// 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당 하지 않는 경우 에는 !를 붙여서 위험을 표시
// 클래스의 프로퍼티가 정의되어 있지만 값을 대입하지 않으면 undefined
// 생성자에서는 async를 설정할수 없음
