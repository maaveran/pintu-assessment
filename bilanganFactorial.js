function calculate(start) {

    let arr = [1],
    	iteration = 1,
    	pivot = arr.length == 1 ? start :  Math.floor(start / 2),
    	i, j;

	if(start % 2 === 0){
		i = 2;
	    j = 1;
	}else{
		i = 3;
		j = 2;
	}


    for (i; i <= pivot; i += j) {
        if(start % i === 0){
	        iteration += 1
	        
	        if(i == start && iteration > 6){
		        
	        }else{
		    	arr.push(i)    
	        }
	        
	    }else{
		    false
		}
    }
	
	console.log(arr.length)

}

calculate(262144);