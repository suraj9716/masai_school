// object methods are basically functions that we can use to interact with the data present inside the object

var obj={
    name:"suraj",
    dob:"28 sept",
    place:"delhi",
    print: function(){
        console.log(this.name,this.dob,this.place)
    }
}
obj.print()