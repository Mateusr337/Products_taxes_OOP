import Order from "./Order";

export default abstract class Item {
	public description: String;
	public price: number;

	constructor(description: string, price: number) {
		this.description = description;
		this.price = price;
	}
}
