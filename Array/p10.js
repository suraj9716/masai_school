// Sample Input 1 

// 5
// 1 2 3 4 5
// Sample Output 1

// 5
// Hint

// Array elements are 1 2 3 4 5. Maximum element in these array is 5.

function maximumInArray(N,arr){
    var bag = arr[0];
   for(var i =0;i<=arr.length-1;i++){
  if(arr[i]>bag){
    bag = arr[i];
  }
}
 console.log(bag);
}
