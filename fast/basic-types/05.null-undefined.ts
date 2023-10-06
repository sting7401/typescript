// 다른 모든 타입의 서브 타입
// 할당하려면 union 타입 설정

const myName: string = 'null';

console.log(typeof myName);

const v: void = undefined;

console.log(typeof v);

const union: string | null = null;

console.log(typeof union); // object
