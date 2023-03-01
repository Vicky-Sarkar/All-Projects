// Write code related to Home page here let form = document.getElementById("form");
form.addEventListener("submit", () => {
	displayData()
})


let data = JSON.parse(localStorage.getItem("task-list")) || []
function displayData() {
	event.preventDefault()

	let objData = {
		name: form.name.value,
		description:form.desc.value,
		start:form.start.value,
		end:form.end.value,
		priority:form.priority.value
	}

	data.push(objData)
	localStorage.setItem("task-list",JSON.stringify(data))
	
}