// 일정 패턴이 동한 함수 들
// any는 모든것을 받아서 모든것을 표현 하나 generic은 함수안에서 변수 처럼 사용,
// 들어오는 타입이 함수내에서 가능

function helloString(message: string): string {
	return message;
}

function helloNumber(message: number): number {
	return message;
}

function hello(message: any): any {
	// any 형태는 어떤 형태로든 들어 갈수 있음

	return message;
}

console.log(hello('mar').length); // any 형
console.log(hello(23).length); // any 형

function helloGeneric<Type>(message: Type): Type {
	return message;
}

console.log(helloGeneric('mark').length);
console.log(helloGeneric(30));
console.log(helloGeneric(true));
