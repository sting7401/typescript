// 항상 타입, 순서, 길이도 맞아야함

let x: [string, number];

x = ['hello', 10];

// x = [10, 'hello']; // error

// x[3] = 'world'; // error : Type '"world"' is not assignable to type 'undefined'

// x[2] // error : Tuple type '[string, number]' of length '2' has no element at index '2'

const person: [string, number] = ['name', 20];
const [first, second] = person; // ok

//const [first, second, third] = person; // error : Tuple type '[string, number]' of length '2' has no element at index '2'
