// Sample Input 1 

// 7 2
// Sample Output 1

// 12
// Hint

// In the sample test case, the value stored innum = 7, and the value stored inK = 2. All the values in the range from[1, 7], for whom thei % K == 0is true are
// 2
// 4
// 6

// Therefore, thesum = 2 + 4 + 6 = 12, which is the required output

function divisibleByKII(num,k) {
    var sum = 0;
     for(var i =1;i<=num;i++)
    {
        if(i%k===0){
            sum = sum+i;
           
        }
         
    }
     console.log(sum);
}
