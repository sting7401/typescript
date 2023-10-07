const helloBasic = <T, U>(message: T, comment: U): T => {
	return message;
};

helloBasic<string, number>('string', 10);

helloBasic(12, 10);
