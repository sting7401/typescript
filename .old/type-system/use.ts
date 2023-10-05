// 타입 지정이 안되어있을시 any 형태로 추론됨
// 추론 되지 않게 type 형태로 지정 하지 컴파일러가 에러로 발생시킴
// nolmplicitAny 옵션을 사용하여 추론 안되는 타입을 지정할 수 있음
// "strictNullChecks": true, 모든 요소에 null , undefined 을 포함 되어있던 것을 없애줌
//  "noImplicitReturns": true,     함수내 모든 코드가 값을 리턴하지 않으면 에러 발생

// error
// function f2(a:) {
// 	return a * 20;
// }

// 인자에만 타입 지정 하지 말고 return 값에도 타입 지정 하자
function f4(a: number) {
	if (a > 0) {
		return a * 20;
	}
}

console.log(f4(10)); // 200
console.log(f4(-4) + 5); // Nan, undefined //error Object is possibly 'undefined'.ts(2532)

function f5(a: number): number {
	//error Function lacks ending return statement and return type does not include 'undefined'.
	// 모든 리턴 타입에도 선언 되어야함
	if (a > 0) {
		return a * 20;
	}
}

function f6(a: { name: string; age: number }): string {
	return `${a.name}와 ${a.age}`;
}

// 나만의 타입 만들자
interface PersonInterface {
	name: string;
	age: number;
}

type PersonTypeAlias = { name: string; age: number };

function g4(a: PersonInterface): string {
	return `${a.name}와 ${a.age}`;
}
function g44(a: PersonTypeAlias): string {
	return `${a.name}와 ${a.age}`;
}
console.log(g4({ name: '소녀시대', age: 20 }));
console.log(g44({ name: '소녀시대', age: 20 }));
