// Write code related to dashboard page here
let priorityData = JSON.parse(localStorage.getItem("priority-list"))||[];
let tbody=document.getElementById("tbody");
let taskCount = document.getElementById("task-count");
let data = JSON.parse(localStorage.getItem("task-list")) || [];
let dofilter=document.getElementById("filter");

dofilter.addEventListener("change",fulterFun);

function fulterFun(){
	let value = dofilter.value;
	data = JSON.parse(localStorage.getItem("task-list"));
	if (value =="Low"){
		data = data.filter((elem) => elem.priority=="Low");
		display();
	} else if (value =="Medium"){
		data = data.filter((elem) => elem.priority == "Medium");
		display();
}else if(value=="High"){
		data = data.filter((elem) => elem.priority == "High");
		display();
}else{
		data = JSON.parse(localStorage.getItem("task-list"));
		display();
}

}



display()
     function display(){
	tbody.innerHTML="";
	taskCount.innerText = data.length;
	data.forEach(function(elem,index){
		let tr = document.createElement("tr");
        let name = document.createElement("td");
        name.innerText=elem.name;
	
	    let description = document.createElement("td");
	    description.innerText = elem.description;
		let start = document.createElement("td");
		start.innerText = elem.start;

        let end=document.createElement("td");
		end.innerText=elem.end;

       let priority=document.createElement("td");
		priority.innerText=elem.priority;
		let add = document.createElement("td");
		add.innerText="add";
		add.addEventListener("click",()=>{
			priorityData.push(elem);
			localStorage.setItem("priority-list", JSON.stringify(priorityData));
       let updateddata=data.splice(index,1);
			localStorage.setItem("task-list", JSON.stringify(updateddata));
			display();
		})
		

		tr.append(name, description,start,end,priority,add);
	   tbody.append(tr);

		
})

}
