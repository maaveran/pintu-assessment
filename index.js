let Uri = `https://gist.githubusercontent.com/Jekiwijaya/c72c2de532203965bf818e5a4e5e43e3/raw/2631344d08b044a4b833caeab8a42486b87cc19a/gistfile1.txt`
let Sp  =  require('superagent')

function getPriceStockLib(){
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

function txtToArray(source){
	try{
	   const arr =  source.toString().split(' ');
	   return arr
    }catch(e){
	    return e.message
    }
}

function getMaxProfit(price){
	try{
		let  maxProfit = 0
		let  lowerPrice = price[0]
		
		price.map((prop)=>{
			let price =  prop
			lowerPrice = price < lowerPrice ? price : lowerPrice
			maxProfit  = Math.max(price - lowerPrice, maxProfit)
		})
		
		return maxProfit
	}catch(error){
		return error
	}
}	

async function main(){
	try{
		let source = await getPriceStockLib()
	                    .then((result)=>{
		                    let toBeArray 	=  txtToArray(result)
		                    let finalPrice	=   getMaxProfit(toBeArray)
		                    
		                    return finalPrice
	                    })
	                    .catch((error)=>{
		                    console.log(error)
	                    })

	    console.log(source)
	}catch(error){
		console.log(e.message ||  e.stderr)
	}
	
		}

main()


