import navbar from "../component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

//console.log(navbar())


let regData = JSON.parse(localStorage.getItem("restration")) || []

DisplayData(regData)

function DisplayData(data) {

	let dashbord = document.getElementById("bodyy")
	//dashbord.innerHTML = null;
	data.forEach((elem, index) => {

		let tr = document.createElement("tr");
		tr.setAttribute("id", "tablerow")
		let ids = document.createElement("td");
		ids.setAttribute("id", "ids")

		ids.innerText = elem.ids;
		let name = document.createElement("td");
		name.setAttribute("id", "name")
		name.innerText = elem.name;
		let age = document.createElement("td");
		age.innerText = elem.age;
		let student = document.createElement("td");
		student.innerText = elem.student;

		let employee = document.createElement("td");
		employee.innerText = elem.employee;
		let priority = document.createElement("td");
		priority.innerText = elem.p0_varint;

		let select = document.createElement("td");
		select.innerText = elem.select;


		let remove = document.createElement("button");
		remove.innerText = "Delete";
		remove.style.color = "red";
		remove.style.cursor = "pointer";

		remove.addEventListener("click", function () {
			deleteFun(elem, index)
		})

		let validation = document.createElement("button")
		validation.innerText = "Vaccinate" + " "
		validation.style.color = "green"
		validation.style.cursor = "pointer"
		validation.setAttribute("id", "validation")
		validation.addEventListener("click", () => {

			//console.log()
			genarateOtp(4)

		})

		let input = document.createElement("input")

		let validationButton = document.createElement("button")
		validationButton.innerText = "Validation";
		validationButton.addEventListener("click", () => {

			otp == validationButton


		})
		tr.append(ids, name, age, student, employee, priority, select, remove, validation, input, validationButton)

		//document.querySelector("#body").append(tr)
		//div.append(tr)
		dashbord.append(tr)
	})
}

let genarateOtp = (otpLength) => {
	let otp = JSON.parse(localStorage.getItem("otpStore")) || []
	for (let i = 0; i < otpLength; i++) {
		otp.push(Math.floor(Math.random() * 10))

		localStorage.setItem("otpStore", otp)
	}
	return alert(Number(otp))
}



function deleteFun(elem, index) {
	regData.splice(index, 1);
	localStorage.setItem("restration", JSON.stringify(regData))
	DisplayData(regData)
	window.location.reload()
}