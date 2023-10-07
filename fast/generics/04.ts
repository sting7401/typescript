type HelloFucnGeneric1 = <T>(props: T) => T;

const helloFunc1: HelloFucnGeneric1 = <T>(props: T): T => {
	return props;
};

interface HelloFucnGeneric2 {
	<T>(props: T): T;
}

const helloFunc2: HelloFucnGeneric2 = <T>(props: T): T => {
	return props;
};
