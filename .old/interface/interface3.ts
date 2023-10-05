interface Person3 {
	name: string;
	age?: number;
	[index: string]: any; // 2가지 올수 있음
}

function hello3(person: Person3): void {
	console.log(`${person.name} `);
}

const p31: Person3 = {
	name: 'max',
};

const p32: Person3 = {
	name: 'name',
	system: ['windows', 'linux'],
};

const p33: Person3 = {
	name: '이름은 무조건 필수값',
	father: p31,
	mother: p32,
};

hello3(p33);
