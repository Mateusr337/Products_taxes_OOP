export default class Order {
	constructor() {
		this.items = [];
	}

	addItem(newItem) {
		this.items = [...this.items, newItem];
	}

	getTotal(tax = 0) {
		console.log(tax);
		return this.items.reduce((a, b) => a + (b.price || 0), 0);
	}

	getTaxes() {
		let tax = 0;
		let sum = 0;

		this.items.map((item) => {
			if (item.category === "Beer") tax = 0.2;
			if (item.category === "Cigar") tax = 0.25;
			if (item.category === "Eletronics") tax = 0.3;
			if (item.category === "Water") tax = 0;

			sum += item.price * tax;
		});

		return sum;
	}
}
