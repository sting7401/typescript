// 서브 타입은 상위 타입을 상속 할수 없다.
// 같거나 서브타입인 경우, 할당이 가능 - 공변

// primitive types
const sub7: string = '';
const sup7: string | number = sub7;
console.log('🚀 ~ file: 03.type-compatibillity.ts:7 ~ sup7:', sup7);

// object types - 프로퍼티가 같거나 서브 타입
const sub8: { a: string; b: number } = { a: 'string', b: 0 };
const sup8: { a: string | number; b: number } = sub8;
console.log('🚀 ~ file: 03.type-compatibillity.ts:12 ~ sup8:', sup8);

// array - object와 마찬가지
const sub9: Array<{ a: string; b: number }> = [{ a: '', b: 0 }];
const sup9: Array<{ a: string | number; b: number }> = sub9;
console.log('🚀 ~ file: 03.type-compatibillity.ts:16 ~ sup9:', sup9);

class Person {}

class Dev extends Person {}
class subDev extends Dev {}

function tell(f: (d: Dev) => Dev) {}
