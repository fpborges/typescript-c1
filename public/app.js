import { Invoice } from "./classes/Invoice.js";
const me = {
    name: "Fernando",
    age: 43,
    speak(myVoice) {
        console.log(myVoice);
    },
    spend(amountValue) {
        console.log("I spent", amountValue);
        return amountValue;
    },
    skills(...skills) {
        console.log("My skills are:", skills.join(", "));
    },
};
const greetPerson = (person) => {
    console.log("Hello", person.name);
};
greetPerson(me);
console.log(me);
const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);
//only allow Invoice objects in the array
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
const anchor = document.querySelector("a");
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
// const form = document.querySelector("form")!;
const form = document.querySelector(".new-item-form");
console.log(form.children);
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
