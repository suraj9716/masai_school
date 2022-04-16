// Sample Input 1 

// 2
// Sample Output 1

// *
// **
// Sample Input 2 

// 1
// Sample Output 2

// *

function patternPrinting(N) {
    for(var j=1;j<=N;j++){
         var bag = "";
        for(var i =1;i<=j;i++){
            bag = bag +"*";
        }
        console.log(bag)
    }
}