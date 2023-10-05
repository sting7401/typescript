// 타입 별칭
// interface 랑 비슷해 보임
// primitive, union , tuple , function
// 직접 타입을 다른 이름으로 지정
// 만들어진 타입의 refer를 사용하여 직접 타입을 지정

type StringType = string | number;

const stt = 'string';

let myStt: StringType = stt;
myStt = 1;

type StringOrNumber = string | number;

let textNumber: StringOrNumber = 0;
textNumber = 'string';

type PersonTuple = [string, number];
let tupleText: PersonTuple = ['string', 1];

type EatType = (food: string) => string;

// 타입의 타입으로써 목적, 조건이 명확할때 interface
// 대상을 가르키고, 별명으로써만 존재할떄 type alias 사용
