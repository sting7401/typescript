class Person3 {
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

const p32 = new Person3(28);
const p33 = new Person3();

console.log(p3);

// 접근 제어자는 public, private, protected
// 설정하지 않으면 public
// 클래스 내부 모든곳으ㅔ (생성자, 프로퍼티, 메섣) 설정 가능
// private 설정 시 클래스 외부에서 접근 불가
// 자바스크립트에서는 private 가 지원하지 않아 프로퍼티나 메서드 이름 앞에 _붙여서 암묵적으로 명시
