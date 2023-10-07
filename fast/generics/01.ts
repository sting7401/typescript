// interface typeGenerics {
//     <T>:<T> => {}
// }

const helloString = (message: string): string => {
	return message;
};

const helloNumber = (message: number): number => {
	return message;
};

// function generateType<T>(message:T) : T {
//     return message;
// }

const generateType = <Type>(message: Type): Type => {
	console.log(typeof message);
	return message;
};

console.log(generateType('hello'));
console.log(generateType('hello').length);
console.log(generateType(0));
console.log(generateType(true));
console.log(generateType({ type: 'hello' }));
