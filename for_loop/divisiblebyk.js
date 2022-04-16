// Sample Input 1 

// 7 2
// Sample Output 1

// 2
// 4
// 6

function divisibleByK(num,k) {
    for(var i =1;i<=num;i++)
    {
        if(i%k===0){
            console.log(i);
        }
    }
}
