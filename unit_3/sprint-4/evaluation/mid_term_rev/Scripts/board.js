// Write code related to Board page here

let todoData = JSON.parse(localStorage.getItem("todos")) || []
//console.log(todoData)



desplayData(todoData)
function desplayData(data) {
	let todo = document.getElementById("todo")
	let progress = document.getElementById("progress")
	let stuck = document.getElementById("stuck ")
	let completed = document.getElementById("completed")



	let container = document.getElementById("board")
	//container.innerHTML = ""
	data.forEach((el, i) => {

		let name = document.createElement("h3")
		name.innerText = el.name

		let description = document.createElement("p")
		description.innerText = el.description

		let addingDate = document.createElement("p")
		addingDate.innerText = el.addingDate

		let deadlineDate = document.createElement("p")
		deadlineDate.innerText = el.deadlineDate

		let Priority = document.createElement("p")
		Priority.innerText = el.Priority

		let select = document.createElement("select")
		select.innerHTML = `
          <option value="todo">todo</option>
          <option value=" progress">progress</option>
          <option value="stuck">stuck </option>
          <option value="completed">completed</option>
             `

		let button = document.createElement("button")

		button.innerText = "Delete"

		button.addEventListener("click", () => {
			// todoData = todoData.filter((el, index) => {
			// 	return i !== index
			// })
			deleteItem(todoData)
		})


		todo.append(name, description, addingDate, deadlineDate, Priority, select, button)
		container.append(todo)
	})
}



function deleteItem(todoData) {
	let newData = JSON.parse(localStorage.getItem("status")) || []
	todoData.splice(1, 0)
	newData.push(todoData)
	desplayData(todoData)

	localStorage.setItem("status", JSON.stringify(newData))
}


console.log(newData)