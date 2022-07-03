import Order from "./Order";

export default abstract class Item {
	description: String;
	price: number;

	constructor(description: string, price: number) {
		this.description = description;
		this.price = price;
	}
}
