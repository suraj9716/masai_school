// Sample Input 1 

// 6
// ankush
// Sample Output 1

// n
// u
// h
// Hint

// In the sample test case, the value stored inN = 6, and the value stored instr = "ankush"

// Therefore, the characters at odd positions are

// n - 1, u - 3, h - 5
// Therefore, the output becomes

// n
// u 
// h

function charAtOddPos(N,str) {
    for(var i =0;i<=N-1;i++){
       if(i%2===1){
           console.log(str[i])
       }
   }
   
}