// you can write your js code here


let tdody = document.getElementById("bookmarkPage");
let bookMarkList = JSON.parse(localStorage.getItem("bookmark-list")) || [];

displayData()
function displayData() {
	tdody.innerHTML = "";
	bookMarkList.forEach((elem, index) => {
		let tr = document.createElement("tr");
		let name = document.createElement("td");
		name.innerText = elem.name;
		let author = document.createElement("td");
		author.innerText = elem.author;
		let description = document.createElement("td");
		description.innerText = elem.description;
		let date = document.createElement("td");
		date.innerText = elem.date;
		let category = document.createElement("td");
		category.innerText = elem.category;
		let price = document.createElement("td");
		price.innerText = elem.price;
		tr.append(name, author, description, date, category, price);
		tdody.append(tr);
	})

}