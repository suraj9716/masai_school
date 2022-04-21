// Sample Input 1 

// 5
// 1 2 3 4 5
// Sample Output 1

// 1 2 3 4 5
// Hint

// You need to print elements of array in horizontal

function printHorizontalArray(N,arr){
    var bag = "";
      for(var i =0;i<=arr.length-1;i++){
        bag = bag + arr[i]+" ";
    }
    console.log(bag)
}
