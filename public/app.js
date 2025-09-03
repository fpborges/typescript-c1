import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/payment.js";
import { ListTemplate } from "./classes/ListTemplates.js";
let docOne;
let docTwo;
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
//list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
//event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value.toUpperCase(), "end");
});
