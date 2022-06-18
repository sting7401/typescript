// 구조가 같으면, 같은 타입니다.
// 타입스크립트

interface IPerson {
	name: string;
	age: number;
	speak(): string;
}

type IPersonType = {
	name: string;
	age: number;
	speak(): string;
};

let PersonInterface: IPerson = {} as any;
let PersonType: IPersonType = {} as any;

PersonInterface = PersonType;
PersonType = PersonInterface;

// nominal type system 구조가 같아도 다른 타입 // java, c

type PersonId = string & { readonly brand: unique symbol };

function PersonId(id: string): PersonId {
	return id as PersonId;
}

function getPersonId(id: string): PersonId {
	return id as PersonId;
}

// duck typing // 파이썬
// 인터페이스를 구현하는 타입이 인터페이스를 구현하는 타입인지 확인하는 것
