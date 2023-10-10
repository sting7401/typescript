interface IPerson {
	name: string;
	age: number;
}

const iPerson = {
	name: 'string',
	age: 10,
};

const getProp = <T, K extends keyof T>(obj: T, key: K): T[K] => {
	return obj[key];
};

getProp(person, 'name');

const setProp = <T, K extends keyof T>(obj: T, key: K, value: T[K]): void => {
	obj[key] = value;
};

setProp(person, 'name', 'string');
