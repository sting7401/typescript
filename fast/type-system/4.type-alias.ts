type MyStringType = string;

const str = '';

let myStr: MyStringType = 'hi';

myStr = str;

const person: string | number = 0;

type StringOrNumber = string | number;

const anotherPerson: StringOrNumber = 0;
// anotherPerson = str;
console.log(typeof anotherPerson);

// aliasing tuple
//const persons: [string, number] = ['', 0];

type PersonsTuple = [string, number];

const anotherPersons: PersonsTuple = ['string', 0];
console.log('🚀 ~ file: 4.type-alias.ts:23 ~ anotherPersons:', anotherPersons);

// aliasing function

type EatType = (food: string) => void;

const eatFucntion: EatType = (props) => {
	return console.log(props);
};
