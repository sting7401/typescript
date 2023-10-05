interface IPerson {
	name: string;
	age: number;
}

const person: IPerson = {
	name: '이름',
	age: 20,
};

type Keys = keyof IPerson;

const keys: Keys = 'age';

// IPerson[keyof IPerson] => IPerson['name' | 'age'] => IPerson['name'] | IPerson['age'] => string | number

// function getProp(obj: IPerson, key: keyof IPerson): IPerson[keyof IPerson] {
// 	return obj[key];
// }

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key];
}

getProp(person, 'age');

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
	obj[key] = value;
}

setProp(person, 'name', 'ㅁ이름');
