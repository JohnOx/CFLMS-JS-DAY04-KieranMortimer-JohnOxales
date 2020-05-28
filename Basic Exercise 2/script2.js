class Person {
	firstName = "";
    lastName = "";
    profession ="";
	age = null;

	constructor(firstName, lastName, profession, age) {
		this.firstName = firstName;
        this.lastName = lastName;
        this.profession = profession;
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

function colourProfession(string) {
    if (string == "IT") {
        document.getElementById("professionOutput").style.color ="#ff00ff";
    } else {
        document.getElementById("professionOutput").style.color ="#ffff00";
    }
}

function buttonPress() {
	let p = new Person(
		document.getElementById("firstName").value,
        document.getElementById("lastName").value,
        document.getElementById("profession").value,
		document.getElementById("age").value
	);

	console.log(p.getName());

	document.getElementById("firstNameOutput").innerText = p.firstName;
    document.getElementById("lastNameOutput").innerText = p.lastName;
    document.getElementById("professionOutput").innerText = p.profession;
	document.getElementById("ageOutput").innerText = p.age;

	colourToggle(p.firstName, document.getElementById("firstNameOutput"));
	colourToggle(p.lastName, document.getElementById("lastNameOutput"));
    colourProfession(p.profession);
	console.log("button pressed");
}

document.getElementById("goBtn").addEventListener("click", buttonPress, false);
