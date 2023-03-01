// Write code related to Home page here



let todoData = JSON.parse(localStorage.getItem("todos")) || []


let From = document.getElementById("From");

From.addEventListener("submit", () => {
	StoreData()

})

let names = document.getElementById("name")
let description = document.getElementById("desc")
let addingDate = document.getElementById("addDate")
let deadlineDate = document.getElementById("deadline")
let Priority = document.getElementById("priority")




function StoreData() {
	event.preventDefault()
	console.log("hi")
	let obj = {
		name: names.value,
		description: description.value,
		addingDate: addingDate.value,
		deadlineDate: deadlineDate.value,
		Priority: Priority.value
	}
	todoData.push(obj)
	console.log(obj)
	localStorage.setItem("todos", JSON.stringify(todoData))
}



