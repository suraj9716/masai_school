// Sample Input 1 

// 5
// 1 3 2 4 5
// Sample Output 1

// 5 4 2 3 1
// Hint

// In the sample test case, the value stored insize = 5, and the array is given byarr = [1 3 2 4 5]

// Therefore, the reverse traversal of this array will be

// 5 4 2 3 1

function reverseArrayTraversal(n, arr){
    var bag = "";
    for(var i = arr.length-1;i>=0;i--){
    bag = bag + arr[i]+" ";
 }
 console.log(bag)
}
