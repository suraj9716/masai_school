// Sample Input 1 

// 4
// Sample Output 1

// 1 2 3 4 
// 5 6 7 8 
// 9 10 11 12 
// 13 14 15 16 

function patternOfN(N) {
    var count =1;
    for(var i =1;i<=N;i++){
        var bag = "";
        for(var j =1;j<=N;j++){
            bag = bag + count + " ";
            count++;
        }
        console.log(bag)
    }
 }