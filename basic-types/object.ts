const person1 = { name: 'n', age: 18 };

const person2 = Object.create({ name: 'y', age: 19 });

// non-primitive type primotive 타입이 아닌것을 사용하고 싶을때

// non-primitive type : ! number, string, boolean, bigint, symbol, null or undefined

let obj: object = {};

obj = { name: 'mark' };

obj = [{ name: '12f' }];

// error
// obj = 29;
// obj = 'mark';
// obj = true;
// obj = Symbol('mark');
// obj = 100n;
// obj = null;
// obh = undefined;

declare function create(o: object | null): void;
create({ name: 'mark' });
create(null);

// error
// create(null);
// create(undefined);
// create('string');
// Object.create(100);
