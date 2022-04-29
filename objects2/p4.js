// Problem: find the sum of element whose occurence is 2
// first i have to find the number of times
// after that i have to see whose occurance is 2 i have to add them

var arr=[7,2,7,7,3,3,4,2];
var obj = {};

// step 1 : find the occurance/frequency
for(var i=0;i<arr.length;i++){
    var key = arr[i];
    if(obj[key]==undefined){
        obj[key]=1;
    }
    else{
        obj[key]++;
    }
}

// step 2 : find the sum
var sum = 0;
for(var i in obj){
   if(obj[i]==2){
       sum = sum+Number(i);
   }
}
console.log(sum)
