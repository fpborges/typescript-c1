/**
 * Represents an invoice with client, details, and amount.
 * Implements HasFormatter to provide a formatted string for display.
 */
import { HasFormatter } from "../interfaces/HasFormartter.js";

export class Invoice implements HasFormatter {
	constructor(
		readonly client: string,
		private details: string,
		public amount: number
	) {}
	format() {
		return `${this.client} owes $${this.amount} for ${this.details}`;
	}
}
