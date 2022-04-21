// Sample Input 1 

// 4
// Sample Output 1

// 8
// Sample Input 2 

// 3
// Sample Output 2

// 10
// Hint

// When 32 is divided by 4, answer is 8. Floor value of 8 is 8. So x is 8.

// As per our conditions we need to print the number itself, so we print 8.



// When 32 is divided by 3, answer is10.66. Floor value of 10.66 is 10. So x is 10.

// As per our conditions we need to print the number itself, so we print 10.

function divisionTask(N) {
    var x = Math.floor(32/N);
    if(x===0){
        console.log("Too Low")
    }
    else if(x<=0 || N===0){
        console.log("-1")
    }
    else {
        console.log(x)
    }
}
