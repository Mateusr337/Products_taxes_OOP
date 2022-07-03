import Order from "./Order";

export default abstract class Item {
	description: String;
	price: number;

	constructor(description, price) {
		this.description = description;
		this.price = price;
	}
}
