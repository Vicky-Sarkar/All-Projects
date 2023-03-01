// you can write your js code here


let buyList = JSON.parse(localStorage.getItem("buy-list")) || [];
let bookMarkList = JSON.parse(localStorage.getItem("bookmark-list")) || [];
let userData = JSON.parse(localStorage.getItem("book-list")) || [];
let tdody = document.getElementById("dashbord");
let total_book = document.getElementById("book-count");
let dofilter = document.getElementById("filter");
dofilter.addEventListener("change",filterBy)
 function filterBy(){
	 userData = userData = JSON.parse(localStorage.getItem("book-list")) 
     let value= dofilter.value;
	 userData = JSON.parse(localStorage.getItem("book-list")) 
	 if(value =="Fiction"){

	 userData.filter((elem) => elem.category == "Fiction")
     userData = JSON.parse(localStorage.getItem("book-list")) 
		 displayData()
	 } else if (value == "Self Help") {
		 userData.filter((elem) => elem.category == "Self Help")
	userData = JSON.parse(localStorage.getItem("book-list"))
		 displayData()
	 } else if (value == "Finance") {

		 userData.filter((elem) => elem.category == "Finance")
     userData = JSON.parse(localStorage.getItem("book-list"))
		 displayData()

	 }else{
		 userData = JSON.parse(localStorage.getItem("book-list"))
		 displayData()
		}
	}








displayData()

function displayData(){
	total_book.innerText = userData.length;
	tdody.innerHTML="";
	userData.forEach((elem,index)=>{
let tr=document.createElement("tr")
	    let	name = document.createElement("td");
		name.innerText=elem.name;
		let author= document.createElement("td");
		author.innerText = elem.author;
		let description= document.createElement("td");
		description.innerText =elem.description;
		let date = document.createElement("td");
		date.innerText = elem.date;
		let category = document.createElement("td");
		category.innerText = elem.category;
		let price = document.createElement("td");
		price.innerText = elem.price;
		let buy = document.createElement("button");
		buy.innerText="Buy";
		buy.addEventListener("click",()=>{
			buyList.push(elem)
			localStorage.setItem("buy-list", JSON.stringify(buyList));
			userData.splice(index,1);
			localStorage.setItem("book-list", JSON.stringify(userData))
			displayData()
		})


		buy.style.backgroundColor="green";
		let bookmark = document.createElement("button");
		bookmark.innerText = "Add";
		bookmark.style.backgroundColor = "red";

		bookmark.addEventListener("click", () => {
			bookMarkList.push(elem)
			localStorage.setItem("bookmark-list", JSON.stringify(bookMarkList));
			userData.splice(index, 1);
			localStorage.setItem("book-list", JSON.stringify(userData))
			displayData()
		})
		tr.append(name, author, description, date, category,buy,bookmark,price);
		tdody.append(tr)
	})

}