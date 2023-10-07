"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Parent_name, _Child_name;
class Parent {
    constructor(name, _age) {
        this._age = _age;
        _Parent_name.set(this, '');
        __classPrivateFieldSet(this, _Parent_name, name, "f");
    }
    print() {
        console.log(`Parent ${__classPrivateFieldGet(this, _Parent_name, "f")} ${this._age}`);
    }
    printName() {
        console.log(`${__classPrivateFieldGet(this, _Parent_name, "f")}`);
    }
}
_Parent_name = new WeakMap();
const p = new Parent('name', 29);
p.print();
class Child extends Parent {
    constructor(age) {
        super('', age);
        _Child_name.set(this, '');
        this.gender = 'male';
        __classPrivateFieldSet(this, _Child_name, 'ddd', "f");
        this.printName();
    }
}
_Child_name = new WeakMap();
const child = new Child(4);
child.gender = 'male2';
child. = 'son';
child.print();
