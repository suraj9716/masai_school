// Sample Input 1 

// 5
// 1 2 3 4 5
// Sample Output 1

// 1
// Hint

// Array elements are 1 2 3 4 5. Minimumelement in this array is 1.

function minimumInArray(N,arr){
    var bag = arr[0];
 for(var i =0;i<=arr.length;i++){
if(arr[i]<bag){
  bag = arr[i];
}
}
console.log(bag);
}
