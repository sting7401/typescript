// return에 일반적으로 사용
// 어떤 타입도 할당 가능
// any 조차도 할당 안됨
// 잘못된 타입을 넣는 실수 막고자 사용

function error(message: string): never {
	// 아무것도 리턴 되지 않음
	throw new Error(message);
}

function fail() {
	return error('failed');
}

function infiniteLoop(): never {
	while (true) {}
}

//
// let a: string = 'hello';

declare const a: string | number;

if (typeof a !== 'string') {
	// typeof 가드
	a;
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;

// type ObjectIndexable = Indexable<{}>;
// const b: Indexable<{}> = ''; // error Type 'string' is not assignable to type 'never'.
