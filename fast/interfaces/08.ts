interface Person8 {
	name: string;
	age?: number;
	readonly gender: string;
}

const p81: Person8 = {
	name: 'John',
	gender: 'male',
};

// readonly 시 수정 불가
//p81.gender = 'male';
