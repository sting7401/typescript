//기존 함수 타입에 generic 부분 추가
type helloFuncGeneric1 = <T>(message: T) => T;

const helleFunc1: helloFuncGeneric1 = <T>(message: T): T => {
	return message;
};

interface helleFuncGeneric2 {
	<T>(message: T): T;
}
const helleFunc2: helleFuncGeneric2 = <T>(message: T): T => {
	return message;
};
