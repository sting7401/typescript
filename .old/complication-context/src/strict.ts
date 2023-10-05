let obj = {
	bar: 10,
};

obj['foo'] = 20;
obj['bar'] = 30;
obj.baz = 10;

// noImplicitThis: true
function noImplicitThisTestFunc(this: any, name: string, age: number) {
	this.name = name;
	this.age = age;

	return this;
}

// noImplicitThis: true
// class 에서 this를 사용하면 noImplicitThis: true 오류가 나지 않는다.
// class 에서 constructor를 제외한 멤버 함수의 첫번째 매개변수도 일반 함수와 마찬가지로 this를 사용할수 있음
class NoImplicitThisTestClass {
	private _name: string;
	private _age: number;

	constructor(name: string, age: number) {
		this._name = name;
		this._age = age;
	}

	public print(this: NoImplicitThisTestClass) {
		console.log(this._name, this._age);
	}
}

new NoImplicitThisTestClass('John', 30).print();

// strictNullChecks: true
// null, undefined 가 모든 형태에 사용하지 않게 any에만 할당 가능
// 한가지 예외 undefined에 void 할당가능
// union 타입을 이용해야 함
// any 타입은 null과 undefined를 할당할수 있음

const a: number = null;
const b: string = undefined;
const c: void = undefined;
const d: any = null;
const e: number | null = null;
const f: any = undefined;

// strictFunctionTypes
// 함수 타입에 대한 bivariant 매개변수 비활성화?
// 반환 타입은 공변, 인자타입은 반공변적 -> 타입스크립틑 공변이며 반공변적
// 이문제를 해결하기 위한 옵션

const button = document.querySelector('button') as HTMLButtonElement;
button.addEventListener('keydown', (e: MouseEvent) => {}); // MouseEvent는 MouseEvent로 할당되어야 함, KeyboardEvent

// --strictPropertyInitialization
// 정의되지 않은 클래스의 속성이 생성자에서 초기화되었는지 확인

class Person {
	private _name: string;
	private _age: number;

	constructor() {
		// constructor(name: string, age: number) {
		this._name = name;
		this._age = age;
	}

	public async init(name: string, age: number) {
		this._name = name;
		this._age = age;
	}

	public print(this: NoImplicitThisTestClass) {
		console.log(this._name, this._age);
	}
}

// --strictBindCallApply
// bind, call, apply 를 엄격하게 사용하는 옵션
// bind는 해당 함수 안에 사용할 this와 인자를 설정 , call과 apply는 this와 인자를 설정한 후 실행
// call는 여러 인자의 나열로 넣어서 사용 , apply는 모든 인자를 배열 하나로 전달하면서 실행

// --alwyasStrict
// 각 소스 파일에 strict 모드를 적용하는 옵션
// 'use strict'
