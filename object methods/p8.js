// calculate the perimeter and area of rectangle by making separate methods

// access the data present inside the same object and perform operation on in, then give you desired output

var rect={
    length:9,
    breadth:6,
    area:function(){
     return this.length*this.breadth;
    },
    peri:function(){
        return 2*(this.length+this.breadth)
    }
}
var area = rect.area();
var perim = rect.peri();
console.log(area);
console.log(perim);