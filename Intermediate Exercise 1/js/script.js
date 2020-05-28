class Hotel {
	hotelName = "";
	noNights = "";
	address = "";
	image = "";

	constructor(name, address, image) {
		this.hotelName = name;
		this.noNights = Math.random() * 10;
		this.address = address;
		this.image = image;
	}

	showAvailability(nights) {
		if (this.noNights > nights) {
			return "I'll reserve";
		} else {
			return `Sorry, no available nights for ${this.hotelName}`;
		}
	}
}

let hotelList = [
	new Hotel("Hilton", "123 Fake st.", "assets/hilton.jpg"),
	new Hotel("Mariot", "257 notreal blv.", "assets/mariot.jpg"),
	new Hotel("Ritz", "654 false ln.", "assets/ritz.jpg"),
];

console.log(hotelList[0]);
console.log(hotelList[1]);
console.log(hotelList[2]);
