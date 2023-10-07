const helloArray = <A>(text: A[]): A => {
	return text[0];
};

helloArray(['1', '2']);
helloArray(['3', 4]);
helloArray([
	{ title: 'title', number: 1 },
	{ title: 2, number: '2' },
]);

const helloTuple = <T, K>(props: [T, K]): T => {
	return props[0];
};

helloTuple(['1', '2']);
helloTuple([1, '2']);
