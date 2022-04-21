// Sample Input 1 

// 5
// 1 2 3 4 5
// Sample Output 1

// 6
// Hint

// In the sample test case, the value stored inn = 5and the value stored inarr = [1 2 3 4 5]

// The only even numbers in the array are2 4

// Therefore, sum of even elements are : 2 + 4 = 6

// 6

function evenArraySum(n, arr){
    var bag = 0;
 for(var i =0;i<=arr.length;i++){
if(arr[i]%2===0){
  bag = bag + arr[i]
}
}
console.log(bag);

}
