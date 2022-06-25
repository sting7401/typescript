class Person<T, K> {
	// T : 클래스 안에서 변수 처럼 사용
	private _genericName: T;

	private _genericAge: K;

	constructor(genericName: T, genericAge: K) {
		this._genericName = genericName;
		this._genericAge = genericAge;
	}
}

new Person('이름', 129);
new Person<string, number>('문자열만', 20);
