// you can write your js code here

let form=document.getElementById("form");

form.addEventListener("submit", ()=>{
	ObjFun()
})


let userData = JSON.parse(localStorage.getItem("book-list"))||[];

function ObjFun(){
	event.preventDefault();
	let obj={
		name:form.name.value,
		author:form.author.value,
		description: form.desc.value,
        date:form.added.value,
		category: form.category.value,
		price:form.price.value
	}
	userData.push(obj)
	localStorage.setItem("book-list", JSON.stringify(userData))
}


