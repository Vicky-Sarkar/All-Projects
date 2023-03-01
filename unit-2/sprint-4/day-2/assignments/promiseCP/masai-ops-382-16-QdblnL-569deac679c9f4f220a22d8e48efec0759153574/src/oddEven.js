function getData(data) {
   let promise= new Promise((res,rej)=>{

if(!data){
	typeof(data)
	rej("error")
}
 if(data%2===1){
	setTimeout(()=>{
		res("odd")
	},2000)
}
if(data%2===0){
	
	setTimeout(() => {
		res("even")
	}, 4000)
}

   }) 
	return promise;
}

export default getData
