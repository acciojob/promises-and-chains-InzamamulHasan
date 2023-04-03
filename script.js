//your JS code here. If required.
let a=document.querySelector("form");
a.addEventListener("submit",function(evt){
	evt.preventDefault();
	let age=document.getElementById("age").value;
	let name=document.getElementById("name").value;
	if(age!="" && name!=""){
		let pr1=new Promise(function(resolve,reject){
			setTimeout(function(){
				if(age>18){
				resolve(`Welcome, ${name}. You can vote.`);
				}else{
		           reject(`Oh sorry ${name}. You aren't old enough`);
				}
			},4000);
		
	    })
	    pr1.then(function(ans){
		   alert(ans);
		   console.log("inza");
		   console.log(ans);
	    }).catch((err)=>{
		  alert(err);
	    })
    }
})
