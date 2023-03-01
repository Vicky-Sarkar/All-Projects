import navbar from "../component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let from = document.getElementById("from");

let ids = document.getElementById("uniqueId");

let desig = document.getElementById("desig")

console.log(desig)

let name = document.getElementById("name");
let age = document.getElementById("age");
let employee = document.getElementById("employee");
let students = document.getElementById("student");
let p0_varint = document.getElementById("p0");
let p1_varint = document.getElementById("p1");
let select = document.getElementById("select");
let p2_varint = document.getElementById("p2");
let p3_varint = document.getElementById("p3");

let regData = JSON.parse(localStorage.getItem("restration")) || []


from.addEventListener("submit", (event) => {
	storeData(event)

})





function storeData(event) {


	event.preventDefault();
	let obj = {
		ids: ids.value,
		name: name.value,
		age: age.value,
		employee: employee.value,
		student: students.value,
		select: select.value,
		p0_varint: p0_varint.value,
		p1_varint: p1_varint.value,
		p2_varint: p2_varint.value,
		p3_varint: p3_varint.value,

	}

	let flag1 = false;
	if (obj.name == "") {
		document.getElementById("namealert").innerHTML = "enter your name"
	}

	else if (obj.name.length <= 4) {
		flag1 = true

		document.getElementById("namealert").innerHTML = "name Should be at list 4 characters"

	}

	let flag2 = false;

	if (obj.age == "") {
		document.getElementById("agealert").innerHTML = "enter the age"
	}

	else if (+obj.age <= 14) {

		document.getElementById("agealert").innerHTML = "Age Should be greater equal to 14"

	} else if (+obj.age >= 40) {
		flag2 = true
		document.getElementById("agealert").innerHTML = "Age Should be less then equal to 40"
	}



	let flag3 = false;
	for (let i = 0; i < regData.length; i++) {
		if (regData[i].ids === obj.ids) {
			flag3 = true
		}
	}

	if (obj.ids == "") {
		document.getElementById("idalert").innerHTML = "enter the id"
	}





	if (flag3 == true) {
		document.getElementById("idalert").innerHTML = "Id Already Exiest Please Enter Uniqe Id"

	} else {
		regData.push(obj)
		localStorage.setItem("restration", JSON.stringify(regData))
	}
	console.log(regData)
}