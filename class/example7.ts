// class => object
// {fr: 'male', zty :'male'}
// {fr2: 'male', zty2 :'female'}

class Sex {
	// fr: string = 'male';
	// [index: string]: string;
	[index: string]: 'male' | 'female'; // 어떤 값에도 'male' | 'female'둘중 하나 지정이 되어야함

	mark: 'male' = 'male';
}

const a = new Sex();

a.fr = 'female';
a.zty = 'female';

const b = new Sex();

a.fr2 = 'female';
a.zty2 = 'female';

// 프로퍼티가 동적으로 변형 될 때 이용
