import navbar from "../component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let filterbyid = document.getElementById("vaccineFilter")
let sortbyis = document.getElementById("vaccineSort")


let regData = JSON.parse(localStorage.getItem("restration")) || []

//let fetchData = []
selectFilter.addEventListener("change", () => {
	let filterData = regData.filter((el) => {
		if (el.select === filterbyid.value) {
			return true;
		} else {
			return false;
		}
		DisplayData(filterData)
	})





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






			tr.append(ids, name, age, student, employee, priority)

			//document.querySelector("#body").append(tr)
			//div.append(tr)
			dashbord.append(tr)
		})
	}

