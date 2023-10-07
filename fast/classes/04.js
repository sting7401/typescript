"use strict";
class ClassName {
    static getClassName() {
        // className으로 만든 object 가 있으면 리턴
        // 없으면 만들어서 리턴
        //const { instance } = ClassName; // spread 시 type false
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }
    constructor() { }
}
ClassName.instance = null;
// singleton
// const a = new ClassName();
// const b = new ClassName();
const a = ClassName.getClassName();
const b = ClassName.getClassName();
console.log(a === b);
