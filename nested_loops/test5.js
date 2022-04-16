// Sample Input 1 

// 4
// Sample Output 1

// 1
// 1
// 4
// 4

function oddSumAgain(num) {
    var sum = 0;
    for(var i =1;i<=num;i++){
          if(i%2===1){
              sum = sum+i;
          }
            console.log(sum)
        }
}
