// Sample Input 1 

// 5
// 1 2 3 4 5
// Sample Output 1

// 1
// 3
// 5
// Hint

// In the sample test case, the value stored inn = 5and the value stored inarr = [1 2 3 4 5]

// The odd numbers in the array are1 3 5

// Therefore, the output will be

// 1
// 3
// 5

function oddArray(n, arr){

    for(var i =0;i<=arr.length;i++){
   if(arr[i]%2===1){
     console.log(arr[i])
   }
 }
 }
 