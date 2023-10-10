const add = (
	n1: number,
	n2: number,
	result: boolean,
	phrase: string,
): number => {
	// if (typeof n1 !== 'number' && typeof n2 !== 'number') {
	// 	throw new Error('Invalid');
	// }

	const resultNumber = n1 + n2;

	if (result) {
		console.log(`${phrase} : ${resultNumber}`);
	}

	return n1 + n2;
};

const number1: number = 5;
const number2: number = 2;
const printResult: boolean = true;
const resultPhrase: string = 'result is';

const result = add(number1, number2, printResult, resultPhrase);
console.log(result);
