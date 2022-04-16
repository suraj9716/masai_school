// Sample Input 1 

// 1 10 3
// Sample Output 1

// 3
// Hint

// In this test case

// left is 1, right is 10 and k is 3.

// So all numbers between 1 to 10 are [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

// From above numbers, numbers divisible by 3 are [3, 6, 9]. So total count of numbers divisible by 3 are 3.

function masaiDivisors(left, right, k) {
    var count = 0;
    for(var i =left;i<=right;i++){
        if(i%k===0){
            count++;
        }
    }
       console.log(count);
}