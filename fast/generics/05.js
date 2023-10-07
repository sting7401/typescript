"use strict";
class PersonGenericClass {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
}
new PersonGenericClass('string', 10);
new PersonGenericClass(0, 10);
new PersonGenericClass([{ title: 'string' }], [[{ title: 0 }]]);
new PersonGenericClass('string', 100);
new PersonGenericClass(0, 100);
new PersonGenericClass([{ title: 'string' }], [{ title: true }]);
