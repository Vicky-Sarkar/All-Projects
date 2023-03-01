// Write code related to Done page here

let done_list = JSON.parse(localStorage.getItem("done-list")) || [];
let tbody = document.getElementById("doneTbody");

display();
function display() {
	tbody.innerHTML = "";
	done_list.forEach(function (elem, index) {
		let tr = document.createElement("tr");
		let name = document.createElement("td");
		name.innerText = elem.name;
		let description = document.createElement("td");
		description.innerText = elem.description;
		let start = document.createElement("td");
		start.innerText = elem.start;
		let end = document.createElement("td");
		end.innerText = elem.end;
		let priority = document.createElement("td");
		priority.innerText = elem.priority;
		tr.append(name, description, start, end, priority);
		tbody.append(tr)


	})

}
