// Sample Input 1 

// 3 10 5
// Sample Output 1

// 45
// Hint

// Output Explanation :

// For the sample input, X = 3, K = 10 and Y = 5

// First K multiples of X are (First 10 multiples of 3):- 3 6 9 12 15 18 21 24 27 30

// Numbers from above which are visible by Y (i.e 5) are:-  15, 30.

// Sum of numbers divisible by 15 and 30 is 15+30 = 45.

function sumOfMultiples(n,k,y) {
    var sum = 0;
     for(var i =1;i<=k;i++){
     if(i*n%y===0){
        sum = sum +i*n;
        
     }
     }
    console.log(sum) 
 }
 