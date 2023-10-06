"use strict";
// retrun에 사용됨
// 어떤 것도 할당 불가능
// any 도 안됨
const error = (message) => {
    throw new Error(message);
};
const fail = () => {
    return error('실패');
};
if (typeof a !== 'string') {
    a;
}
