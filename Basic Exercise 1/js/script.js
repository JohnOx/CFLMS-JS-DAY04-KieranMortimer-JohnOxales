class Person {
	firstName = "";
	lastName = "";
	age = null;

	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	getName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

function colourToggle(string, element) {
	if (string.length > 5) {
		element.style.color = "#ff0000";
	} else {
		element.style.color = "#00ff00";
	}
}

function buttonPress() {
	let p = new Person(
		document.getElementById("firstName").value,
		document.getElementById("lastName").value,
		document.getElementById("age").value
	);

	console.log(p.getName());

	document.getElementById("firstNameOutput").innerText = p.firstName;
	document.getElementById("lastNameOutput").innerText = p.lastName;
	document.getElementById("age").innerText = p.age;

	colourToggle(p.firstName, document.getElementById("firstNameOutput"));
	colourToggle(p.lastName, document.getElementById("lastNameOutput"));

	console.log("button pressed");
}

document.getElementById("goBtn").addEventListener("click", buttonPress, false);
