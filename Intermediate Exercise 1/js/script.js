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
		if (this.noNights >= nights) {
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

for (i = 0; i <= hotelList.length - 1; i++) {
	let idString = `hotel${i + 1}Img`;
	document.getElementById(idString).setAttribute("src", hotelList[i].image);

	idString = `hotel${i + 1}Name`;
	document.getElementById(idString).innerText = hotelList[i].hotelName;

	idString = `hotel${i + 1}Btn`;
	document.getElementById(idString).setAttribute("value", "Book Hotel");
}

function buttonPress(cardNo) {
	let outputID = `hotel${cardNo}Output`;

	document.getElementById(outputID).innerText = hotelList[
		i - 1
	].showAvailability(5);
}

for (i = 1; i <= hotelList.length - 1; i++) {
	let btnString = `hotel${i}Btn`;

	document
		.getElementById(btnString)
		.addEventListener("click", buttonPress(i), false);
}
