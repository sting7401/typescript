"use strict";
// 어플리케이션이 실행 되는 중간 클래스로부터 단 하나의 오브젝트를 만들어서 패턴 사용
class ClassName {
    constructor() { } // const a9 = new ClassName() 외부 사용 안되게 설정
    static getInstance() {
        // 매개체로 이용
        // ClassName 으로 부터 만든 object가 있으면 그걸 리턴
        // 없으면 만들어서 리턴
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }
}
ClassName.instance = null;
const a9 = ClassName.getInstance();
const b9 = ClassName.getInstance();
console.log(a9 === b9); // true
