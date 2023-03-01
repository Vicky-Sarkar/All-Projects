// Write code related to Calender page here
let InputData = JSON.parse(localStorage.getItem("meets")) || []



DisplayData(InputData)
//calender

// name: name.value,
// description: description.value,
// month: month.value,
// week: week.value,
// meettype: meettype.value

function DisplayData(data) {
	//console.log(data)

	let calender = document.querySelector(".calender")
	let week1 = document.getElementById("Week-1")
	let week2 = document.getElementById("Week-2")
	let week3 = document.getElementById("Week-3")
	let week4 = document.getElementById("Week-4")





	data.forEach((el, index) => {

		let card = document.createElement("div")
		let name = document.createElement("p")
		name.innerText = el.name
		let month = document.createElement("p")
		month.innerText = el.month
		let week = document.createElement("p")
		week.innerText = el.week;

		let select = document.createElement("select")

		select.innerHTML = `
		
			<div>
				<p>name</p>
				<p>desc</p>
				<p>meetType</p>
				<select id="sel">
					<option value="${week1}">Week-1</option>
					<option value="${week2}">Week-2</option>
					<option value="${week3}">Week-3</option>
					<option value="${week4}">Week-4</option>
				</select>
			</div>
		`

		let disweek = document.createElement("p")
		disweek.innerText = select.value;
		//select.innerText=

		card.append(name, month, week, select, disweek)
		calender.append(card)

	})


}


