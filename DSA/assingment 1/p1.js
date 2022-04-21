// Sample Input 1 

// 4
// Sample Output 1

// 4
// Sample Input 2 

// 3
// Sample Output 2

// 4
// Hint

// Numbers less than or equal to 4 are :- [1 2 3 4]

// Even Numbers less than or equal to 4 are :- [1 3], whose sum is 1 + 3 = 4.

// Numbers less than or equal to 3 are :- 1 2 3

// Even Numbers less than or equal to 4 are :- [1 3], whose sum is 1+3 = 4.

function sumRelatedOddProblem(n) {
    var sum = 0;
    for(var i =1;i<=n;i++){
       if(i%2===1){
           sum = sum+i;
       }
      
    }
     console.log(sum)
}
