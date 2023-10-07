interface IPerson2 {
	name: string;
	age?: number;
}

interface IKorean extends IPerson2 {
	city: string;
}

const song: IKorean = {
	name: 'Korean',
	city: 'seoul',
};
