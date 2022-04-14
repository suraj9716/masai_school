var a= "lfisrvbnxehenubtgnj"

var count =a.length
console.log("Length"+ count)
var i =0
while(i<a.length)
{
    console.log(a[i]);
    var j =i+1;
    var s = a[i];
    while(j<a.length)
    {
        s += a[j];
        if(a[i] == a[j])
        {
           console.log(s)
            count++;
            break;
        }
        j++;
    }
    i++;   

}
console.log(count)