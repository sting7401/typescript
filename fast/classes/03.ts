interface IPersonStatic {
	hello(): void;
	change(): void;
}

class PersonStatic implements IPersonStatic {
	private static CITY = 'seoul';

	hello() {
		console.log(`${PersonStatic.CITY}`);
	}

	change() {
		PersonStatic.CITY = 'newCITY';
	}
}

const pStatic1 = new PersonStatic();
const pStatic2 = new PersonStatic();

pStatic2.hello();
pStatic1.change();
pStatic2.hello();

// PersonStatic.hello();
