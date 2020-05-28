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

	console.log(`hotel${i + 1} Displayed`);
}

document.getElementById("hotel1Btn").addEventListener(
	"click",
	function () {
		if (document.getElementById("noNights").value == "") {
			document.getElementById("hotel1Output").innerText =
				"Please enter the number of nights you wish to stay";
		} else {
			document.getElementById(
				"hotel1Output"
			).innerText = hotelList[0].showAvailability(
				document.getElementById("noNights").value
			);
		}
	},
	false
);

document.getElementById("hotel2Btn").addEventListener(
	"click",
	function () {
		if (document.getElementById("noNights").value == "") {
			document.getElementById("hotel2Output").innerText =
				"Please enter the number of nights you wish to stay";
		} else {
			document.getElementById(
				"hotel2Output"
			).innerText = hotelList[1].showAvailability(
				document.getElementById("noNights").value
			);
		}
	},
	false
);

document.getElementById("hotel3Btn").addEventListener(
	"click",
	function () {
		if (document.getElementById("noNights").value == "") {
			document.getElementById("hotel3Output").innerText =
				"Please enter the number of nights you wish to stay";
		} else {
			document.getElementById(
				"hotel3Output"
			).innerText = hotelList[2].showAvailability(
				document.getElementById("noNights").value
			);
		}
	},
	false
);
