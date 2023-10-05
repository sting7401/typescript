abstract class AbstractPerson {
	protected _name: string = 'ams';

	abstract setName(name: string): void; // abstract 특정 메서드 작성 , {} 구현 하지 않음
}

// new 안됨
//abstract 키워드를 사용하면 abstract 함수를 사용해야 함

class Person11 extends AbstractPerson {
	setName(name: string): void {
		this._name = name;
	}
}

const p11 = new Person11();
p11.setName();
