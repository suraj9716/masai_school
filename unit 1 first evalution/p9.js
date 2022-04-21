// Sample Input 1 

// 971
// Sample Output 1

// 179
// Hint

// In the sample test case, the value stored innum = 971, therefore, the required output becomes,179

function reverseTheValue(num) {
    var rev = num.toString();
    var bag = "";
     for(var i =rev.length;i>=0;i--){
         bag = bag + rev[i];
         
     }
     console.log(bag);
 }
 