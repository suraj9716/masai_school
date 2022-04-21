// Output
// Output one of the strings based on condition met


// Sample Input 1 

// 12 14
// 8 19
// Sample Output 1

// Increase Length
// Hint

// In the sample test case, the value stored inL = 12 and W = 14

// The value stored inlength = 8 and width = 19

// In this case, the value stored in L, is greater than the value stored in length. Hence, the output isIncrease Length

function profilePic(L, W, length, width) {
    if(length>L && width>W){
        console.log("Upload");
    }
    else if(length<L){
        console.log("Increase Length");
    }
    else if(width<W){
        console.log("Increase Width");
    }
  }