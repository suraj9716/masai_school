// Sample Input 1 

// 5
// 1 2 3 4 5
// Sample Output 1

// 9
// Hint

// In the sample test case, the value stored inn = 5and the value stored inarr = [1 2 3 4 5]

// The odd numbers in the array are1 3 5

// Therefore, the sum of odd elements : 1+3+5 = 9

// 9

function oddArraySum(n, arr){
    var bag = 0;
 for(var i =0;i<arr.length;i++){
if(arr[i]%2===1){
  bag = bag + arr[i]
}
}
console.log(bag);
}
