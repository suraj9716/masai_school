// Sample Input 1 

// 5
// Sample Output 1

// 120
// Hint

// In the sample test case, you are given a numbernum = 5.

// According to the definition, the factorial ofnumwill be5*4*3*2*1 = 120

function factorialOfNumber(num){
    var bag = 1;
	for(var i =num;i>=1;i--){
	    	bag = bag*i;
	}
console.log(bag)
}
