"use strict";
// typescript 3.0 버전부타 사용
// any로 인한 대응을 위함 type-safe 타입
// 모르는 타입도 묘사 가능해야 함
// 동적 컨텐츠 (api)
// 컴파일러가 추론 할수 있게끔 타입의 유형을 좁히거나 정해주어야 함
const aNumber = maybe;
if (maybe === true) {
    // 타입 가드
    const aBoolean = maybe;
    // const aString: string = maybe; // error : 현재 boolean은 string으로 변환되지 않음
}
if (typeof maybe === 'string') {
    // 타입가드
    // if 문 안에 요소는 string 요소로 작성됨
    const aString = maybe;
    // const aBoolean: boolean = maybe; // error
}
