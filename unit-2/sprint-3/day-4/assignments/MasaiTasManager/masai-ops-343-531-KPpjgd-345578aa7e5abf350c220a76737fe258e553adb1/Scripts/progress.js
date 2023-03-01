// Write code for the Progress page here 
let done = JSON.parse(localStorage.getItem("done-list"))||[];
let priorityData = JSON.parse(localStorage.getItem("priority-list"))||[];
let tbody = document.getElementById("progressTbody");

display()
function display() {
	tbody.innerHTML = "";
	
	priorityData.forEach(function (elem, index) {
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
		let add = document.createElement("td");
		add.innerText = "add";
		add.addEventListener("click", () => {
			done.push(elem);
			localStorage.setItem("done-list",JSON.stringify(done));
			 priorityData.splice(index, 1);
			localStorage.setItem("priority-list", JSON.stringify(priorityData));
			display()
		})

		tr.append(name, description, start, end, priority, add);
		tbody.append(tr);


	})

}
