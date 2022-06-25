"use strict";
function helloArray(message) {
    return message[0];
}
helloArray(['1', '2']); // string 타입으로 추론됨
helloArray([1, 2]); // number 타입으로 추론됨
helloArray([1, '3']); // union 타입으로 추론됨
function helloTuple(message) {
    return message[0];
}
helloTuple(['1', '2']); // string, string 타입으로 추론됨
helloTuple([1, 2]); // number, number 타입으로 추론됨
helloTuple([1, '3']); // number, string 타입으로 추론됨
