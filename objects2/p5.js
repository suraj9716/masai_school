// find the element whose occurance is 1

var arr=[3,2,7,7,3,4,2,5,6];
// step 1 taking an empty object
var obj = {};

// step 2 Run a loop on the array to check the occ.
for(var i =0;i<arr.length;i++){
    var key = arr[i];
    if(obj[key]==undefined){
        obj[key]=1;
    }
    else{
        obj[key]++;
    }
}
for(var bhola in obj){
    if(obj[bhola]==1){
        console.log(bhola);
    }
}



