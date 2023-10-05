// function
type EatType = (food: string) => void;

interface iEat {
	(food: string): void;
}

// array
type PersonList = string[];

interface IPersonList {
	[index: number]: string;
}

//intersection
interface ErrorHandling {
	success: boolean;
	error?: { message: string };
}

interface ArtistsData {
	artists: { name: string }[];
}

type ArtistsResponseType = ArtistsData & ErrorHandling;

interface IArtistsResponse extends ArtistsData, ErrorHandling {}

let art: ArtistsResponseType;
let iar: IArtistsResponse;

// union type
interface Bird {
	fly(): void;
	layEggs(): void;
}

interface Fish {
	swim(): void;
	layEggs(): void;
}

type petType = Fish | Bird;

// Declaration Merging - interface
interface MergingInterface {
	a: string;
}

interface MergingInterface {
	b: string;
}

let mi: MergingInterface;
