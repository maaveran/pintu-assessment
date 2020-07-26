let Uri = `https://gist.githubusercontent.com/Jekiwijaya/0b85de3b9ff551a879896dd78256e9b8/raw/e9d58da5d4df913ad62e6e8dd83c936090ee6ef4/gistfile1.txt`
let Sp  =  require('superagent')

function getStringFromGithub(){
	try{
		return new Promise(async(resolve,reject)=>{
			await Sp
					.get(Uri)
					.then((data)=>{
						resolve(data.text)	
					})	
					.catch((error)=>{
						reject(error)
					})
		})
	}catch(e){
		return Promise.reject(e.message || e.stderr)
	}
}

function firstOrder(source){
	try{
	   let newObjLexico = [];
	  	   
	   const arr =  source.toString().split("");
	   
	   arr.map((data,index)=>{
	   	if(newObjLexico.length == 0){
	   		newObjLexico.push(data)
	   	}else if(newObjLexico.indexOf(data) ==  -1){
	   		newObjLexico.push(data)
	   	}else{
		   if(newObjLexico[newObjLexico.length -1] < data ){
			   delete newObjLexico[newObjLexico.indexOf(data)] 
		   }
	   	}
		   
	   }) 	
	   	
	   	let cleanArr = newObjLexico.filter(x => typeof x === 'string' && x.length > 0)
	   	return cleanArr.join("");					  
    }catch(e){
	    return e.message
    }
}

function smallestOrder(source){
	try{
	   let newObjLexico = [];
	  	   
	   const arr =  source.toString().split("");
	   
	   arr.map((data,index)=>{
	   	if(newObjLexico.length == 0){
	   		newObjLexico.push(data)
	   	}else if(newObjLexico.indexOf(data) ==  -1){
	   		newObjLexico.push(data)
	   	}else{
		   if(newObjLexico[newObjLexico.length -1] < data ){
			   delete newObjLexico[newObjLexico.indexOf(data)] 
			   newObjLexico.push(data)
		   }
	   	}
		   
	   }) 	
	   	
	   	let cleanArr = newObjLexico.filter(x => typeof x === 'string' && x.length > 0)
	   	return cleanArr.join("");					  
    }catch(e){
	    return e.message
    }
	
}




async function main(){
	try{
		let data = await getStringFromGithub()
	                    .then((result)=>{
		                 	let firstOrders =  firstOrder(result)
		                 	let smallestOrders = smallestOrder(result)
						 	return { firstOrders,smallestOrders}
		                 	
	                    })
	                    .catch((error)=>{
		                    console.log(error)
	                    })

	    console.log('first order :' ,data.firstOrders)
	    console.log('smallest order : ' ,data.smallestOrders)
	}catch(error){
		console.log(error.message ||  error.stderr)
	}
	
		}

main()


