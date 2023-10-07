"use strict";
const helloArray = (text) => {
    return text[0];
};
helloArray(['1', '2']);
helloArray(['3', 4]);
helloArray([
    { title: 'title', number: 1 },
    { title: 2, number: '2' },
]);
const helloTuple = (props) => {
    return props[0];
};
helloTuple(['1', '2']);
helloTuple([1, '2']);
