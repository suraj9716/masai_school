var data ={
    name:"suraj",
    grade:"7th",
    section:"B",
    marks:{
    hindi:55,
    physics:65,
    chem:92
   }
};
    for(var key in data.marks){
    console.log(key+"-->"+data.marks[key])
    }