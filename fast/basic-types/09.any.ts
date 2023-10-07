// any 지양

const returnAny = (props: string | number): any => {
	console.log(props);
};

const any1 = returnAny('값');

console.log(typeof any1);

// const looselyTyped: any = {};

// const d = looselyTyped.a.b.c.d;

// const leakingAny = (object: { numebr: string }) => {
// 	const a: number = object.number;
// 	const b = a + 1;

// 	return b;
// };

// const c = leakingAny({ number: 0 });

// console.log(typeof c);
