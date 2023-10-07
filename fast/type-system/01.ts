const f5 = (a: number) => {
	if (a > 0) {
		return a * 20;
	}
};

// 객체 값 파라미터
const f6 = (a: { name: string; age: number }): string => {
	return `${a}`;
};

// interface, type, class
// 같은 구조를 가진 type 정의 필요
