import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormartter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

// docOne = new Invoice("yoshi", "web work", 550);
// docTwo = new Payment("mario", "plumbing work", 350);

// //array to hold invoices and payments
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

//interfaces
interface IsPerson {
	name: string; //property that is a string
	age: number; //property that is a number
	speak(a: string): void; //method that returns nothing
	spend(a: number): number; //method that returns a number
	skills(...skills: string[]): void; //method that takes a rest parameter and returns nothing
}

const me: IsPerson = {
	name: "Fernando",
	age: 43,
	speak(myVoice: string): void {
		console.log(myVoice);
	},
	spend(amountValue: number): number {
		console.log("I spent", amountValue);
		return amountValue;
	},
	skills(...skills: string[]): void {
		console.log("My skills are:", skills.join(", "));
	},
};

const greetPerson = (person: IsPerson) => {
	console.log("Hello", person.name);
};

greetPerson(me);

console.log(me);

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);

//only allow Invoice objects in the array
let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
	console.log(inv.client, inv.amount, inv.format());
});

const anchor = document.querySelector("a");

console.log(anchor?.href);

// const form = document.querySelector("form")!;

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
	e.preventDefault();

	let doc: HasFormatter;
	if (type.value === "invoice") {
		doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
	} else {
		doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
	}

	console.log(doc);
});
