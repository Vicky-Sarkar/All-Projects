// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT ? import.meta.env.REACT_APP_JSON_SERVER_PORT : 9090}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //

let mainSection = document.getElementById("data-list-wrapper");

let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

let fetchRecipesBtn = document.getElementById('fetch-recipes');
let fetchEmployeesBtn = document.getElementById('fetch-employees');

let filterLessThan50Btn = document.getElementById("filter-less-than-50");
let filterMoreThanEqual50Btn = document.getElementById("filter-more-than-equal-50");

let catsData = []
//JSON.parse(localStorage.getItem("cat")) || [];

let catdata = `${baseServerURL}/cats`
fetchRecipesBtn.addEventListener("click", () => {
	catData(catdata)
})

sortAtoZBtn.addEventListener("change", () => {
	sortAtoZ(catsData)
})
sortZtoABtn.addEventListener("change", () => {

	sortZtoA(catsData)
})



async function catData(data) {
	let res = await fetch(data)
	let myData = await res.json()

	//sortAtoZ(myData)
	catsData.push(myData)

	myData.map((item) => {

		console.log(item)
		mainSection.innerHTML = `


	   <div class="card">
		        <div class="card-image">
		          <img src=${item.image} alt="">
		        </div>
		         <div class="card-body">
		           <h3 class="card-item card-title"> ${item.name}</h3>
		           <div class="card-item card-description">
		           ${item.description ? item.description.substring(0, 75) : ""}
		          </div>
		          <div class="card-item  card-additional-info">${item.cost}</div>
		        </div>
		      </div>
	`





	})



	function sortAtoZ(catsData) {
		catsData.sort((a, b) => {
			return a.catsData.prince - b.catsData.prince
		})
	}


	function sortZtoA(catsData) {
		catsData.sort((a, b) => {
			return b.catsData.prince - a.catsData.prince
		})
	}








	// 	   <div class="card">
	// 	        <div class="card-image">
	// 	          <img src="${myData.image}" alt="">
	// 	        </div>
	// 	         <div class="card-body">
	// 	           <h3 class="card-item card-title"> ${myData.name}</h3>
	// 	           <div class="card-item card-description">
	// 	           ${myData.description}
	// 	          </div>
	// 	          <div class="card-item  card-additional-info">${myData.cost}</div>
	// 	        </div>
	// 	      </div>




	//console.log(myData[`${id}`])
}

