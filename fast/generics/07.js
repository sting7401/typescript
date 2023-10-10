"use strict";
const iPerson = {
    name: 'string',
    age: 10,
};
const getProp = (obj, key) => {
    return obj[key];
};
getProp(person, 'name');
const setProp = (obj, key, value) => {
    obj[key] = value;
};
setProp(person, 'name', 'string');
