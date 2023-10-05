interface person2 {
	name: string;
	age?: number;
}
// 개체가 있을수도있고 없을 수도 있을 때 ? 사용

function hello2(person: person2): void {
	console.log(`${person.name}`);
}

hello2({ name: 'Max', age: 30 });
hello2({ name: 'Max2' });
