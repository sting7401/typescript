console.log(Symbol('foo') === Symbol('foo'));

const sym = Symbol();

let obj = {
	[sym]: 'value',
};

obj[sym];
