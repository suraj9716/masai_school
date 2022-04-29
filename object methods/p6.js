// use retrun in function

var obj={
    name:"suraj",
    age:27,
    add : function (x,y){
        return x**2+y**3;
    }
}
var x = obj.add(3,7);
console.log(x)