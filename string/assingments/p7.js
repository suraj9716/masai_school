// Sample Input 1 

// 6
// ankush
// Sample Output 1

// a
// k
// s
// Hint

// In the sample test case, the value stored inN = 6, and the value stored instr = "ankush"

// Therefore, the characters at even positions are

// a - 0, k - 2, s - 4

// Therefore, the output becomes

// a
// k
// s

function charAtEvenPos(N,str) {
    for(var i =0;i<=N-1;i++){
        if(i%2===0){
            console.log(str[i])
        }
    }
    
}
