interface person1 {
	name: string;
	age: number;
}
// 컴파일 타입에만 필요

function hello1(person: person1): void {
	console.log(`${person.name}`);
}

const p1: person1 = {
	name: 'Max',
	age: 30,
};

hello1(p1);
