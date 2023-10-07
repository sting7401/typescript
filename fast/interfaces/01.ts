interface Person1 {
	name: string;
	age: number;
}

const hello1 = (person: Person1): void => {
	return console.log(person);
};

const p1: Person1 = {
	name: 'John',
	age: 30,
};

hello1(p1);
