// Sample Input 1 

// 4
// Sample Output 1

// 6
// Sample Input 2 

// 3
// Sample Output 2

// 2
// Hint

// Numbers less than or equal to 4 are :- [1 2 3 4]

// Even Numbers less than or equal to 4 are :- [2 4], whose sum is 2 + 4 = 6.

// Numbers less than or equal to 3 are :- 1 2 3

// Even Numbers less than or equal to 4 are :- [2], whose sum is 2.

function sumRelatedProblem(N) {
    var sum = 0;
   for(var i =1;i<=N;i++){
      if(i%2===0){
          sum = sum+i;
      }
     
   }
    console.log(sum)
}
