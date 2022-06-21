interface IPerson2 {
	name: string;
	age?: number;
}

interface IKorean extends IPerson2 {
	city: string;
}

const k: IKorean = { name: ' adfjlk', city: 'seoul', age: 20 };
