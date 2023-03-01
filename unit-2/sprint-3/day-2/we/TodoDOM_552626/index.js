
let myForm = document.getElementById("form");

let tbody=document.querySelector("tbody");
var favouriteArr = JSON.parse(localStorage.getItem("favouriteList")) || [];
let data = JSON.parse(localStorage.getItem("storeData"))||[]



myForm.addEventListener("submit", (event) => {

	CreateDOM()
let fromData={
	task: myForm.task.value,
	priority: myForm.priority.value
};
	data.push(fromData);
	localStorage.setItem("storeData",JSON.stringify(data));
	//window.location.reload();
})


function CreateDOM() {
	event.preventDefault();	
	tbody.innerHTML = null;
	data.forEach((element, index) => {
		let tr = document.createElement("tr");
		let td1 = document.createElement("td");
		let td2 = document.createElement("td");
		let td3 = document.createElement("td");

		if (element.priority == "High") {
			td2.style.backgroundColor = "red"
		} else {
			td2.style.backgroundColor = "green"
		}
		td1.innerText = element.task;
		td2.innerText = element.priority;
		td3.innerText = "Favourite";
		td3.style.cursor="pointer"
		td3.style.backgroundColor="green"
		td3.addEventListener("click", () => {
			//console.log(element)
			favourite(element)
		})
		tr.append(td1, td2, td3);
		tbody.append(tr);
		
	})
	
}


function favourite(element) {
	favouriteArr.push(element);
	localStorage.setItem("favouriteList", JSON.stringify(favouriteArr));
	console.log(element)
}