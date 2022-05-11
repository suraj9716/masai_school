// how many time each element is present
// find the frequency of each element
var arr=[7,2,7,7,3,4,2];
var obj ={};
for(var i =0;i<arr.length;i++){
    var char = arr[i];
    if(obj[char]==undefined){
        obj[char]=1;
    }
    else{
        obj[char]++;
    }
}
for(var key in obj){
    console.log(key+"-"+obj[key])
}