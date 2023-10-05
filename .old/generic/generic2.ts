function helloBasic<T, U>(message: T, comment: U): T {
	return message;
}

helloBasic<string, number>('문자열', 20); // string이 아니면 들어 갈수 없음
// <>를 지정 하지 않고 표현-> 추론 됨
helloBasic('값', '29');
