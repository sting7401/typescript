class Person8 {
	public static CITY = 'seoul'; // static 으로 외부 지정

	private static CITY2 = 'seoul2'; // 내부만 가능

	public static helloE() {
		// 외부 가능
		console.log('시맨틱', Person8.CITY2);
	}

	public hello() {
		// 외부 가능
		console.log('시맨틱', Person8.CITY2);
	}

	public change() {
		Person8.CITY2 = 'LA';
	}
}

Person8.CITY;
Person8.helloE();

const p8 = new Person8();

p8.hello();

const p88 = new Person8();
p88.hello();
p8.change();
p88.hello();
