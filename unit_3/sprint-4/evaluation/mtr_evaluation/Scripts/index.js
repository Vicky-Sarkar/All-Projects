// Write code related to Home page here

// Name(Input - Type - text)
// Description(Textarea)
// Month(Select)
// Week(Select)
// MeetType(Select)


let Form = document.getElementById("Form")

let data = JSON.parse(localStorage.getItem("meets")) || []
console.log(data)
Form.addEventListener("submit", () => {
	event.preventDefault()

	let name = document.getElementById("name").value
	let description = document.getElementById("desc").value
	let month = document.getElementById("month").value
	let week = document.getElementById("week").value

	let meettype = document.getElementById("meetType").value



	let obj = {
		name: name,
		description: description,
		month: month,
		week: week,
		meettype: meettype
	}
	data.push(obj)

	localStorage.setItem("meets", JSON.stringify(data))
})


function StoreData() {

}






//