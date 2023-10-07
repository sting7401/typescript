interface Person2 {
	name: string;
	age?: number;
}

const hello2 = (person: Person2): void => {
	console.log(`${person.name}:`);
};

hello2({ name: 'John', age: 29 });
hello2({ name: 'John2' });
