// retrun에 사용됨
// 어떤 것도 할당 불가능
// any 도 안됨

const error = (message: string): never => {
	throw new Error(message);
};

const fail = () => {
	return error('실패');
};

// const infiniteLoop = (): never => {
// 	//while (true) {}
// };

declare const a: string | number;

if (typeof a !== 'string') {
	a;
}
